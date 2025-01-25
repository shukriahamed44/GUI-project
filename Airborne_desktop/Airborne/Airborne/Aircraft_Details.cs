using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airborne
{
    public class Aircraft_Details
    {
        [Key]
        public string Aircraft_ID { get; set; }
        public string Aircraft { get; set; }
        public string Location { get; set; }

    }
}
