import React, { useState } from "react";
import { FaUsers, FaBriefcase, FaSignOutAlt, FaBell, FaSearch, FaCog } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";

const Topbar = ({ title, onLogout }) => (
  <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative w-full sm:w-auto">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <FaBell className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <FaCog className="w-5 h-5" />
        </button>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm"
        >
          <FaSignOutAlt className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
);

const StatsCard = ({ title, value, icon, trend, trendValue }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
        {trend && (
          <div className={`flex items-center mt-2 text-xs sm:text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <span>{trend === 'up' ? '↗' : '↘'} {trendValue}% from last month</span>
          </div>
        )}
      </div>
      <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
        <div className="text-blue-600 text-xl sm:text-2xl">{icon}</div>
      </div>
    </div>
  </div>
);

const Table = ({ columns, data, onRowClick }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Users</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full table-min-width">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => onRowClick(row)}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  {row[column]}
                </td>
              ))}
              <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900">View</button>
                <button className="text-gray-600 hover:text-gray-900 ml-2 sm:ml-4">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg sm:text-xl"
          >
            ×
          </button>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 gap-4">
    <div className="text-sm text-gray-700">
      Showing page {currentPage} of {totalPages}
    </div>
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-2 text-sm rounded-lg ${currentPage === i + 1
              ? 'bg-blue-600 text-white'
              : 'border border-gray-300 hover:bg-gray-50'
            }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  </div>
);

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const columns = ["Name", "Email", "Role"];
  const data = [
    { Name: "Alice Johnson", Email: "alice@company.com", Role: "Admin" },
    { Name: "Bob Smith", Email: "bob@company.com", Role: "Editor" },
    { Name: "Carol Davis", Email: "carol@company.com", Role: "User" },
    { Name: "David Wilson", Email: "david@company.com", Role: "Editor" },
    { Name: "Eve Brown", Email: "eve@company.com", Role: "User" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedOut(true);
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  if (isLoggedOut) return <Navigate to="/admin/auth" replace />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar title="Dashboard" onLogout={handleLogout} />
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Welcome back, Admin!</h2>
          <p className="text-sm sm:text-base text-gray-600">Here's what's happening with your platform today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatsCard
            title="Total Users"
            value="1,248"
            icon={<FaUsers />}
            trend="up"
            trendValue="12.5"
          />
          <StatsCard
            title="Jobs Posted"
            value="342"
            icon={<FaBriefcase />}
            trend="up"
            trendValue="8.2"
          />
          <StatsCard
            title="Active Sessions"
            value="89"
            icon={<FaUsers />}
            trend="down"
            trendValue="3.1"
          />
          <StatsCard
            title="Revenue"
            value="$12,450"
            icon={<FaBriefcase />}
            trend="up"
            trendValue="15.3"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <Table columns={columns} data={data} onRowClick={handleRowClick} />
            <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm sm:text-base">
                  Add New User
                </button>
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm sm:text-base">
                  Export Data
                </button>
                <button className="w-full text-left px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm sm:text-base">
                  Generate Report
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">New user registered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Job posting approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Payment processed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} title="User Details" onClose={() => setModalOpen(false)}>
        {selectedUser && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <p className="text-sm text-gray-900">{selectedUser.Name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <p className="text-sm text-gray-900">{selectedUser.Email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedUser.Role === 'Admin'
                  ? 'bg-red-100 text-red-800'
                  : selectedUser.Role === 'Editor'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                {selectedUser.Role}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Edit User
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                View Profile
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Dashboard;