import HTMLReactParser from "html-react-parser/lib/index";
import { useParams } from "react-router";
import millify from "millify";
import {Col, Row, Typography, Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyFilled } from "@ant-design/icons";
// import {useGetCryptosDetailsQuery} from '../Services/cryptoApi'


const CryptoDetails = () => {
  const {Title, Text} = Typography
  const {Option} = Select
  const {coinId} = useParams()
  // const {data, isFetching} = useGetCryptosDetailsQuery(coinUuId)
  

  return ( 
    <>
      <p>CryptoDetails {`${coinId}`}</p>
    </>
   );
}
 
export default CryptoDetails;