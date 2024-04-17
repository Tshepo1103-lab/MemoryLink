using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MemoryLinkBackend.Configuration;

namespace MemoryLinkBackend.Web.Host.Startup
{
    [DependsOn(
       typeof(MemoryLinkBackendWebCoreModule))]
    public class MemoryLinkBackendWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public MemoryLinkBackendWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(MemoryLinkBackendWebHostModule).GetAssembly());
        }
    }
}
