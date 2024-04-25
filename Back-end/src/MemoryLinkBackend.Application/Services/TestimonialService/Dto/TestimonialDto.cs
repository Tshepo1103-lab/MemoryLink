using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.TestimonialService.Dto
{
    [AutoMap(typeof(Testimonial))]
    public class TestimonialDto:EntityDto<Guid>
    {
        public  string Message { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  long UserId { get; set; }
    }
}
