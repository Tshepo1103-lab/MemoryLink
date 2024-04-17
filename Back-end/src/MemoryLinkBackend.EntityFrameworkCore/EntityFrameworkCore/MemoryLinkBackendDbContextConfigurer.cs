using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace MemoryLinkBackend.EntityFrameworkCore
{
    public static class MemoryLinkBackendDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<MemoryLinkBackendDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<MemoryLinkBackendDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
