// This code sets up a basic React application with routing using React Router.
// It defines two routes: one for the login page and another for the dashboard page.
// The `App` component uses the `Routes` and `Route` components from `react-router-dom` to define the paths and their corresponding components.
// The `Login` component is rendered when the user navigates to `/login`, and the `Dashboard` component is rendered when the user navigates to `/dashboard`.
// This structure allows for easy navigation between different parts of the application, making it a foundational setup for a React app with routing capabilities.
// The `App` component serves as the main entry point for the application, where routing is defined.
// The `Login` and `Dashboard` components are expected to be defined in their respective files under the `pages` directory.
// This setup is commonly used in modern React applications to manage different views and user authentication flows.
// The application is likely styled using Tailwind CSS, as indicated by the initial comments about the Tailwind configuration and Vite setup.

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
