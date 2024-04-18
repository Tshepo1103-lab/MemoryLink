using Abp.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain
{
    public class StoredFile : Entity<Guid>
    {
        [NotMapped]
        public IFormFile? FileData { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Filename { get; set; }
        /// <summary>
        /// 
        /// </summary>

        public string FileExtention { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public long? FileLength { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string? FilePath { get; set; }
    }
}
