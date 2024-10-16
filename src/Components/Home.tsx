import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import Navbar from './navbar';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import FAQ from './Fqa';
import ExploreDapp from './ExploreDapp';
import EmailSubscription from './Footer';

function Home() {
  return (
    <>
      <div className='relative h-screen overflow-hidden' id="hero">
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="video/EthAi-hero-section.mp4" type="video/mp4" />
        </video>

        <div className='absolute inset-0 flex flex-col justify-around items-center h-full z-10'>
          <div className="relative flex justify-between w-full text-white p-4 md:p-9 top-4">
            <Navbar />
          </div>

          <div className='flex flex-col justify-center items-center text-center mt-10'>
            <h1 className='text-white text-3xl md:text-6xl'>When Innovation</h1>
            <h1 className='text-white text-3xl md:text-6xl mt-6'>
              Meets <span className='bg-heroText p-2 text-black rounded-full'>Investment</span>
            </h1>
            <h6 className='text-heroText text-md md:text-xl mt-10 mb-10'>Empowering Trading Through Advanced Technology</h6>
            <button className="bg-[rgba(139,249,232,0.2)] text-white font-bold py-2 px-6 rounded-full shadow-inner-blue hover:scale-105 transform transition duration-300 border border-green-300">
              Open dApp
            </button>
          </div>
          <div className='h-52'></div>
        </div>
      </div>

      <div id="features">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="tokenomics">
        <Tokenomics />
      </div>
      
      <div id="roadmap">
        <Roadmap />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <div id="explore-dapp">
        <ExploreDapp />
      </div>

      <div id="subscribe">
        <EmailSubscription />
      </div>
    </>
  );
}

export default Home;
