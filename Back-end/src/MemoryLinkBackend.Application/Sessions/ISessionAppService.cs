using System.Threading.Tasks;
using Abp.Application.Services;
using MemoryLinkBackend.Sessions.Dto;

namespace MemoryLinkBackend.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
