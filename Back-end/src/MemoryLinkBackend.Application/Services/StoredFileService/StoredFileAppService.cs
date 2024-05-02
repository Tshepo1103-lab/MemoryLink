using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.UI;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.StoredFileService.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.StoredFileService
{
    public class StoredFileAppService : AsyncCrudAppService<StoredFile, StoredFileDto, Guid>
    {
        private readonly IRepository<StoredFile, Guid> _repository;
        private readonly string BaseUri = "App_Data/Images";
        public StoredFileAppService(IRepository<StoredFile, Guid> repository, IRepository<StoredFile, Guid> _repository) : base(repository)
        {
            this._repository = _repository;
        }
        [HttpPost]
        [Consumes("multipart/form-data")]

        public async Task<StoredFile> CreateFile([FromForm] StoredFileDto input)
        {
            ValidateFileUpload(input);
            //check existence
            if (await _repository.FirstOrDefaultAsync(x => x.Filename == input.FileData.FileName) == null)
            {
                string newFileName = Guid.NewGuid().ToString();
                string newFileNameWType = newFileName + Path.GetExtension(input.FileData.FileName);
                var File = new StoredFile
                {
                    FileData = input.FileData,
                    FileExtention = Path.GetExtension(input.FileData.FileName),
                    FileLength = input.FileData.Length,
                    Filename = newFileName,
                    FilePath = $"{Directory.GetCurrentDirectory()}/{BaseUri}/{newFileNameWType}"
                };

                using (var fileStream = input.FileData.OpenReadStream())
                {
                    await SaveFile(File.FilePath, fileStream);
                }


                return await _repository.InsertAsync(File);

                using (var client = new HttpClient())
                {
                    using (var content = new MultipartFormDataContent())
                    {

                        // Add the image file to the multipart form data content
                        content.Add(new StreamContent(input.FileData.OpenReadStream()), "image", newFileNameWType);

                        // Send HTTP POST request to Python backend
                        var response = await client.PostAsync("http://python-project-url/store_profile_with_image", content);

                        // Handle response
                        if (response.IsSuccessStatusCode)
                        {
                            // Handle successful response
                            return null;
                        }
                        else
                        {
                            // Handle failure
                            throw new UserFriendlyException($"Failed to post the image to another server");
                        }
                    }
                }

            }
            else
            {
                throw new UserFriendlyException("Image name already exists");
            }

        }
        public async Task<string> GetFile(Guid id)
        {
            var File = await _repository.FirstOrDefaultAsync(x => x.Id == id);
            if (File == null)
                //return Content("filename not present");
                throw new UserFriendlyException("File not found");

            byte[] inArray = System.IO.File.ReadAllBytes(File.FilePath);
            return Convert.ToBase64String(inArray);
        }
        private void ValidateFileUpload(StoredFileDto request)
        {
            var allowedExtensions = new string[] { ".jpg", ".jpeg", ".png" };

            if (!allowedExtensions.Contains(System.IO.Path.GetExtension(request.FileData.FileName)))
            {
                throw new UserFriendlyException("File extension is not supported!");
            }

            if (request.FileData.Length >= 10485760) { throw new UserFriendlyException("Please upload image with file size less than 10MB"); }
        }

        private async Task SaveFile(string filePath, Stream stream)
        {
            try
            {
                using (var fs = new FileStream(filePath, FileMode.Create))
                {
                    await stream.CopyToAsync(fs);
                }
            }
            catch
            {
                throw new UserFriendlyException($"Failed to save file: {filePath}");
            }
        }

    }
}
