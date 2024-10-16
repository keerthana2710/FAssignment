const FAQ = () => {
  const faqs = [
    { question: "What is EthAi?" },
    { question: "How can EthAi help me as a Trader?" },
    { question: "Who can use EthAi?" },
    { question: "How does EthAi track smart money flow?" },
    { question: "How does EthAi ensure data security?" },
  ];

  return (
    <div className="bg-heroSection min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Title Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex justify-center items-center">
          <h2 className="text-4xl font-semibold text-white text-center md:text-left">
            Frequently Asked<br /> Questions
          </h2>
        </div>

        {/* FAQ List Section */}
        <div className="md:w-1/2 p-8 md:p-12">
          <ul className="space-y-6">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-600 py-4 transition duration-300 hover:bg-gray-700 rounded-md"
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-xl text-gray-400">+</span>
                  <span className="text-lg text-white">{faq.question}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
