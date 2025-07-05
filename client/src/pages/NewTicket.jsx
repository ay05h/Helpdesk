import React, { useState } from "react";
import { Paperclip } from "lucide-react";

const NewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Ticket created successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Create New Ticket
      </h1>

      <div className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-sm font-medium text-gray-700">
              Ticket No.
            </label>
            <input
              type="text"
              name="ticketNo"
              value={formData.ticketNo}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter ticket number"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-[100px] text-sm font-medium text-gray-700">
              Date:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-[100px] text-sm font-medium text-gray-700">
              Department:
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Operations">Operations</option>
            </select>
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col  gap-2">
          <label className="block text-sm font-medium text-gray-700">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Enter subject"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              {
                label: "Category",
                name: "category",
                options: ["Technical", "General", "Billing", "Account"],
              },
              {
                label: "Type",
                name: "type",
                options: ["Bug", "Feature Request", "Support", "Question"],
              },
              {
                label: "Priority",
                name: "priority",
                options: ["Low", "Medium", "High", "Critical"],
              },
            ].map(({ label, name, options }) => (
              <div key={name} className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label}:
                </label>
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select {label}</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex flex-col h-full">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Description:
            </label>
            <div className="relative h-full flex-1">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full h-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Enter detailed description..."
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                <Paperclip size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center border border-gray-50 rounded-md w-[250px] h-[70px] p-4 bg-gray-100">
            <input
              type="checkbox"
              id="recaptcha"
              className="mr-2 h-6 w-6 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="recaptcha" className="text-sm text-gray-700">
              I'm not a robot
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-8 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
