import {Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment';
import {useGetCryptoNewsApiQuery} from '../Services/cryptoNewsApi'
import {useGetCryptosQuery} from '../Services/cryptoApi'
import { useState } from 'react';

const News = ({ simplified }) => {
  const {Text, Title} = Typography;
  const {Option} = Select;
  const count = simplified ? 4 : 10;
  const [newsCategory, setNewsCategory] = useState('CryptoCurrency')
  const { data:cryptoNews, isFetching} = useGetCryptoNewsApiQuery({newsCategory,count});
  const {data} = useGetCryptosQuery(100);

  if (isFetching) return 'Loading';

  return ( 
    
    <>
    {!simplified && (
      <Col span={24} style={{marginBottom: "20px"}}>
        <Select
          showSearch
          className='select-news'
          placeholder='Select a Crypto'
          optionFilterProp='children'
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
          <Option value='Cryptocurrency'>Cryptocurrency</Option>
          {data?.data?.coins?.map((coin) => 
            <Option value={coin.name}>
              {coin.name}
            </Option>)
          }
        </Select>
      </Col>
    )}
      <Row gutter={[24, 24]}>
        {cryptoNews.data.map((news, i) => (
          <Col xs={24} sm={12} lg={6} key={news.title}>
              <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel='noreferrer'>
                <div className="news-image-container text-[18px]">
                  <Title className='news-title' level={4}>
                    {news.title.length > 15 ? `${news.title.substring(0, 50)}...` : news.title}
                  </Title>
                  <img src={news.thumbnail} className='w-[50px] h-[50px] rounded'/>
                </div>

                <p>
                  {news.excerpt.length > 50 ? `${news.excerpt.substring(0, 100)}....` : news.excerpt}
                </p>

                <div className="flex items-center provider-container">
                  <div className='flex items-center'>
                    <Avatar  src={news.publisher.favicon}/>
                    <Text className='provider-name'>
                      {news.publisher.name || 'blog'}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.date).startOf('second').fromNow()}
                  </Text>
                </div>
              </a>
              </Card>
          </Col>
        ))}
      </Row>
    </>
   );
}
 
export default News;