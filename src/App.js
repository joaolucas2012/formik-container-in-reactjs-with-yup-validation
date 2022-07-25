import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EnrollmentForm } from "./pages/EnrollmentForm";
import { LoginForm } from "./pages/LoginForm";
import { RegistrationForm } from "./pages/RegistrationForm";
import { FormikContainer } from "./pages/FormikContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EnrollmentForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/container" element={<FormikContainer />} />
    </Routes>
  );
}

export default App;
