
using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Services.CommentService.Dto;
using MemoryLinkBackend.Services.HospitalService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.CommentService
{
    public class CommentAppService : AsyncCrudAppService<Comment, CommentDto, Guid>
    {
        public CommentAppService(IRepository<Comment, Guid> repository) : base(repository)
        {
        }
    }
}
