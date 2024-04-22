using Abp.Domain.Entities.Auditing;
using MemoryLinkBackend.Domain.enums;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain
{
    public class Profile:FullAuditedEntity<int>
    {
        public virtual RefListGender Gender { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual RefListAge AgeRange { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual RefListHeight Height {  get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual RefListBuild Build {  get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual RefListEyeColor EyeColor { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual RefListSkinTone SkinTone { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual RefListHairColor HairColor { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LocationFound { get; set; }
        ///<summary>
        ///
        /// </summary>
        public virtual string DistinguishingFeature { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual string MoreDetails { get; set; }
    }
}
