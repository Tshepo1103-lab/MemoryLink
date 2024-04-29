using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using MemoryLinkBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.HospitalService.Dto
{
    [AutoMap(typeof(Hospital))]
    public class HospitalDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  string Email { get; set; }
        ///<summary>
        ///
        /// </summary>
        public  string Contact { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Url { get; set; }
    }
}
