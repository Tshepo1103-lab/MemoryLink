using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain
{
    public class Hospital:FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual string Email { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual string Contact { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string Url { get; set; }
    }
}
