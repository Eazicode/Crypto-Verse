import {Link} from 'react-router-dom'
import millify from 'millify'
import {Card, Row, Col, Input} from 'antd'
import  {useGetCryptosQuery} from '../Services/cryptoApi'
import { useEffect, useState } from 'react'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data:cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSeacrhTerm] = useState('')

  useEffect(() => {
    
    const FilterData = cryptosList?.data?.coins.filter((coin) => (
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setCryptos(FilterData)
  }, [cryptosList, searchTerm])

  // console.log(cryptosList)
  if (isFetching) return 'Loading'

  return ( 
    <>
      {!simplified && (
        <Input className='search-crypto' placeholder='Search Cryptocurrency' onChange={(e) => {setSeacrhTerm(e.target.value)}}/>
      )}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>}
                hoverable>
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}% </p>
              </Card>
            </Link>
          </Col>
        ))
        }
      </Row>
    </>
   );
}
 
export default Cryptocurrencies;