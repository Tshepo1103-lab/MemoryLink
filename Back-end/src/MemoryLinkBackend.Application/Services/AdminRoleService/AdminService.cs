using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.AdminRoleService.Dto;
using MemoryLinkBackend.Services.CommentService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.AdminRoleService
{
    public class AdminService : AsyncCrudAppService<AdminRole, AdminRoleDto, Guid>
    {
        public AdminService(IRepository<AdminRole, Guid> repository) : base(repository)
        {
        }
    }
}
