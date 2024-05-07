import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import {
  teal,
  amber,
  lightGreen,
  deepOrange,
  purple,
} from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal["800"],
      },
      secondary: {
        main: amber["800"],
      },
      success: {
        main: lightGreen["800"],
      },
      error: {
        main: deepOrange["800"],
      },
      info: {
        main: purple["500"],
      },      
    },
    overrides: {
      MuiListItem: {
        root: {
          '&:hover': {
            backgroundColor: 'white',
            color: 'blue', // Metin rengi
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

  
  