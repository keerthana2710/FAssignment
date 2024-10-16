const ExploreDapp = () => {
  return (
    <div className="bg-heroSection min-h-screen flex items-center justify-center">
      <div className="relative bg-[rgba(139,249,232,0.2)] text-white font-bold py-8 px-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-cyan-400 opacity-20 blur-xl"></div>
        <div className="relative z-10 text-center px-8 py-16">
          <h2 className="text-4xl font-semibold">
            Explore Our <span className="text-cyan-400">dApp</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. 
            By tracking smart money flows, monitoring key wallets, and providing real-time market insights, 
            EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, 
            market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
          </p>
          <button className="mt-6 bg-[rgba(139,249,232,0.5)] text-white font-bold py-2 px-6 rounded-full shadow-inner-blue hover:scale-105 transform transition duration-300 border border-green-300">
            Open dApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDapp;
