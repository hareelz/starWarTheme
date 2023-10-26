import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext';
import { Carousel } from 'antd';
const contentStyle = {
  height: '800px',
  color: '#fff',
  background: '#fff',
}


const Content = () => {
  const { theme } = useContext(themeContext);
  return ( 
  <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='img' src={theme === 'light' ? 'https://c.wallhere.com/photos/fa/84/Star_Wars_70s-163047.jpg!d' : "https://images4.alphacoders.com/132/1327480.png"} alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img className='img' src={theme === 'light' ? 'https://i.pinimg.com/originals/e1/9f/74/e19f74c90aed385c44185648de3e1e58.jpg' : "https://4kwallpapers.com/images/wallpapers/darth-vader-black-background-star-wars-lightsaber-amoled-2560x1440-4971.jpg"} alt="" /></h3>
    </div>
  </Carousel>
  </div> )
    }
 
export default Content