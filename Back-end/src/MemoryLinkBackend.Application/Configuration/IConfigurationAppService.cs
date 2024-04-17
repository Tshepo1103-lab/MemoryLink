using System.Threading.Tasks;
using MemoryLinkBackend.Configuration.Dto;

namespace MemoryLinkBackend.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
