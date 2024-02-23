import { CssBaseline, GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none",
    },
  };

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
