export default function HeroSection() {
    return (
      <div className="bg-heroSection h-screen flex flex-col justify-center">
        <div>
          {/* First Row */}
          <div className="pb-5 flex flex-row justify-center">
            {/* Trade Optimizer Card */}
            <div className="bg-heroCard h-96 w-60 rounded-tl-3xl rounded-b-lg rounded-tr-lg flex flex-col justify-start items-center p-5 mr-4 border border-green-950 shadow-lg">
              <img className="mt-14 h-16" src="/hero-section.png" alt="Trade Optimizer" />
              <h4 className="text-white text-xl pt-5">Trade Optimizer</h4>
              <p className="text-heroText text-center">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
            </div>
  
            {/* Market Insight Card */}
            <div className="flex flex-col">
              <div className="bg-heroCard h-40 w-96 mr-4 rounded-lg border border-green-950 shadow-md">
                <h4 className="text-white text-xl pl-2 pt-5">Market Insight</h4>
                <p className="text-left pl-2 text-heroText pt-2">Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
              </div>
              <div className="bg-heroCard shadow-inner-blue h-52 w-96 mr-4 rounded-lg mt-5 border border-green-950">
                <h4 className="text-white text-xl pl-2 pt-5">Advanced Analytics</h4>
                <p className="text-left pl-2 text-heroText pt-2">Leverage in-depth analytics to understand market dynamics and make informed decisions.</p>
              </div>
            </div>
  
            {/* Risk Guard Card */}
            <div className="bg-heroCard h-96 w-60 rounded-tl-lg rounded-b-lg rounded-tr-3xl flex flex-col border border-green-950 justify-start items-center p-5 mr-4 shadow-lg">
              <img className="mt-14 h-16" src="/hero-section.png" alt="Risk Guard" />
              <h4 className="text-white text-xl pt-5">Risk Guard</h4>
              <p className="text-heroText text-center">Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
            </div>
          </div>
  
          {/* Second Row */}
          <div className="flex flex-row justify-center pl-2">
            {/* Portfolio Sync Card */}
            <div className="bg-heroCard h-64 w-60 mr-4 rounded-lg rounded-bl-3xl border border-green-950 shadow-md">
              <h4 className="text-white text-xl pl-2 pt-5">Portfolio Sync</h4>
              <p className="text-left pl-2 text-heroText pt-2">Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
            </div>
  
            {/* Comprehensive Market Insight Card */}
            <div className="bg-heroCard h-64 w-[640px] mr-4 rounded-lg rounded-br-3xl border border-green-950 shadow-md">
              <h4 className="text-white text-xl pl-2 pt-5">Comprehensive Market Insight</h4>
              <p className="text-left pl-2 text-heroText pt-2">Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  