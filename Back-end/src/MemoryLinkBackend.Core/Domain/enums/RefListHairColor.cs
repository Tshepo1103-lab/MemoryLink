using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListHairColor:int
    {
        [Description("Black")]
        Black = 1,

        [Description("Brown")]
        Brown = 2,

        [Description("Blonde")]
        Blonde = 3,

        [Description("Red")]
        Red = 4,

        [Description("Gray")]
        Gray = 5,

        [Description("White")]
        White = 6,

        [Description("Other")]
        Other = 10,
    }
}
