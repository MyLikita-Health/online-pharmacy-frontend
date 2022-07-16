// import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
// import { logout } from "../redux/actions/auth";
import Home from "../view/landing/HomePage";
import ResultComp from "../view/landing/ResultComp";

function AppNavigation() {
  // const dispatch = useDispatch();
  let element = useRoutes([
    { path: "/", element: <Home /> },
   {path:'/home/result', element: ResultComp}]);

  return element;
}

export default AppNavigation;
