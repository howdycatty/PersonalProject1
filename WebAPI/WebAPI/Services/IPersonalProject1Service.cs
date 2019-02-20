using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IPersonalProject1Service
    {
        int Create(PersonalProject1Create request);
        List<PersonalProject1> GetAll();
    }
}