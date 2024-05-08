using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum ReflistType:int
    {

        [Description("Deceased")]
        Deceased = 1,

        [Description("Patient")]
        Patient = 2,

       
        [Description("Other")]
        Other = 10,
    }
}
