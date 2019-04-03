// import * as global from "./serviceHelpers";
import axios from "axios";

let submitProfile = payload => {
  const configs = {
    method: "POST",
    url: "/api/myproject",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let getAllProfiles = () => {
  const configs = {
    method: "GET",
    url: "/api/myproject",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let getProfileById = id => {
  const configs = {
    method: "GET",
    url: "/api/myproject/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let updateProfile = (id, payload) => {
  const configs = {
    method: "PUT",
    url: "/api/myproject/" + id,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let deleteProfile = id => {
  const configs = {
    method: "DELETE",
    url: "/api/myproject/" + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let getProfilePage = (pageIndex, pageSize) => {
  const configs = {
    method: "GET",
    url: "/api/myproject/" + pageIndex + "/" + pageSize,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "/application/json" }
  };
  return axios(configs);
};

let getHoroscopes = () => {
  const configs = {
    method: "GET",
    url: "/api/myproject/myscraper",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

let getYogaArticles = () => {
  const configs = {
    method: "GET",
    url: "/api/myproject/yogascraper",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(configs);
};

export {
  submitProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  getHoroscopes,
  getYogaArticles,
  getProfilePage
};
