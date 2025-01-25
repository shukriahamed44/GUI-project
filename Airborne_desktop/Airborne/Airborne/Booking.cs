using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Airborne
{
    public class Booking
    {
        [Key]
        public string NIC_number { get; set; }
        public string Name { get; set; }
        public string Contact_number { get; set; }
        public string Email { get; set; }
        public string Departure_airport { get; set; }
        public string Arrival_airport { get; set; }
        public string number_of_passengers { get; set; }
        public string Departure_date { get; set; }
        public string Departure_time { get; set; }
        public string Flight_number { get; set; }
        public string Total_price { get; set; }
   
    }
}
