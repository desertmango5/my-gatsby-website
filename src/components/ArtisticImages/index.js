import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'


const ArtisticImages = () => (
  <div className={style.images}>
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/creative4_jgy5r2.jpg`} 
      alt="Abu Dhabi Grand Mosque arches"
      className={style.images__artistic}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/creative9_y1kzbx`} 
      alt="Light trails on Dubai round-a-bout"
      className={style.images__artistic}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/creative8_zqot0r`} 
      alt="Overcast morning on Glorietta Bay San Diego"
      className={style.images__artistic}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/creative6_nbnqzc`}
      alt="Emirates Palace Hotel fountains"
      className={style.images__artistic}  
    />
  </div>
)

export default ArtisticImages