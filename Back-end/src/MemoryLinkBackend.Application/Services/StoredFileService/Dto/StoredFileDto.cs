using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.StoredFileService.Dto
{
    public class StoredFileDto:EntityDto<Guid>
    {
        public IFormFile? FileData { get; set; }
    }
}
