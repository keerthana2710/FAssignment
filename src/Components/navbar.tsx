import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <>
      <h1 className="text-2xl font-bold p-5 ml-16">EthAi</h1>
      <div className="h-20 p-3 w-[50vw] bg-navGreen rounded-full flex items-center justify-center cursor-pointer">
        <nav>
          <ul className="flex justify-center items-center space-x-12 text-white text-2xl">
            <li>
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                Why Us
              </Link>
            </li>
            <li>
              <Link to="tokenomics" smooth={true} duration={500}>
                Tokenomics
              </Link>
            </li>
            <li>
              <Link to="roadmap" smooth={true} duration={500}>
                Roadmap
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-5 space-x-10">
        <button className="text-2l">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-navButton rounded-xl text-black h-12 w-40 p-3 text-2l text-center border border-blue-300">
          <Link to="/whitepaper">Whitepaper</Link>
        </button>
      </div>
    </>
  );
}
