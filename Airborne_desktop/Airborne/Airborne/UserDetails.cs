﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airborne
{
    public class UserDetails
    {
        [Key]
        public string User_ID { get; set; }
        public string User_Name { get; set; }
        public string User_Email { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string accountType { get; set; }


    }
}
