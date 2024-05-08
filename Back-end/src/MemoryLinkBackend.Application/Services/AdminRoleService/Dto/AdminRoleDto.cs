using Abp.Application.Services.Dto;
using MemoryLinkBackend.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.AdminRoleService.Dto
{
    public class AdminRoleDto:EntityDto<Guid>
    {
        public long UserId { get; set; }
        ///<summary>
        ///
        /// </summary>
        public Guid HospitalId { get; set; }
    }
}
