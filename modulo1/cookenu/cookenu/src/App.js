import { Router } from "./routes/Router";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./constants/theme";

//--------------------------notes--------------------------//
//         parei na parte 4
//         usei o navegate no coordinator

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
