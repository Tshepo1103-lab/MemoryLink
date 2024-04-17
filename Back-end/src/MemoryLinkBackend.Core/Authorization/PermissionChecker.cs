using Abp.Authorization;
using MemoryLinkBackend.Authorization.Roles;
using MemoryLinkBackend.Authorization.Users;

namespace MemoryLinkBackend.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
