using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Roles;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.ProfileService.Dto;
using MemoryLinkBackend.Services.StoredFileService;
using MemoryLinkBackend.Services.StoredFileService.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using static MemoryLinkBackend.Services.ProfileService.Dto.GetProfileDto;

namespace MemoryLinkBackend.Services.ProfileService
{
    public class ProfileAppService : AsyncCrudAppService<Profile, ProfileDto, int>
    {
        private readonly IRepository<Profile,int> _repository;
        private readonly IRepository<Hospital,Guid> _hospitalRepository;
        private readonly StoredFileAppService _fileAppService;
        public ProfileAppService(IRepository<Profile, int> repository,IRepository<Hospital,Guid>hospitalRepository, StoredFileAppService fileAppService) : base(repository)
        {
            _fileAppService = fileAppService;
            _hospitalRepository = hospitalRepository;
            _repository = repository;
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ProfileDto> CreateProfile([FromForm] ProfileDto input)
        {
            try
            {
                var file = await _fileAppService.CreateFile(new StoredFileDto { FileData  = input.File });
                var profile = ObjectMapper.Map<Profile>(input);
                profile.Hospital = await _hospitalRepository.GetAsync(input.HospitalId);
                profile.Image = file;
                var results = await _repository.InsertAsync(profile);
                CurrentUnitOfWork.SaveChanges();

                return ObjectMapper.Map<ProfileDto>(results);
            }
            catch(Exception ex)
            {
                throw new InvalidOperationException("Failed to create " +ex.Message);
            }
        }

        [HttpGet]
        public async Task<List<NewProfileDto>> GetAllProfilesByHospitalAsync(Guid hospitalId)
        {
            var profiles = await _repository
                .GetAllIncluding(b => b.Hospital, x => x.Image)
                .Where(b => b.Hospital.Id == hospitalId)
                .ToListAsync();

            var profilesdto = ObjectMapper.Map<List<NewProfileDto>>(profiles);

            foreach (var profile in profilesdto)
            {
                if (profile.image != null)
                {
                    profile.image = await _fileAppService.GetFile((Guid)profile.imageId);
                }
            }

            return profilesdto;
        }

        [HttpGet]
        public async Task<List<NewProfileDto>> GetAllDeceasedProfileAsync()
        {
            var profiles = await _repository
                .GetAllIncluding(b => b.Hospital, x => x.Image)
                .Where(b => (int)b.Type==1)
                .ToListAsync();

            var profilesdto = ObjectMapper.Map<List<NewProfileDto>>(profiles);

            foreach (var profile in profilesdto)
            {
                if (profile.image != null)
                {
                    profile.image = await _fileAppService.GetFile((Guid)profile.imageId);
                }
            }

            return profilesdto;
        }
        [HttpGet]
        public async Task<List<NewProfileDto>> GetAllAliveProfileAsync()
        {
            var profiles = await _repository
                .GetAllIncluding(b => b.Hospital, x => x.Image)
                .Where(b => (int)b.Type == 2)
                .ToListAsync();

            var profilesdto = ObjectMapper.Map<List<NewProfileDto>>(profiles);

            foreach (var profile in profilesdto)
            {
                if (profile.image != null)
                {
                    profile.image = await _fileAppService.GetFile((Guid)profile.imageId);
                }
            }

            return profilesdto;
        }




    }
}
