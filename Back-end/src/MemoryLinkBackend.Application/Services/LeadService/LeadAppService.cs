
using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.LeadService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.LeadService
{
    public class LeadAppService : AsyncCrudAppService<Lead, LeadDto, Guid>
    {
        public LeadAppService(IRepository<Lead, Guid> repository) : base(repository)
        {
        }
    }
}
