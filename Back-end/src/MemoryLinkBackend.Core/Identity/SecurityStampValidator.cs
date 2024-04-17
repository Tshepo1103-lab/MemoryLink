using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Abp.Authorization;
using MemoryLinkBackend.Authorization.Roles;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.MultiTenancy;
using Microsoft.Extensions.Logging;
using Abp.Domain.Uow;

namespace MemoryLinkBackend.Identity
{
    public class SecurityStampValidator : AbpSecurityStampValidator<Tenant, Role, User>
    {
        public SecurityStampValidator(
            IOptions<SecurityStampValidatorOptions> options,
            SignInManager signInManager,
            ILoggerFactory loggerFactory,
            IUnitOfWorkManager unitOfWorkManager)
            : base(options, signInManager, loggerFactory, unitOfWorkManager)
        {
        }
    }
}
