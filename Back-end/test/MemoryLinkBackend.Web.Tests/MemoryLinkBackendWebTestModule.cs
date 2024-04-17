using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using MemoryLinkBackend.EntityFrameworkCore;
using MemoryLinkBackend.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace MemoryLinkBackend.Web.Tests
{
    [DependsOn(
        typeof(MemoryLinkBackendWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class MemoryLinkBackendWebTestModule : AbpModule
    {
        public MemoryLinkBackendWebTestModule(MemoryLinkBackendEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(MemoryLinkBackendWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(MemoryLinkBackendWebMvcModule).Assembly);
        }
    }
}