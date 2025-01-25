using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Airborne.Migrations
{
    /// <inheritdoc />
    public partial class initial_v3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AircraftsList",
                columns: table => new
                {
                    Aircraft_ID = table.Column<string>(type: "TEXT", nullable: false),
                    Aircraft = table.Column<string>(type: "TEXT", nullable: false),
                    Location = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AircraftsList", x => x.Aircraft_ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AircraftsList");
        }
    }
}
