using Abp.MultiTenancy;
using MemoryLinkBackend.Authorization.Users;

namespace MemoryLinkBackend.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
