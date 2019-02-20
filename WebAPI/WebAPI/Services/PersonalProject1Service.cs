using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class PersonalProject1Service : IPersonalProject1Service
    {
        public List<PersonalProject1> GetAll()
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "PersonalProject1_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var personalprojects = new List<PersonalProject1>();

                    while (reader.Read())
                    {
                        //this loop will happend once for every row
                        var personalproject = new PersonalProject1
                        {
                            Id = (int)reader["id"],
                            Task = (string)reader["task"],
                            DateCreated = (DateTime)reader["DateCreated"],
                            DateModified = (DateTime)reader["DateModified"]
                        };

                        personalprojects.Add(personalproject);
                    }

                    return personalprojects;
                }

            } // calls con.Dispose() (because SqlConnection implements IDisposable)
        }

        public int Create(PersonalProject1Create request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "PersonalProject1_Create";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Task", request.Task);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;

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