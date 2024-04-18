using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListEyeColor:int
    {
        [Description("Dark brown")]
        Brown = 1,

        [Description("Brown with green or gold tones")]
        Hazel = 2,

        [Description("Light to deep blue")]
        Blue = 3,

        [Description("Light to dark green")]
        Green = 4,

        [Description("Neutral gray with hints of blue or green")]
        Gray = 5,

        [Description("Golden or coppery")]
        Amber = 6,

        [Description("Two different colors")]
        Heterochromia = 7,

        [Description("Very dark brown, almost black")]
        Black = 8,

        [Description("Rare, associated with certain medical conditions or albinism")]
        Red = 9,

        [Description("Other")]
        Other = 10,
    }
}
