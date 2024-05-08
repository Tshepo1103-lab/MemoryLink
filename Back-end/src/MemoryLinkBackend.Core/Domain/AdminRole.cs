using Abp.Domain.Entities.Auditing;
using MemoryLinkBackend.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain
{
    public class AdminRole: FullAuditedEntity<Guid>
    {
        public virtual User User { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual Hospital Hospital { get; set; }
    }
}
