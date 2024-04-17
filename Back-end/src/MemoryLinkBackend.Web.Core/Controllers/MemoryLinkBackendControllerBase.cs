using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace MemoryLinkBackend.Controllers
{
    public abstract class MemoryLinkBackendControllerBase: AbpController
    {
        protected MemoryLinkBackendControllerBase()
        {
            LocalizationSourceName = MemoryLinkBackendConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
