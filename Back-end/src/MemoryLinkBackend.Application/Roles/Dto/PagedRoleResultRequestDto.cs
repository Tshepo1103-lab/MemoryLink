using Abp.Application.Services.Dto;

namespace MemoryLinkBackend.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

