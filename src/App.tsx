import { CssBaseline, GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none",
    },
  };
  useEffect(() => {
    if (window.location.pathname === "/" && sessionStorage.getItem("auth")) {
      sessionStorage.removeItem("auth");
    }
  }, []);

  // const [user] = useState<User>({
  //   isLogged: true,
  //   name: "anh",
  //   user: {
  //     username: "anhthtse151299@gmail.com",
  //     password: "1",
  //   },
  // });

  return (
    <Provider store={store}>
      <ToastContainer />
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
