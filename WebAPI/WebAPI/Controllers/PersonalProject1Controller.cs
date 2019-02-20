using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/personalprojects")]
    public class PersonalProject1Controller : ApiController
    {
        readonly IPersonalProject1Service personalProject1Service;

        public PersonalProject1Controller(IPersonalProject1Service personalProject1Service)
        {
            this.personalProject1Service = personalProject1Service;
        }
        [HttpGet, Route]
       public List<PersonalProject1> GetAll()
        {
            return personalProject1Service.GetAll();
        }
        [HttpPost, Route]
        public int Create(PersonalProject1Create model)
        {
            return personalProject1Service.Create(model);
        }
    }
}