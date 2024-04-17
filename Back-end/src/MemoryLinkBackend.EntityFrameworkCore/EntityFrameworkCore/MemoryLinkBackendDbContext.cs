using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using MemoryLinkBackend.Authorization.Roles;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.MultiTenancy;

namespace MemoryLinkBackend.EntityFrameworkCore
{
    public class MemoryLinkBackendDbContext : AbpZeroDbContext<Tenant, Role, User, MemoryLinkBackendDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public MemoryLinkBackendDbContext(DbContextOptions<MemoryLinkBackendDbContext> options)
            : base(options)
        {
        }
    }
}
