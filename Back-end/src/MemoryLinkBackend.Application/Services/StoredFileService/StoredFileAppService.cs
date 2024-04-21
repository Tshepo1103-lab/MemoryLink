using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.StoredFileService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.StoredFileService
{
    public class StoredFileAppService : AsyncCrudAppService<StoredFile, StoredFileDto, Guid>
    {
        public StoredFileAppService(IRepository<StoredFile, Guid> repository) : base(repository)
        {
        }
    }
}
