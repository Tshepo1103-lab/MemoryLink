using Abp.Application.Services.Dto;
using MemoryLinkBackend.Domain.enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ProfileService.Dto
{
    public class ProfileDto:EntityDto<int>
    {
        public  RefListGender Gender { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  RefListAge AgeRange { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  RefListHeight Height { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  RefListBuild Build { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  RefListEyeColor EyeColor { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  RefListSkinTone SkinTone { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  RefListHairColor HairColor { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LocationFound { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  string DistinguishingFeature { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public  string MoreDetails { get; set; }
    }
}
