import { Line } from "react-chartjs-2"; 
import {Col, Row, Typography} from "antd"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const {Title: Text} = Typography 

const LineChart = ({ coinHistory, coinName, currentPrice}) => {
  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i]?.price)
    coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString())
  }
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: "0071bd",
        borderColor: "0071bd",
      }
    ]
  }

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
        grid: {
          display: false,
        },
      },
      y: { 
        type: 'linear',
        beginAtZero: true, 
        title: {
          display: true,
          text: 'Price',
        },
          ticks: {
          callback: function(value, index, ticks) {
            return '$' + value; 
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return ( 
    <>
      <Row className="chart-header">
        <Text level={2} className="chart-title">
          {coinName} Price Chart
        </Text>

        <Col className="price-container">
          <Text level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Text>
          <Text level={5} className="cureent-price">
            Current {coinName} Price: ${currentPrice}
          </Text>
        </Col>
      </Row>

      <div className="h-[600px]">
        <Line
          data={data}
          options={options}
        />
      </div>
      
    </>
   );
}
 
export default LineChart;