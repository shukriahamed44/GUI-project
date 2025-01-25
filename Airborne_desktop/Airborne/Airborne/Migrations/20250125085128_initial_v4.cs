using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Airborne.Migrations
{
    /// <inheritdoc />
    public partial class initial_v4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserDetailsList",
                columns: table => new
                {
                    User_ID = table.Column<string>(type: "TEXT", nullable: false),
                    User_Name = table.Column<string>(type: "TEXT", nullable: false),
                    User_Email = table.Column<string>(type: "TEXT", nullable: false),
                    username = table.Column<string>(type: "TEXT", nullable: false),
                    password = table.Column<string>(type: "TEXT", nullable: false),
                    accountType = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetailsList", x => x.User_ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserDetailsList");
        }
    }
}
