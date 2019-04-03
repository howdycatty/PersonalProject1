using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class MyProjectUpdate: MyProjectAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}