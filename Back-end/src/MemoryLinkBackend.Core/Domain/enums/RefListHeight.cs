using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListHeight:int
    {
        [Description("Less than 1.50 m")]
        LessThan150 = 1,

        [Description("1.50 - 1.59 m")]
        Height150159 = 2,

        [Description("1.60 - 1.69 m")]
        Height160169 = 3,

        [Description("1.70 - 1.79 m")]
        Height170179 = 4,

        [Description("1.80 - 1.89 m")]
        Height180189 = 5,

        [Description("1.90 m and above")]
        Height190Above = 6,

        [Description("Other")]
        Other = 10,
    }
}
