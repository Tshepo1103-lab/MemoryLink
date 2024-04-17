using Abp.Application.Services;
using MemoryLinkBackend.MultiTenancy.Dto;

namespace MemoryLinkBackend.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

