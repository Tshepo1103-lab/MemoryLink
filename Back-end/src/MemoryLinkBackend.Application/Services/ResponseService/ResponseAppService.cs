using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.ResponseService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ResponseService
{
    public class ResponseAppService : AsyncCrudAppService<Response, ResponseDto, Guid>
    {
        public ResponseAppService(IRepository<Response, Guid> repository) : base(repository)
        {
        }
    }
}
