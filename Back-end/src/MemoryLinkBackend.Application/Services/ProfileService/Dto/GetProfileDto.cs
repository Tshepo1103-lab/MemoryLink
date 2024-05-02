using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Domain.enums;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ProfileService.Dto
{
    public class GetProfileDto : EntityDto<int>
    {
        [AutoMap(typeof(Profile))]
        public class NewProfileDto : EntityDto<int>
        {
            public string Gender { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string AgeRange { get; set; }
            ///<summary>
            ///
            /// </summary>
            public string Height { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string Build { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string EyeColor { get; set; }
            ///<summary>
            ///
            /// </summary>
            public string SkinTone { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string HairColor { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string LocationFound { get; set; }
            ///<summary>
            ///
            /// </summary>
            public string DistinguishingFeature { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string MoreDetails { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public DateOnly AdmissionDate { get; set; }
            ///<summary>
            ///
            /// </summary>
            public string Type { get; set; }
            /// <summary>
            /// 
            /// </summary>
            public string Ward { get; set; }

            public Guid HospitalId { get; set; }
            public string? image { get; set; }
            public Guid? imageId { get; set; }
        }
    }
}
