import { FaTelegramPlane, FaInstagram, FaFacebookF, FaDiscord } from 'react-icons/fa';

const EmailSubscription = () => {
  return (
    <div className="bg-heroSection flex items-center justify-center px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full gap-8">
        {/* Left Section (Logo and Social Icons) */}
        <div className="flex flex-col items-start space-y-8">
          <div className="text-white flex items-center space-x-2">
            <div className="bg-cyan-400 h-12 w-12 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Logo</span>
            </div>
            <span className="text-3xl font-semibold">EthAi</span>
          </div>
          <div className="flex space-x-6">
            <FaTelegramPlane className="text-2xl text-gray-300 hover:text-cyan-400" />
            <FaInstagram className="text-2xl text-gray-300 hover:text-cyan-400" />
            <FaFacebookF className="text-2xl text-gray-300 hover:text-cyan-400" />
            <FaDiscord className="text-2xl text-gray-300 hover:text-cyan-400" />
          </div>
        </div>

        {/* Right Section (Quote and Email Input) */}
        <div className="text-white flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-right">
            “Designed for traders of today, just like you.”
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-4">
            <input
              type="email"
              placeholder="What's your work email?"
              className="px-4 py-3 bg-transparent border border-gray-500 rounded-full text-white placeholder-gray-400 outline-none focus:border-cyan-400 w-full md:w-64 mb-4 md:mb-0"
            />
            <button className="px-6 py-3 bg-cyan-400 text-[#0f1e28] font-semibold rounded-full hover:bg-cyan-300 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
