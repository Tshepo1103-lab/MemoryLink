using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using MemoryLinkBackend.Authorization.Roles;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.MultiTenancy;
using MemoryLinkBackend.Domain;

namespace MemoryLinkBackend.EntityFrameworkCore
{
    public class MemoryLinkBackendDbContext : AbpZeroDbContext<Tenant, Role, User, MemoryLinkBackendDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public MemoryLinkBackendDbContext(DbContextOptions<MemoryLinkBackendDbContext> options)
            : base(options)
        {
        }
        public DbSet<AdminRole> AdminRoles { get; set; }
        public DbSet<Hospital>Hospitals { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet <Response> Responses { get; set; }
        public DbSet <Testimonial> Testimonials { get; set; }

        public DbSet<StoredFile> StoreFiles { get; set; }
    }
}
