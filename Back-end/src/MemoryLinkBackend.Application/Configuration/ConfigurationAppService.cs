using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using MemoryLinkBackend.Configuration.Dto;

namespace MemoryLinkBackend.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : MemoryLinkBackendAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
