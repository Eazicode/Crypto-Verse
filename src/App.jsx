import {Routes, Route, Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import {Navbar, Homepage, Cryptocurrencies, Exchange, News, CryptoDetails } from './Components'

function App() {

  return (
    <>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Homepage />} />

                <Route exact path='/exchange' element={<Exchange />} />

                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />

                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />

                <Route exact path='/news' element={<News />} />
                
              </Routes>
              
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>

            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchange'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
