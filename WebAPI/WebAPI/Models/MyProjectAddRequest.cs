using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class MyProjectAddRequest
    {
        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }
        
        [Required(ErrorMessage = "Certification is required")]
        public string Certifications { get; set; }

        [Required]
        public string Specializations { get; set; }

        [Required]
        public string YogaStyle { get; set; }

        [Required]
        public string Bio { get; set; }

        [Required]
        public string Rates { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Website { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public DateTime DateModified { get; set; }
    }
}