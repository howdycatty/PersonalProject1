using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class PersonalProject1Create
    {
        [Required]
        public string Task { get; set; }
    }
}