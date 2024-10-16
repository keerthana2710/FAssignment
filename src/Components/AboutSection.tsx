export default function AboutSection() {
    return (
      <div className="h-screen bg-heroSection">
        <h1 className="text-white text-3xl font-bold text-center">About EthAi</h1>
        <p className="text-heroText text-center mt-5">
          At EthAi, we’re all about making crypto trading easier and more intuitive.
          <br />
          We provide tools that help traders keep up with all new market trends, track top traders’ movements.
        </p>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-navButton rounded-xl mt-16 text-black h-12 w-40 p-3 text-center border border-blue-300">
            Read more
          </button>
          <div className="bg-heroCard grid grid-cols-1 md:grid-cols-2 gap-10 p-10 h-auto max-w-4xl mt-20 rounded-xl">
            <div className="flex flex-col items-center">
              <img src="/icons/trend.png" alt="Trend Icon" className="mb-2" />
              <h4 className="text-white pb-2">Stay ahead</h4>
              <p className="text-heroText text-center">No more guesswork—get clear, trustable insights.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/support.png" alt="Support Icon" className="mb-2" />
              <h4 className="text-white pb-2">Know Your Assets</h4>
              <p className="text-heroText text-center">Always stay on top of how your investments are performing.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/wallet.png" alt="Wallet Icon" className="mb-2" />
              <h4 className="text-white pb-2">Simple, Not Overwhelming</h4>
              <p className="text-heroText text-center">Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/heart-insurance-symbol.png" alt="Future-Proof Icon" className="mb-2" />
              <h4 className="text-white pb-2">Future-Proof</h4>
              <p className="text-heroText text-center">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  