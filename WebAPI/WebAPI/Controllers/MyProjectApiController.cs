using MyProjectWebApi.Controllers.Api;
using MyProjectWebApi.Models;
using PortfolioWebApi.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/myproject")]
    public class MyProjectApiController : BaseApiController
    {
        readonly IMyProjectService myProjectService;

        public MyProjectApiController(IMyProjectService myProjectService)


        {
            this.myProjectService = myProjectService;
        }
        [HttpGet, Route]
        public HttpResponseMessage  SelectAll()
          {
            ItemsResponse<MyProject> response = new ItemsResponse<MyProject>();
            response.Items = myProjectService.SelectAll();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpGet, Route("{id:int}")]
        public HttpResponseMessage Select(int id)
        {
            {
                ItemResponse<MyProject> response = new ItemResponse<MyProject>();
                response.Item = myProjectService.Select(id);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
        }
        /*
        [HttpGet, Route("{id:int}")]
        public HttpResponseMessage SelectCoppy(int id , int j)
        {
            MyProject myProject = null;
            myProject = myProjectService.Select(id);
            if (myProject == null)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest,"There is no object");
            }
            return Request.CreateResponse(System.Net.HttpStatusCode.OK, myProjectService.Select(id));
        }
        */

        [HttpPost, Route]
        public HttpResponseMessage Insert(MyProjectAddRequest model)
        {
            if (!ModelState.IsValid)
            {
                return CreateErrorResponse();
            }
            myProjectService.Insert(model);
            SuccessResponse resp = new SuccessResponse();

            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpPut, Route("{id:int}")]
        public HttpResponseMessage Update(MyProjectUpdate model)
        {
            if (!ModelState.IsValid)
            {
                return CreateErrorResponse();
            }
            myProjectService.Update(model);
            SuccessResponse resp = new SuccessResponse();

            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        //[HttpDelete, Route("{id:int}")]
        //public void Delete(int id)
        //{
        //     myProjectService.Delete(id);
        //}
        [Route("{id:int}"), HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            myProjectService.Delete(id);
            SuccessResponse resp = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [Route("{pageIndex:int}/{pageSize:int}"), HttpGet]
        public HttpResponseMessage Get(int pageIndex, int pageSize)
        {
            ItemResponse<Paged<MyProject>> response = new ItemResponse<Paged<MyProject>>();
            response.Item = myProjectService.Get(pageIndex, pageSize);
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }


        [Route("myscraper"), HttpGet ]
        public HttpResponseMessage Get()
        {
            ItemsResponse<MyScraper> response = new ItemsResponse<MyScraper>();
            response.Items = myProjectService.GetMyScraper();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [Route("yogascraper"), HttpGet]
        public HttpResponseMessage Get2()
        {
            ItemsResponse<YogaScraper> response = new ItemsResponse<YogaScraper>();
            response.Items = myProjectService.GetYogaScraper();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

    }
}
