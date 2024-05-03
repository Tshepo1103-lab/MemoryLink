
using Abp.Application.Services;
using Abp.Domain.Repositories;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Roles;
using MemoryLinkBackend.Services.CommentService.Dto;
using MemoryLinkBackend.Services.HospitalService.Dto;
using MemoryLinkBackend.Services.ProfileService.Dto;
using MemoryLinkBackend.Services.StoredFileService.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static MemoryLinkBackend.Services.ProfileService.Dto.GetProfileDto;

namespace MemoryLinkBackend.Services.CommentService
{
    public class CommentAppService : AsyncCrudAppService<Comment, CommentDto, Guid>
    {
        private readonly IRepository<Comment, Guid> _repository;
        private readonly IRepository<Profile, int> _profileRepository;
        private readonly IRepository<User, long> _userRepository;

        public CommentAppService(IRepository<Comment, Guid> repository, IRepository<Profile, int> profileRepository,
            IRepository<User, long> userRepository) : base(repository)
        {
            _profileRepository = profileRepository;
            _repository = repository;
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<List<CommentDto>> GetAllCommentsByIdAsync(int profileId)
        {
            var comments = await _repository
                .GetAllIncluding(b => b.Profile, x => x.User)
                .Where(b => b.Profile.Id == profileId)
                .ToListAsync();

            var commentsDto = ObjectMapper.Map<List<CommentDto>>(comments);

            return commentsDto;
        }

        [HttpPost]
       
        public async Task<CommentDto> CreateComment(CommentDto input)
        {
            try
            {
              
                var comment = ObjectMapper.Map<Comment>(input);
                comment.Profile = await _profileRepository.GetAsync(input.ProfileId);
                comment.User = await _userRepository.GetAsync(input.UserId);
                comment.DateSent = DateTime.UtcNow;
                var results = await _repository.InsertAsync(comment);
                CurrentUnitOfWork.SaveChanges();

                return ObjectMapper.Map<CommentDto>(results);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Failed to create " + ex.Message);
            }
        }

    }
}
