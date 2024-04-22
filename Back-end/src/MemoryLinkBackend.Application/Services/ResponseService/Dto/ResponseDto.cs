using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using MemoryLinkBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ResponseService.Dto
{
    public class ResponseDto:EntityDto<Guid>
    {
        public virtual string Message { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual Guid LeadId { get; set; }
    }
}
