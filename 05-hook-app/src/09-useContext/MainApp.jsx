import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";
import { AboutPage, HomePage, LoginPage } from "./pages";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <hr />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="/*" element={<h1>404 Not Found</h1>} /> */}
        {/*  otra manera */}
        {/* <Route path="/*" element={<LoginPage />} /> */}
        {/* otra manera */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
