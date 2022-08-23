// import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
// import { logout } from "../redux/actions/auth";
import Home from "../view/landing/HomePage";
import ParmacyRegistrition from "../view/landing/js/ParmacyRegistrition";
import Search from "../view/landing/Search";
import ShopList from "../view/landing/ShopList";
import ShoppingCart from "../view/landing/ShoppingCart";
import AuthenticatedContainer from "./AuthenticatedContainer";

function AppNavigation() {
  // const dispatch = useDispatch();
  let element = useRoutes([
    {
      path: "/",
      element: <AuthenticatedContainer />,
      children: [
        { index: true, element: <Home /> },
        { path: "/search", element: <Search /> },
        { path: "/store", element: <ShopList /> },
        { path: "/shopping-cart", element: <ShoppingCart /> },
        { path: "/parmacy-regirition", element: <ParmacyRegistrition/> },
      ],
    },
  ]);

  return element;
}

export default AppNavigation;
