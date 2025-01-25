using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Airborne.Migrations
{
    /// <inheritdoc />
    public partial class initial_v2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookingList",
                columns: table => new
                {
                    NIC_number = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Contact_number = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Departure_airport = table.Column<string>(type: "TEXT", nullable: false),
                    Arrival_airport = table.Column<string>(type: "TEXT", nullable: false),
                    number_of_passengers = table.Column<string>(type: "TEXT", nullable: false),
                    Departure_date = table.Column<string>(type: "TEXT", nullable: false),
                    Departure_time = table.Column<string>(type: "TEXT", nullable: false),
                    Flight_number = table.Column<string>(type: "TEXT", nullable: false),
                    Total_price = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingList", x => x.NIC_number);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingList");
        }
    }
}
