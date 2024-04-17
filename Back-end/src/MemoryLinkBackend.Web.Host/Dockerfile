FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/MemoryLinkBackend.Web.Host/MemoryLinkBackend.Web.Host.csproj", "src/MemoryLinkBackend.Web.Host/"]
COPY ["src/MemoryLinkBackend.Web.Core/MemoryLinkBackend.Web.Core.csproj", "src/MemoryLinkBackend.Web.Core/"]
COPY ["src/MemoryLinkBackend.Application/MemoryLinkBackend.Application.csproj", "src/MemoryLinkBackend.Application/"]
COPY ["src/MemoryLinkBackend.Core/MemoryLinkBackend.Core.csproj", "src/MemoryLinkBackend.Core/"]
COPY ["src/MemoryLinkBackend.EntityFrameworkCore/MemoryLinkBackend.EntityFrameworkCore.csproj", "src/MemoryLinkBackend.EntityFrameworkCore/"]
WORKDIR "/src/src/MemoryLinkBackend.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/MemoryLinkBackend.Web.Host", "src/MemoryLinkBackend.Web.Host"]
COPY ["src/MemoryLinkBackend.Web.Core", "src/MemoryLinkBackend.Web.Core"]
COPY ["src/MemoryLinkBackend.Application", "src/MemoryLinkBackend.Application"]
COPY ["src/MemoryLinkBackend.Core", "src/MemoryLinkBackend.Core"]
COPY ["src/MemoryLinkBackend.EntityFrameworkCore", "src/MemoryLinkBackend.EntityFrameworkCore"]
WORKDIR "/src/src/MemoryLinkBackend.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "MemoryLinkBackend.Web.Host.dll"]
