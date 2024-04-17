using System.Threading.Tasks;
using MemoryLinkBackend.Models.TokenAuth;
using MemoryLinkBackend.Web.Controllers;
using Shouldly;
using Xunit;

namespace MemoryLinkBackend.Web.Tests.Controllers
{
    public class HomeController_Tests: MemoryLinkBackendWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}