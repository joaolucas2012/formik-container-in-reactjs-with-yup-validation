import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { theme, ThemeProvider } from "@chakra-ui/core";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="center">
          <LoginForm />
        </div>
      </div>
    </ThemeProvider>
  );
}
