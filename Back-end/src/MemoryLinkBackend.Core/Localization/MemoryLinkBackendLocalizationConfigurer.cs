using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace MemoryLinkBackend.Localization
{
    public static class MemoryLinkBackendLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(MemoryLinkBackendConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(MemoryLinkBackendLocalizationConfigurer).GetAssembly(),
                        "MemoryLinkBackend.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
