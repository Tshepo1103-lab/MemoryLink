using System.ComponentModel.DataAnnotations;

namespace MemoryLinkBackend.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}