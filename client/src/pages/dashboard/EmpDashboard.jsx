import React from "react";
import TicketCount from "../../components/TicketCount";
import { techLogo, opLogo, graph } from "../../assets/assets";
const EmpDashboard = () => {
  return (
    <div>
      <TicketCount />
      <div className="flex gap-12 w-full justify-center">
        {/* graph */}
        <div className="w-[539.25px] h-[420px] bg-[#55D6C2] flex justify-center items-center">
          <img src={graph} alt="graph" />
        </div>

        <div className="flex flex-col gap-3">
          {/* Teams */}
          <div className="w-[539.25px] h-[280px] p-2 bg-[#55D6C2] flex justify-evenly items-center">
            <div className="flex flex-col items-center ">
              <img src={techLogo} alt="Logo" />
              <h2 className=" font-bold text-4xl text-[#05386B]">3</h2>
              <h2 className=" font-medium text-xl ">Technical</h2>
              <h2 className="font-medium text-xl ">Supports</h2>
            </div>
            <div className="flex flex-col items-center ">
              <img src={opLogo} alt="Logo" />
              <h2 className=" font-bold text-4xl text-[#05386B]">4</h2>
              <h2 className="font-medium text-xl ">Operation</h2>
              <h2 className="font-medium text-xl ">Team</h2>
            </div>
          </div>
          <div className="w-[539.25px] h-[128px] bg-[#55D6C2] rounded-sm flex flex-col justify-center items-center">
            <h2 className="font-medium text-3xl ">Customer Feedback</h2>
            <span className="flex">
              <p className="text-yellow-400 text-4xl">★★★★</p>
              <p className="text-gray-300 text-4xl">★</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
