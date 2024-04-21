using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;

namespace MemoryLinkBackend.Services.HospitalService
{
    public class HospitalAppService : AsyncCrudAppService<Hospital, HospitalDto, Guid>
    {
        public HospitalAppService(IRepository<Hospital, Guid> repository) : base(repository)
        {
        }
    }
}
