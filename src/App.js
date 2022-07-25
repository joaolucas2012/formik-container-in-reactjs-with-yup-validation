import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { EnrollmentForm } from "./pages/EnrollmentForm";
import { LoginForm } from "./pages/LoginForm";
import { RegistrationForm } from "./pages/RegistrationForm";
import { FormikContainer } from "./pages/FormikContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/enrollment" element={<EnrollmentForm />} />
        <Route path="/info" element={<FormikContainer />} />
      </Routes>
    </>
  );
}

export default App;
