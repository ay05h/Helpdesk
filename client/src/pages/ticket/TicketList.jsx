import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
} from "lucide-react";
import { useSelector } from "react-redux";
import { update, download, collab } from "../../assets/assets";

const TicketListPage = () => {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = useSelector((state) => state.auth.role);

  const tempTickets = [
    {
      id: 1234,
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "13/08/21",
      rate: 0,
      name: "John Doe",
      dept: "IT Department",
      title: "Unable to login to system",
      description:
        "User is experiencing login issues with the main system. Password reset has been attempted but issue persists.",
      category: "Technical",
      type: "Incident",
      priority: "High",
      attachment: "screenshot.png",
    },
    {
      id: 1124,
      subject: "New ticket issue",
      status: "On hold",
      supportBy: "Operation Team",
      date: "14/08/21",
      rate: 0,
      name: "Jane Smith",
      dept: "Operations",
      title: "System Performance Issue",
      description: "System is running slow and affecting productivity.",
      category: "Performance",
      type: "Request",
      priority: "Medium",
      attachment: "performance_log.txt",
    },
    {
      id: 1224,
      subject: "New request",
      status: "Closed",
      supportBy: "Tech support",
      date: "13/08/21",
      rate: 4,
      name: "Mike Johnson",
      dept: "HR Department",
      title: "New Software Request",
      description:
        "Request for new software installation for team collaboration.",
      category: "Software",
      type: "Request",
      priority: "Low",
      attachment: "software_specs.pdf",
    },
    {
      id: 1244,
      subject: "Ticket submission",
      status: "In Progress",
      supportBy: "Operation Team",
      date: "14/08/21",
      rate: 0,
      name: "Sarah Wilson",
      dept: "Finance",
      title: "Account Access Issue",
      description: "Cannot access financial reporting system.",
      category: "Access",
      type: "Incident",
      priority: "High",
      attachment: "error_message.png",
    },
    {
      id: 1114,
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "3/08/21",
      rate: 0,
      name: "Robert Brown",
      dept: "Marketing",
      title: "Email Login Problem",
      description: "Unable to access company email account.",
      category: "Email",
      type: "Incident",
      priority: "Medium",
      attachment: "email_config.txt",
    },
  ];

  const roleBasedTicket = () => {
    switch (role) {
      case "user":
        return tempTickets;
      case "techTeam":
        return tempTickets.filter(
          (ticket) => ticket.supportBy === "Tech support"
        );
      case "operationTeam":
        return tempTickets.filter(
          (ticket) => ticket.supportBy === "Operation Team"
        );
      default:
        return [];
    }
  };

  // This is for api Call
  // For now synthetic data is used
  useEffect(() => {
    const tickets = roleBasedTicket();
    setTickets(tickets);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-green-500 text-white px-3 py-1 rounded text-sm font-medium";
      case "On hold":
        return "bg-blue-900 text-white px-3 py-1 rounded text-sm font-medium";
      case "Closed":
        return "bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium";
      default:
        return "bg-gray-400 text-white px-3 py-1 rounded text-sm font-medium";
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-lg">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toString().includes(searchTerm)
  );

  const totalEntries = filteredTickets.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        List of Ticket
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Find ticket"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 px-4 py-2 bg-gray-200 border-0 rounded-l text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-200 px-3 py-3 rounded-r ">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-gray-700">Show:</span>
        <div className="relative">
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="appearance-none bg-gray-200 border-0 px-3 py-1 pr-8 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        </div>
        <span className="text-gray-700">Entries</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Ticket No.
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Subject
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Status
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                {role === "user" ? "Support by" : "Priority"}
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Date
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                {role === "user" ? "Rate" : "Category"}
              </th>

              {role !== "user" && (
                <th className="px-4 py-3 text-left text-gray-700 font-medium">
                  Person in charge
                </th>
              )}

              {role !== "user" && (
                <th className="px-4 py-3 text-left text-gray-700 font-medium">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredTickets
              .slice(
                (currentPage - 1) * entriesPerPage,
                currentPage * entriesPerPage
              )
              .map((ticket, index) => (
                <tr
                  key={ticket.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } cursor-pointer hover:bg-gray-200`}
                  onClick={() => handleTicketClick(ticket)}
                >
                  <td className="px-4 py-3">
                    <span className="text-blue-600 underline hover:text-blue-800">
                      {ticket.id}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{ticket.subject}</td>
                  <td className="px-4 py-3">
                    <span className={getStatusBadge(ticket.status)}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {role === "user" ? ticket.supportBy : ticket.priority}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{ticket.date}</td>
                  <td className="px-4 py-3">
                    <span className="flex">
                      {role === "user"
                        ? renderStars(ticket.rate)
                        : ticket.category}
                    </span>
                  </td>
                  {role !== "user" && (
                    <td className="px-4 py-3 text-gray-700"></td>
                  )}
                  {role !== "user" && (
                    <td className="px-4 py-3">
                      <span className="text-gray-700 flex gap-2">
                        <img src={update} alt="" />
                        <img src={collab} alt="" />
                        <img src={download} alt="" />
                      </span>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-gray-700">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 bg-gray-200 rounded text-gray-700">
            {currentPage}
          </span>
          <button
            onClick={() =>
              setCurrentPage(
                Math.min(
                  Math.ceil(totalEntries / entriesPerPage),
                  currentPage + 1
                )
              )
            }
            disabled={currentPage >= Math.ceil(totalEntries / entriesPerPage)}
            className="p-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              setCurrentPage(Math.ceil(totalEntries / entriesPerPage))
            }
            disabled={currentPage >= Math.ceil(totalEntries / entriesPerPage)}
            className="p-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Ticket Details */}
      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-lg mx-4 shadow-2xl">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Ticket Details
            </h2>

            {/* Ticket Info */}
            <div className="space-y-4">
              {[
                ["Ticket No", selectedTicket.id],
                ["Date", selectedTicket.date],
                ["Name", selectedTicket.name],
                ["Department", selectedTicket.dept],
                ["Title", selectedTicket.title],
                ["Description", selectedTicket.description],
                ["Category", selectedTicket.category],
                ["Type", selectedTicket.type],
                ["Priority", selectedTicket.priority],
                ["Status", selectedTicket.status],
                ["Attachment", selectedTicket.attachment],
              ].map(([label, value]) => (
                <div className="flex" key={label}>
                  <span className="font-semibold text-gray-700 w-32">
                    {label}:
                  </span>
                  <span className="text-gray-600 break-words flex-1">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Close  */}
            <div className="mt-6 flex justify-center gap-5">
              {role !== "user" && (
                <button
                  onClick={closeModal}
                  className="bg-[#8894FF]  text-white px-6 py-2 rounded font-medium "
                >
                  Update
                </button>
              )}
              <button
                onClick={closeModal}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded font-medium "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketListPage;
