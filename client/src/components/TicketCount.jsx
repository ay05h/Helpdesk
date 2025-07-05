import React from "react";

const TicketCount = () => {
  const cards = [
    {
      title: "Total Tickets",
      value: 12,
      bg: "bg-blue-500",
    },
    {
      title: "Total Solved",
      value: 8,
      bg: "bg-green-400",
    },
    {
      title: "Total Awaiting Approval",
      value: 2,
      bg: "bg-red-400",
    },
    {
      title: "Total in Progress",
      value: 2,
      bg: "bg-yellow-300",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 place-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-[280px] w-[255.25px] ${card.bg} rounded-md flex flex-col justify-center items-center shadow-[6px_6px_8px_rgba(0,0,0,0.25)]`}
          >
            <p className="text-lg font-medium text-black text-center px-2">
              {card.title}
            </p>
            <p className="text-5xl font-bold text-blue-900 mt-4">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCount;
