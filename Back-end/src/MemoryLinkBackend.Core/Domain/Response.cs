using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain
{
    public class Response:FullAuditedEntity<Guid>
    {
        public virtual string Message {  get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual Lead Lead { get; set; }
    }
}
