using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.LeadService.Dto
{
    public class LeadDto: EntityDto<Guid>
    {
        [AutoMap(typeof(Lead))]
        public  string Message { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  long UserId { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  int ProfileId { get; set; }
    }
}
