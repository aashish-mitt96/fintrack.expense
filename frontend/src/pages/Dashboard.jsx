import { Card, CardContent } from "../components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Avatar, AvatarFallback } from "../components/Avatar";
import { Button } from "../components/button";
import logo from "../assets/logo.png";
const spendData = [
  { month: "Apr", amount: 0 },
  { month: "May", amount: 45000 },
  { month: "Jun", amount: 90000 },
  { month: "Jul", amount: 60000 },
  { month: "Aug", amount: 120000 },
  { month: "Sep", amount: 150000 },
  { month: "Oct", amount: 100000 },
  { month: "Nov", amount: 105000 },
  { month: "Dec", amount: 80000 },
  { month: "Jan", amount: 95000 },
  { month: "Feb", amount: 115000 },
];

const pendingTrips = [
  { name: "John Doe", email: "john@financeapp.com", count: 2 },
  { name: "Jane Smith", email: "jane@financeapp.com", count: 3 },
  { name: "Mike Ross", email: "mike@financeapp.com", count: 5 },
];

const pendingReports = [
  { name: "Emily", email: "emily@financeapp.com", amount: 1280.25 },
  { name: "Robert", email: "robert@financeapp.com", amount: 2345.6 },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-tr from-blue-50 to-white">
      {/* Top Navbar */}
      <header className="w-full fixed top-0 left-0 right-0 z-10 bg-blue-900 shadow flex items-center justify-between px-6 py-1.5">
        {/* Left - Logo & Title */}
        <div className="flex gap-2 justify-center items-center">
          <img src={logo} className="w-9" alt="Logo" />
          <h1 className="text-xl font-bold text-white">FinTrack</h1>
        </div>

        {/* Right - Interactive Items */}
        <div className="flex items-center gap-4 text-white">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            🔔
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Dark Mode Toggle */}
          <button className="text-xl focus:outline-none" title="Toggle Theme">
            🌙
          </button>

          {/* Profile Avatar + Dropdown */}
          <div className="relative group">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-lg hidden group-hover:block z-20">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-slate-100 text-gray-800 shadow-lg p-6 mt-14">
        {/* Business Name */}
        <h2 className="text-2xl font-extrabold mb-10 tracking-wide text-blue-900">
          Business Name
        </h2>

        {/* Navigation Menu */}
        <nav className="font-medium text-sm flex flex-col space-y-1">
          {/* Group 1: Main */}
          <div className="mb-4">
            {[
              { label: "Dashboard", icon: "📊" },
              { label: "Reports", icon: "📁" },
              { label: "Analytics", icon: "📈" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <hr className="border-gray-300 mb-4" />

          {/* Group 2: Financials */}
          <div className="mb-4">
            {[
              { label: "Transactions", icon: "💸" },
              { label: "Budgets", icon: "🎯" },
              { label: "Savings", icon: "🏦" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <hr className="border-gray-300 mb-4" />

          {/* Group 3: Settings & Feedback */}
          <div>
            {[
              { label: "Settings", icon: "⚙️" },
              { label: "Share Feedback", icon: "💬" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-6 border-t border-gray-300">
          <button className="w-full bg-red-50 text-red-600 font-semibold py-2 rounded-md hover:bg-red-100 transition">
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 overflow-y-hidden mt-13 ">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2 bg-white shadow-md rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-blue-600 mb-4">
                Spend Summary
              </h2>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={spendData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-xl">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-lg font-semibold text-blue-600">
                Overall Summary
              </h2>
              <div>
                Total Expense:{" "}
                <span className="font-medium text-gray-700">$169,000.00</span>
              </div>
              <div>
                Employee Claims:{" "}
                <span className="font-medium text-gray-700">$120,000.00</span>
              </div>
              <div>
                Reimbursements:{" "}
                <span className="font-medium text-gray-700">$49,000.00</span>
              </div>
              <div>
                Total Trips:{" "}
                <span className="font-medium text-gray-700">85</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-white shadow-md rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-blue-600 mb-3">
                Pending Trips
              </h2>
              <ul>
                {pendingTrips.map((trip, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-3 border-b last:border-b-0"
                  >
                    <div>
                      <div className="font-medium text-gray-800">
                        {trip.name}
                      </div>
                      <div className="text-sm text-gray-500">{trip.email}</div>
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {trip.count}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-blue-600 mb-3">
                Pending Reports
              </h2>
              <ul>
                {pendingReports.map((report, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-3 border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{report.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-800">
                          {report.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {report.email}
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-semibold">
                      ${report.amount.toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
