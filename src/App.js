import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { initUser } from "./redux/actions/auth";
import AppNavigation from "./routes/AppNavigation";

function App() {
  const dispatch = useDispatch();
  const history = useNavigate();
  // const access = useSelector((state) => state.auth.user.accessTo);
  // const navigateUser = useCallback(
  //   (access) => {
  //     // alert("JFJFJFJFJF")
  //     dispatch(
  //       initUser(history, () => {
  //         if (access && access.length) {
  //           if (access.includes("Saving")) {
  //             return null;
  //           } else {
  //             history("/");
  //           }
  //         }
  //       })
  //     );
  //   },
  //   [dispatch, history]
  // );

  // useEffect(() => {
  //   navigateUser(access);
  // }, [navigateUser, access]);

  return (
    <div className="m-0 p-0">
      <AppNavigation />

      {/* <Carousel_ /> */}
    </div>
  );
}

export default App;
