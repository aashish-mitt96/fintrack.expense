import React from "react";
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CalculatorIcon,
  TrendingUpIcon,
  UsersIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";

const features = [
  {
    title: "Dashboard Overview",
    icon: <ChartBarIcon className="h-10 w-10 text-indigo-600" />,
    description: "Get a snapshot of all your finances in one place.",
  },
  {
    title: "Expense & Income Tracking",
    icon: <CurrencyDollarIcon className="h-10 w-10 text-indigo-600" />,
    description: "Track all your earnings and expenses effortlessly.",
  },
  {
    title: "Invoice Generation",
    icon: <DocumentTextIcon className="h-10 w-10 text-indigo-600" />,
    description: "Create and manage invoices for clients or vendors.",
  },
  {
    title: "Automated Reports",
    icon: <CalculatorIcon className="h-10 w-10 text-indigo-600" />,
    description: "Generate insightful financial reports automatically.",
  },
  {
    title: "Profit & Loss Analysis",
    icon: <TrendingUpIcon className="h-10 w-10 text-indigo-600" />,
    description: "Visualize profit and loss trends over time.",
  },
  {
    title: "Multi-user Access",
    icon: <UsersIcon className="h-10 w-10 text-indigo-600" />,
    description: "Collaborate with team members with controlled access.",
  }
];

export default function FeatureSection() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Features</h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to manage your personal or business finances efficiently.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all border border-gray-200"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
