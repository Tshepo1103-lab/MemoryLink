using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListGender:int
    { 
        [Description("Female")]
        Female = 1,

        [Description("Male")]
        Male = 2,

        [Description("Other")]
        Other = 3,

    }
}
