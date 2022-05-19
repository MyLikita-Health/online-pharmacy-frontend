// import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
// import { logout } from "../redux/actions/auth";
import Home from "../view/landing/HomePage";

function AppNavigation() {
  // const dispatch = useDispatch();
  let element = useRoutes([{ path: "/", element: <Home /> }]);
  // const _logout = () => {
  //   dispatch(
  //     logout(() => {
  //       history("/");
  //     })
  //   );
  // };

  return element;
}

export default AppNavigation;
