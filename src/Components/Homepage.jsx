import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
import {useGetCryptosQuery} from '../Services/cryptoApi'
import {Cryptocurrencies, News} from '../Components'

const Homepage = () => {
  const {Title} = Typography

  const { data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats

  if (isFetching) return 'Loading...'
  
  return ( 
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Crypto Currencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={globalStats.totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={globalStats.totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>

        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified/>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Lastest Crypto News
        </Title>

        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div> 

      <News simplified/>
    </>
   );
}
 
export default Homepage;