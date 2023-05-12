import React from "react";
import SideBar from "./SideBar";

interface MainContentWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}
const MainContentWrapper: React.FC<MainContentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div>{children}</div>
    </div>
  );
};

export default MainContentWrapper;
