using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.ProfileService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ProfileService
{
    public class ProfileAppService : AsyncCrudAppService<Profile, ProfileDto, int>
    {
        public ProfileAppService(IRepository<Profile, int> repository) : base(repository)
        {
        }
        
    }
}
