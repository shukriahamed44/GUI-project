using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Airborne
{
    public class DatabaseClass : DbContext
    {
        public DbSet<AirportsTable> AirportsList { get; set; }
        public DbSet<Booking> BookingList { get; set; }
        public DbSet<Aircraft_Details> AircraftsList { get; set; }

        public DbSet<UserDetails> UserDetailsList { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite(@"Data Source= C:\Users\Shukri\Desktop\react-project\databaseFolder\airports.db");
        }
    }
}
