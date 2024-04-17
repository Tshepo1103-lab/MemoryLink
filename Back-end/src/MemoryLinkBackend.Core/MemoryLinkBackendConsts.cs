using MemoryLinkBackend.Debugging;

namespace MemoryLinkBackend
{
    public class MemoryLinkBackendConsts
    {
        public const string LocalizationSourceName = "MemoryLinkBackend";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "0a2b2f4a6e4e424bae85ab0b823b5f50";
    }
}
