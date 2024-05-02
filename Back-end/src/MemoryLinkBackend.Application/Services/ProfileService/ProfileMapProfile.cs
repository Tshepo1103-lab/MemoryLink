using AutoMapper;
using MemoryLinkBackend.Domain;
using MemoryLinkBackend.Domain.enums;
using MemoryLinkBackend.Services.ProfileService.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static MemoryLinkBackend.Services.ProfileService.Dto.GetProfileDto;

namespace MemoryLinkBackend.Services.ProfileService
{
    public class ProfileMapProfile: AutoMapper.Profile
    {
        public ProfileMapProfile()
        {
            CreateMap<NewProfileDto, Domain.Profile>()
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListGender>(src.Gender)))
                .ForMember(dest => dest.AgeRange, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListAge>(src.AgeRange)))
                .ForMember(dest => dest.Height, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListHeight>(src.Height)))
                .ForMember(dest => dest.Build, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListBuild>(src.Build)))
                .ForMember(dest => dest.EyeColor, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListEyeColor>(src.EyeColor)))
                .ForMember(dest => dest.SkinTone, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListSkinTone>(src.SkinTone)))
                .ForMember(dest => dest.HairColor, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<RefListHairColor>(src.HairColor)))
                .ForMember(dest => dest.Type, opt => opt.MapFrom(src => EnumExtensions.GetEnumValueFromDisplayName<ReflistType>(src.Type)));
        }
        
    }
}
