import React from "react";
import { Drawer } from "antd";
import type { MainMenuItem } from "../interfaces/common";
import { useNavigate } from "react-router-dom";

interface MobileHeaderDrawerProps {
  mainMenu: MainMenuItem[];
  mobileDrawerOpen: boolean;
  handleMenuClose: () => void;
}

const MobileHeaderDrawer: React.FC<MobileHeaderDrawerProps> = ({
  mainMenu,
  mobileDrawerOpen,
  handleMenuClose,
}) => {
  const navigate = useNavigate();
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={handleMenuClose}
      open={mobileDrawerOpen}
      getContainer={false}
      maskClosable={true}
      width={250}
    >
      <div
        className="w-full flex flex-col justify-between p-4 overflow-auto transition-all duration-500 delay-200 "
        id="navbar"
      >
        <ul className="flex items-center gap-4 mb-4 flex-col mt-4 flex-1 md:mt-0">
          {mainMenu.map((item) => (
            <li key={item.label}>
              <p
                className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900 flex items-center cursor-pointer"
                onClick={() => item.href && navigate(item.href)}
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
          <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100" onClick={() => navigate("/signin")}>
            Login
          </button>
          <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileHeaderDrawer;
