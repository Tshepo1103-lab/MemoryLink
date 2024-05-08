using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Services.ProfileService
{
    public static class EnumExtensions
    {
        public static TEnum GetEnumValueFromDisplayName<TEnum>(string displayName)
            where TEnum : Enum
        {
            foreach (var field in typeof(TEnum).GetFields(BindingFlags.Static | BindingFlags.Public))
            {
                var displayAttribute = field.GetCustomAttribute<DisplayNameAttribute>();
                if (displayAttribute != null && displayAttribute.DisplayName == displayName)
                {
                    return (TEnum)field.GetValue(null);
                }
            }
            throw new ArgumentException($"Enum value with display name '{displayName}' not found.", nameof(displayName));
        }
    }

}
