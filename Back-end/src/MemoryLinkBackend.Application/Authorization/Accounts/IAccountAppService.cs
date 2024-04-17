using System.Threading.Tasks;
using Abp.Application.Services;
using MemoryLinkBackend.Authorization.Accounts.Dto;

namespace MemoryLinkBackend.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
