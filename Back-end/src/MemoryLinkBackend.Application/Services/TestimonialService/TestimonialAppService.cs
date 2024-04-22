using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.TestimonialService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.TestimonialService
{
    public class TestimonialAppService : AsyncCrudAppService<Testimonial, TestimonialDto, Guid>
    {
        public TestimonialAppService(IRepository<Testimonial, Guid> repository) : base(repository)
        {
        }
    }
}
