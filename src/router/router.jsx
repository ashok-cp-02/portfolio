import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import NotFound from "../pages/error/404";
import Project from "../pages/project/project";
import ProjectDetail from "../pages/project/project-detail";

const Routing = (params) => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route path={"*"} element={<NotFound />} />
      <Route path={"/project"} element={<Project />} />
      <Route path={"/project/:path"} element={<ProjectDetail />} />
    </Routes>
  );
};
export default Routing;
