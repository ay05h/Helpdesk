import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./components/Dashboard";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserDashboard from "./pages/dashboard/UserDashboard";
import EmployeeDashboard from "./pages/dashboard/EmpDashboard";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/ticket/TicketList";

function App() {
  const authUser = useSelector((state) => state.auth.userData);
  const role = useSelector((state) => state.auth.role);

  return (
    <Routes>
      <Route
        path="/login"
        element={!authUser ? <SignInPage /> : <Navigate to="/" />}
      />
      <Route
        path="/signup"
        element={!authUser ? <SignupPage /> : <Navigate to="/" />}
      />
      <Route path="/forget-password" element={<ForgotPasswordPage />} />

      <Route
        path="/"
        element={authUser ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        {role === "user" ? (
          <>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="my-ticket" element={<MyTickets />} />
            <Route path="new-ticket" element={<NewTicket />} />
          </>
        ) : (
          <>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<EmployeeDashboard />} />
            <Route path="my-ticket" element={<MyTickets />} />
            <Route path="new-ticket" element={<NewTicket />} />
          </>
        )}
      </Route>

      <Route path="*" element={<Navigate to={authUser ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
