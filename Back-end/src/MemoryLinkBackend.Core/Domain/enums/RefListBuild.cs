using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MemoryLinkBackend.Domain.enums
{
    public enum RefListBuild:int
    {
        [Description("Thin and lean, with little body fat or muscle mass")]
        Slender = 1,

        [Description("Strong and well-developed muscles, often with low body fat")]
        Muscular = 2,

        [Description("Full-figured with rounded hips and bust, often with a smaller waist")]
        Curvy = 3,

        [Description("Compact and solidly built, with a broad or thick physique")]
        Stocky = 4,

        [Description("Well-proportioned with defined musculature and moderate body fat")]
        Athletic = 5,

        [Description("Tall and thin, with long limbs and a slender build")]
        Lanky = 6,

        [Description("Soft and rounded, with slightly higher body fat distribution")]
        Chubby = 7,

        [Description("Other")]
        Other = 8,

    }
}
