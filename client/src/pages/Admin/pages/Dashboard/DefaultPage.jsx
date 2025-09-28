import React, { useState } from "react";
import { FaUsers, FaBriefcase, FaSignOutAlt, FaBell, FaSearch, FaCog } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";

import Topbar from "../../components/Topbar/Topbar";
import StatsCard from "../../components/StatsCard/StatsCard";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import VacancyPage from "../../pages/Vacancy/Vacancy";

function DefaultPage() {
    const data = [
        { Name: "Alice Johnson", Email: "alice@company.com", Role: "Admin" },
        { Name: "Bob Smith", Email: "bob@company.com", Role: "Editor" },
        { Name: "Carol Davis", Email: "carol@company.com", Role: "User" },
        { Name: "David Wilson", Email: "david@company.com", Role: "Editor" },
        { Name: "Eve Brown", Email: "eve@company.com", Role: "User" },
    ];
    const columns = ["Name", "Email", "Role"];
    const handleRowClick = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [page, setPage] = useState(1);
    return <>
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
    </>
}
export default DefaultPage;