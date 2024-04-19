using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListAge:int
    {
        [Description("Under 18")]
        Under18 = 1,

        [Description("18 - 24")]
        Age1824 = 2,

        [Description("25 - 34")]
        Age2534 = 3,

        [Description("35 - 44")]
        Age3544 = 4,

        [Description("45 - 54")]
        Age4554 = 5,

        [Description("55 - 64")]
        Age5564 = 6,

        [Description("65 and older")]
        Over65 = 7,

        [Description("Other")]
        Other = 10,
    }
}
