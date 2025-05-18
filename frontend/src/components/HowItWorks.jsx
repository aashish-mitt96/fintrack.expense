import React from "react";

const steps = [
  {
    id: 1,
    title: "Connect Accounts / Add Transactions",
    description:
      "Securely connect your bank accounts or manually add transactions to get started quickly.",
    emoji: "🔗",
  },
  {
    id: 2,
    title: "Track and Categorize Spending",
    description:
      "Automatically categorize your spending into clear groups like food, travel, and business.",
    emoji: "📂",
  },
  {
    id: 3,
    title: "Get Business Insights Instantly",
    description:
      "Visualize your financial health with real-time insights, graphs, and reports.",
    emoji: "⚡",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 mb-16">
          Start managing your finances in just three easy steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-5xl mb-4 text-indigo-600">{step.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
