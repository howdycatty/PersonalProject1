using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class MyProject
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Certifications { get; set; }
        public string Specializations { get; set; }
        public string YogaStyle { get; set; }
        public string Bio { get; set; }
        public string Rates { get; set; }
        public string Location { get; set; }
        public string Image { get; set; }
        public string Website { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
       
    }
}