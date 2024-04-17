using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using MemoryLinkBackend.EntityFrameworkCore.Seed;

namespace MemoryLinkBackend.EntityFrameworkCore
{
    [DependsOn(
        typeof(MemoryLinkBackendCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class MemoryLinkBackendEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<MemoryLinkBackendDbContext>(options =>
                {
                    if (options.ExistingConnection != null)
                    {
                        MemoryLinkBackendDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        MemoryLinkBackendDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(MemoryLinkBackendEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
