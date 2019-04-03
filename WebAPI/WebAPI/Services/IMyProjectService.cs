using MyProjectWebApi.Models;
using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IMyProjectService
    {
        int Insert(MyProjectAddRequest request);
        List<MyProject> SelectAll();
        Paged<MyProject> Get(int index, int size);
        MyProject Select(int Id);
        int Update(MyProjectUpdate request);
        void Delete(int Id);
        List<MyScraper> GetMyScraper();
        List<YogaScraper> GetYogaScraper();
    }
}