using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Domain.enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ProfileService.Dto
{
    [AutoMap(typeof(Profile))]
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
        ///<summary>
        ///
        /// </summary>
        public ReflistType Type { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Ward {  get; set; }
        
    }
}
