import { Outlet } from "react-router-dom";

export const Generate = () => {
  return (
    <div>
      <h1>Generate Page</h1>
      <Outlet />   {/* this is needed for nested routes */}
    </div>
  );
};