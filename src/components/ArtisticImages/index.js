import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'
import arches from '../../assets/images/photography/artistic/arches.jpg'
import rab from '../../assets/images/photography/artistic/rab.jpg'
import marina from '../../assets/images/photography/artistic/marina.jpg'
import fountains from '../../assets/images/photography/artistic/fountains.jpg'


const ArtisticImages = () => (
  <div className={style.images}>
    <img 
      src={arches} 
      alt="Abu Dhabi Grand Mosque arches"
      className={style.images__artistic}  
    />
    <img 
      src={rab} 
      alt="Light trails on Dubai round-a-bout"
      className={style.images__artistic}  
    />
    <img 
      src={marina} 
      alt="Overcast morning on Glorietta Bay San Diego"
      className={style.images__artistic}  
    />
    <img 
      src={fountains} 
      alt="Emirates Palace Hotel fountains"
      className={style.images__artistic}  
    />
  </div>
)

export default ArtisticImages