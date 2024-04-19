using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListSkinTone:int
    {
        [Description("Fair")]
        Fair = 1,

        [Description("Light")]
        Light = 2,

        [Description("Medium")]
        Medium = 3,

        [Description("Olive")]
        Olive = 4,

        [Description("Dark")]
        Dark = 5,

        [Description("Other")]
        Other = 10,
    }
}
