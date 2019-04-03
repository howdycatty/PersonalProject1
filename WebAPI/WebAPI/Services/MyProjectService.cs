using AngleSharp.Parser.Html;
using Data.Providers;
using MyProjectWebApi.Data.Extensions;
using MyProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Web;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class MyProjectService : IMyProjectService
    {
        private IDataProvider _dataProvider;

        public MyProjectService(IDataProvider dataProvider) // IDataProvider  injected as an Interface
        {
            _dataProvider = dataProvider;
        }

        public List<MyProject> SelectAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "MyProject_SelectAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var myprojects = new List<MyProject>();

                    while (reader.Read())
                    {
                        //this loop will happend once for every row
                        var myProject = new MyProject
                        {
                            Id = (int)reader["id"],
                            FirstName = (string)reader["FirstName"],
                            LastName = (string)reader["LastName"],
                            Certifications = (string)reader["Certifications"],
                            Specializations = (string)reader["Specializations"],
                            YogaStyle = (string)reader["YogaStyle"],
                            Bio = (string)reader["Bio"],
                            Rates = (string)reader["Rates"],
                            Location = (string)reader["Location"],
                            Image = (string)reader["Image"],
                            Website = (string)reader["Website"],
                            Email = (string)reader["Email"],
                            Phone = (string)reader["Phone"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader["DateModified"]
                        };

                        myprojects.Add(myProject);
                    }

                    return myprojects;
                }

            } // calls con.Dispose() (because SqlConnection implements IDisposable)
        }

        public int Insert(MyProjectAddRequest request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "MyProject_Insert";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@FirstName", request.FirstName);
                cmd.Parameters.AddWithValue("@LastName", request.LastName);
                cmd.Parameters.AddWithValue("@Certifications", request.Certifications);
                cmd.Parameters.AddWithValue("@Specializations", request.Specializations);
                cmd.Parameters.AddWithValue("@YogaStyle", request.YogaStyle);
                cmd.Parameters.AddWithValue("@Bio", request.Bio);
                cmd.Parameters.AddWithValue("@Rates", request.Rates);
                cmd.Parameters.AddWithValue("@Location", request.Location);
                cmd.Parameters.AddWithValue("@Image", request.Image);
                cmd.Parameters.AddWithValue("@Website", request.Website);
                cmd.Parameters.AddWithValue("@Email", request.Email);
                cmd.Parameters.AddWithValue("@Phone", request.Phone);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;

            }
        }

        public MyProject Select(int id)
        {
            MyProject myProject = null;
            string procName = "[dbo].[MyProject_SelectById]";
            _dataProvider.ExecuteCmd(procName
                , inputParamMapper: delegate (SqlParameterCollection paramCollection)
                {
                    paramCollection.AddWithValue("@Id", id);

                }
                , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    myProject = MapProj(reader);

                }
                );
            return myProject;
        }

        private static MyProject MapProj(IDataReader reader)
        {
            MyProject myProj = new MyProject();
            int startingIndex = 0;
            myProj.Id = reader.GetSafeInt32(startingIndex++);
            myProj.FirstName = reader.GetSafeString(startingIndex++);
            myProj.LastName = reader.GetSafeString(startingIndex++);
            myProj.Certifications = reader.GetSafeString(startingIndex++);
            myProj.Specializations = reader.GetSafeString(startingIndex++);
            myProj.YogaStyle = reader.GetSafeString(startingIndex++);
            myProj.Bio = reader.GetSafeString(startingIndex++);
            myProj.Rates = reader.GetSafeString(startingIndex++);
            myProj.Location = reader.GetSafeString(startingIndex++);
            myProj.Image = reader.GetSafeString(startingIndex++);
            myProj.Website = reader.GetSafeString(startingIndex++);
            myProj.Email = reader.GetSafeString(startingIndex++);
            myProj.Phone = reader.GetSafeString(startingIndex++);
            myProj.DateCreated = reader.GetSafeDateTime(startingIndex++);
            myProj.DateModified = reader.GetSafeDateTime(startingIndex++);
            
           

            return myProj;
        }
        public Paged<MyProject> Get(int index, int size)
        {
            List<MyProject> list = null;
            int totalCount = 0;
            string procName = "dbo.MyProject_Pagination";
            _dataProvider.ExecuteCmd(procName
              , inputParamMapper: delegate (SqlParameterCollection paramCollection)
              {
                  paramCollection.AddWithValue("@PageIndex", index);
                  paramCollection.AddWithValue("@PageSize", size);
              }
              , singleRecordMapper: delegate (IDataReader reader, short set)
              {
                  int startingIndex = 0;
                  MyProject myProj = MapProj(reader);
               
                  if (totalCount == 0)
                  {
                      totalCount = reader.GetSafeInt32(startingIndex++);
                  }

                  if (list == null)
                  {
                      list = new List<MyProject>();
                  }

                  list.Add(myProj);
              }
              );

            Paged<MyProject> page = null;
            if (list != null)
            {
                page = new Paged<MyProject>(list, index, size, totalCount);
            }

            return page;
        }
        //public MyProject Select(int id)
        //{
        //    using (var con = GetConnection())
        //    {
        //        var cmd = con.CreateCommand();

        //        cmd.CommandText = "MyProject_SelectById";
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        cmd.Parameters.AddWithValue("@Id", id);

        //        using (var reader = cmd.ExecuteReader())
        //        {
        //            var myprojects = new MyProject();

        //            while (reader.Read())
        //            {
        //                //this loop will happend once for every row
        //                var myProject = new MyProject
        //                {
        //                    Id = (int)reader["Id"],
        //                    FirstName = (string)reader["FirstName"],
        //                    LastName = (string)reader["LastName"],
        //                    Certifications = (string)reader["Certifications"],
        //                    Specializations = (string)reader["Specializations"],
        //                    YogaStyle = (string)reader["YogaStyle"],
        //                    Bio = (string)reader["Bio"],
        //                    Rates = (string)reader["Rates"],
        //                    Location = (string)reader["Location"],
        //                    Image = (string)reader["Image"],
        //                    Website = (string) reader["Website"],
        //                    Email = (string)reader["Email"],
        //                    Phone = (string)reader["Phone"],
        //                    DateCreated = (DateTime)reader["DateCreated"],
        //                    DateModified = (DateTime)reader["DateModified"]
        //                };

        //            }

        //            return myprojects;
        //        }

        //    } // calls con.Dispose() (because SqlConnection implements IDisposable)
        //}


        public int Update(MyProjectUpdate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "MyProject_Update";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", request.Id);
                cmd.Parameters.AddWithValue("@FirstName", request.FirstName);
                cmd.Parameters.AddWithValue("@LastName", request.LastName);
                cmd.Parameters.AddWithValue("@Certifications", request.Certifications);
                cmd.Parameters.AddWithValue("@Specializations", request.Specializations);
                cmd.Parameters.AddWithValue("@YogaStyle", request.YogaStyle);
                cmd.Parameters.AddWithValue("@Bio", request.Bio);
                cmd.Parameters.AddWithValue("@Rates", request.Rates);
                cmd.Parameters.AddWithValue("@Location", request.Location);
                cmd.Parameters.AddWithValue("@Image", request.Image);
                cmd.Parameters.AddWithValue("@Website", request.Website);
                cmd.Parameters.AddWithValue("@Email", request.Email);
                cmd.Parameters.AddWithValue("@Phone", request.Phone);


                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;

            }
        }

        public void Delete(int Id)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "MyProject_Delete";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", Id);

                cmd.ExecuteNonQuery();

                //return (int)cmd.Parameters["@Id"].Value;

            }
        }


      
        public List<MyScraper> GetMyScraper()
        {
            string url = "https://www.ganeshaspeaks.com/horoscopes/";
            List<MyScraper> results = new List<MyScraper>();

            using (var client = new HttpClient())
            {
                var html = client.GetStringAsync(url).Result;
                var parser = new HtmlParser();
                var document = parser.Parse(html);
                var siteTable = document.QuerySelector(".ptext");
                var rows = siteTable.QuerySelectorAll(".compatibility-container");

                foreach (var row in rows)
                {
                    var myScraper = new MyScraper();

                    myScraper.Name = row.QuerySelector("a strong").TextContent;
                    myScraper.Image = row.QuerySelector("a i img").GetAttribute("src");
                    myScraper.Date = row.QuerySelector("p").TextContent;
                    myScraper.Link = row.QuerySelector("a").GetAttribute("href");
                    //myScraper.Name = sName.TextContent;

                    //var sSchool = row.QuerySelector("tr > ");
                    //cantrips.School = sSchool.TextContent;

                    results.Add(myScraper);
                };
                return results;
            }
        }
        


        public List<YogaScraper> GetYogaScraper()
        {
            string url = "https://www.gaiam.com/blogs/discover";
            List<YogaScraper> results = new List<YogaScraper>();

            using (var client = new HttpClient())
            {
                var html = client.GetStringAsync(url).Result;
                var parser = new HtmlParser();
                var document = parser.Parse(html);
                var siteTable = document.QuerySelector(".twelve");
                var rows = siteTable.QuerySelectorAll(".article");

                foreach (var row in rows)
                {
                    var myScraper = new YogaScraper();

                    myScraper.Image = row.QuerySelector("a img").GetAttribute("src");
                    myScraper.Title = row.QuerySelector("h2 a").TextContent;
                    myScraper.Excerpt = row.QuerySelector("div.excerpt").TextContent;
                    myScraper.Link = row.QuerySelector("p a").GetAttribute("href");

                    //var sSchool = row.QuerySelector("tr > ");
                    //cantrips.School = sSchool.TextContent;

                    results.Add(myScraper);
                };
                return results;
            }
        }








        //helper method to create and open a database connection
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Default"].ConnectionString);
            con.Open();
            return con;
        }








    }
}