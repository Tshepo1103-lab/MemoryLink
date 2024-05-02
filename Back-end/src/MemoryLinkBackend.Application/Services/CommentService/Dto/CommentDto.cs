﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MemoryLinkBackend.Authorization.Users;
using MemoryLinkBackend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.CommentService.Dto
{
    public class CommentDto : EntityDto<Guid>
    {
        [AutoMap(typeof(Comment))]
        public string Message { get; set; }
        ///<summary>
        ///
        /// </summary>
        public long UserId { get; set; }
        ///<summary>
        ///
        /// </summary>
        public int ProfileId { get; set; }
    }
}