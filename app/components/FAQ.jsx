import React from "react";

const faqs = [
  {
    index: 1,
    question: "What is Fineasy?",
    answer:
      "Fineasy is a finance management app that helps you track your expenses, create budgets, and manage your financial goals efficiently.",
  },
  {
    index: 2,
    question: "How do I link my bank accounts to Fineasy?",
    answer:
      "You can link your bank accounts by navigating to the 'Accounts' section in the app, selecting 'Add Account,' and following the prompts to securely connect your bank.",
  },
  {
    index: 3,
    question: "Is my financial data secure with Fineasy?",
    answer:
      "Yes, your data is encrypted and securely stored. Fineasy uses industry-standard security measures to protect your financial information.",
  },
  {
    index: 4,
    question: "Can I set financial goals with Fineasy?",
    answer:
      "Absolutely! Fineasy allows you to set and track various financial goals such as saving for a vacation, building an emergency fund, or paying off debt.",
  },
  {
    index: 5,
    question: "Does Fineasy offer financial advice?",
    answer:
      "Fineasy provides personalized financial insights based on your spending and saving patterns. However, it is always recommended to consult a financial advisor for professional advice.",
  },
  {
    index: 6,
    question: "How do I categorize my expenses in Fineasy?",
    answer:
      "You can categorize your expenses by going to the 'Transactions' section, selecting a transaction, and assigning it to a predefined category or creating a custom one.",
  },
];

const FAQCard = ({ index, question, answer }) => (
  <div
    className={`${
      index === 1 || index === 4 || index === 5
        ? "bg-white md:bg-red-600 text-black md:text-white"
        : "bg-white text-black"
    } shadow-md p-4 rounded-lg`}
  >
    <h3 className="text-[20px] sm:text-[24px] font-bold mb-2">{question}</h3>
    <p>{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="flex flex-col items-start justify-start mb-4">
        <p className="mt-4 text-[14px] sm:text-[16px] text-red-600 leading-tight">
          FAQS
        </p>
        <p className="text-[32px] font-bold text-gray-900 sm:text-[48px] max-w-[500px] leading-tight">
          Frequently Asked Questions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {faqs.map((faq, index) => (
          <FAQCard key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
