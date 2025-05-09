"use client";

import { useEffect, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi, FaBatteryThreeQuarters } from "react-icons/fa";

const TopLayout = ({ children, bgColor = "#F6F6F6", ellipseSrc = "/ellipse-bg.svg" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    setCurrentTime(now.toLocaleTimeString([], options));
  }, []);

  return (
    <div className="relative w-full sm:w-[480px] min-h-screen overflow-hidden p-4" style={{ backgroundColor: bgColor }}>
      {/* Background ellipse shape */}
      <div
        className="absolute top-0 left-0 bg-no-repeat bg-contain z-0"
        style={{ backgroundImage: `url(${ellipseSrc})`, 
            width: "300px",    
    height: "180px",
        }}
      />

      {/* Top status bar */}
      <div className="relative z-10 flex justify-between items-center text-sm text-black mb-40">
        <span className="text-sm font-bold">{currentTime}</span>
        <div className="flex items-center space-x-2">
          <GiNetworkBars className="w-4 h-4 sm:w-5 sm:h-5" />
          <FaWifi className="w-4 h-4 sm:w-5 sm:h-5" />
          <FaBatteryThreeQuarters className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Children content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TopLayout;
