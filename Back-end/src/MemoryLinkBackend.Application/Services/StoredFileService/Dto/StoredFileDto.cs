using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MemoryLinkBackend.Domain;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.StoredFileService.Dto
{
    [AutoMap(typeof(StoredFile))]
    public class StoredFileDto:EntityDto<Guid>
    {
        public IFormFile? FileData { get; set; }
    }
}
