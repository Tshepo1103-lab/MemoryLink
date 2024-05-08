using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MemoryLinkBackend.Migrations
{
    /// <inheritdoc />
    public partial class addingstoredfiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "HospitalId",
                table: "Profiles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "Profiles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_HospitalId",
                table: "Profiles",
                column: "HospitalId");

            migrationBuilder.CreateIndex(
                name: "IX_Profiles_ImageId",
                table: "Profiles",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_Hospitals_HospitalId",
                table: "Profiles",
                column: "HospitalId",
                principalTable: "Hospitals",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_StoreFiles_ImageId",
                table: "Profiles",
                column: "ImageId",
                principalTable: "StoreFiles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_Hospitals_HospitalId",
                table: "Profiles");

            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_StoreFiles_ImageId",
                table: "Profiles");

            migrationBuilder.DropIndex(
                name: "IX_Profiles_HospitalId",
                table: "Profiles");

            migrationBuilder.DropIndex(
                name: "IX_Profiles_ImageId",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "HospitalId",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Profiles");
        }
    }
}
