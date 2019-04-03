import Home from "views/Home/Home.jsx";
// import Notifications from "views/Notifications/Notifications.jsx";
import Blogs from "views/Blogs/Blogs.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Maps from "views/Maps/Maps.jsx";
import ProfileList from "views/ProfileList/ProfileList.jsx";
import CreateProfile from "../components/CreateProfile";
import UserPage1 from "../views/ProfileList/UserPage1";
import Horoscopes from "../views/Horoscopes/Horoscopes";
// import NewProfile from "views/NewProfile/NewProfile.jsx";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-world-2",
    component: Home
  },
  {
    path: "/createprofile",
    name: "Create Profile",
    icon: "nc-icon nc-single-02",
    // icon: "nc-icon nc-bank",
    component: CreateProfile
  },
  {
    path: "/profilelist",
    name: "Profile List",
    icon: "nc-icon nc-badge",
    component: ProfileList
  },
  {
    path: "/blogs",
    name: "Blog Articles",
    icon: "nc-icon nc-paper",
    component: Blogs
  },

  // { path: "/maps", name: "Maps", icon: "nc-icon nc-pin-3", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications
  // },

  {
    path: "/horoscopes",
    name: "Horoscopes",
    icon: "nc-icon nc-diamond",
    component: Horoscopes
  },
  {
    path: "/profilelist1",
    name: "Profile List 1 sortable test",
    icon: "nc-icon nc-single-02",
    component: UserPage1
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },
  // { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
