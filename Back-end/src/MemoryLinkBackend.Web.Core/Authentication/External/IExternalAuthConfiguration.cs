using System.Collections.Generic;

namespace MemoryLinkBackend.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
