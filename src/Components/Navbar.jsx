import {Button, Menu, Typography, Avatar,} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'  
import MenuItem from 'antd/es/menu/MenuItem';


const Navbar = () => {
  return ( 
    <>
      <div className='nav-container'>
        <div className="logo-container">
          <Avatar src='public\cryptocurrency image.png'/>
          <Typography.Title level={3} className='logo'>
            <Link to='/'>
              Cryptoverse
            </Link>
          </Typography.Title>
          {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
        <Menu theme='dark'>
            <MenuItem key={1} icon={<HomeOutlined />}>
              <Link to='/'>
                Home
              </Link>
            </MenuItem>

            <MenuItem key={2} icon={<FundOutlined />}>
              <Link to='/cryptocurrencies'>
                Cryptocurrencies
              </Link>
            </MenuItem>

            <MenuItem key={3} icon={<MoneyCollectOutlined />}>
              <Link to='/exchange'>
                Exchange
              </Link>
            </MenuItem>

            <MenuItem key={4} icon={<BulbOutlined />}>
              <Link to='/news'>
                News
              </Link>
            </MenuItem>
            
        </Menu>
      </div>
    </>
   );
}
 
export default Navbar;