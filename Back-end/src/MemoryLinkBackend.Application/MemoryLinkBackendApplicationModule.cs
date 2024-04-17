using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MemoryLinkBackend.Authorization;

namespace MemoryLinkBackend
{
    [DependsOn(
        typeof(MemoryLinkBackendCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class MemoryLinkBackendApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<MemoryLinkBackendAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(MemoryLinkBackendApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
