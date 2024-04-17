using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MemoryLinkBackend.Configuration;
using MemoryLinkBackend.EntityFrameworkCore;
using MemoryLinkBackend.Migrator.DependencyInjection;

namespace MemoryLinkBackend.Migrator
{
    [DependsOn(typeof(MemoryLinkBackendEntityFrameworkModule))]
    public class MemoryLinkBackendMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public MemoryLinkBackendMigratorModule(MemoryLinkBackendEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(MemoryLinkBackendMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                MemoryLinkBackendConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(MemoryLinkBackendMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
