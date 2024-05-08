using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MemoryLinkBackend.Migrations
{
    /// <inheritdoc />
    public partial class addingadmissiondatefield : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateOnly>(
                name: "AdmissionDate",
                table: "Profiles",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdmissionDate",
                table: "Profiles");
        }
    }
}
