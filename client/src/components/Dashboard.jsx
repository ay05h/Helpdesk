import React from "react";
import { Outlet } from "react-router-dom";
import { Group, logoutLogo } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useSelector } from "react-redux";
const DashboardLayout = () => {
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-[#55D6C2] w-full h-[90px] flex items-center justify-between px-6 text-white flex-shrink-0">
        <h1 className="italic text-3xl md:text-4xl lg:text-5xl font-bold">
          Helpdesk
        </h1>
        <div className="flex gap-4">
          <img src={Group} alt="Group" />
          <img
            src={logoutLogo}
            alt="logout"
            className="cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          />
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-[250px] bg-gray-200 p-4 space-y-4 flex-shrink-0">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block hover:text-blue-500 font-semibold ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            {({ isActive }) => `${isActive ? "> " : ""}📊 Dashboard`}
          </NavLink>
          {role === "user" && (
            <NavLink
              to="/new-ticket"
              className={({ isActive }) =>
                `block hover:text-blue-500 ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`
              }
            >
              {({ isActive }) => `${isActive ? "> " : ""}🎫 New Ticket`}
            </NavLink>
          )}
          <NavLink
            to="/my-ticket"
            className={({ isActive }) =>
              `block hover:text-blue-500 ${
                isActive ? "text-blue-500 font-semibold" : ""
              }`
            }
          >
            {({ isActive }) => `${isActive ? "> " : ""}📁 My Ticket`}
          </NavLink>
        </div>

        {/* Main  area*/}
        <div className="flex-1 flex flex-col min-h-0">
          <main className="flex-1 bg-white px-6 py-4 overflow-y-auto min-h-0">
            <Outlet />
          </main>

          {/* footer */}
          <footer className="h-[50px] bg-[#55D6C2] flex items-center justify-center text-white flex-shrink-0">
            Footer Area
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
