import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: ['Liquidity Pool (90%)', 'Marketing (5%)', 'Team (5%)'],
    datasets: [
      {
        label: 'Tokenomics',
        data: [90, 5, 5],
        backgroundColor: ['#00ffff', '#808080', '#008080'],
        borderColor: ['#00ffff', '#808080', '#008080'],
        borderWidth: 1,
      },
    ],
  };

  // Define options for the Pie chart
  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#fff', // Change legend text color
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-screen bg-heroSection flex items-center justify-center text-white">
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 lg:w-8/12 p-6 md:p-10 rounded-lg shadow-lg">
        {/* Left side: Pie Chart */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64">
            <Pie data={data} options={options} />
          </div>
        </div>

        {/* Right side: Token Information */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>
          <div className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Name</span>
              <span>EthAi</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Token Name</span>
              <span>$EthAi</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Token Standard</span>
              <span>ERC20</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Blockchain</span>
              <span>Ethereum</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Total Supply</span>
              <span>100 Million</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Tax</span>
              <span>5%/5%</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg mt-6">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Team</span>
              <span>35%</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Marketing</span>
              <span>5%</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="font-medium">Liquidity Pool</span>
              <span>90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
