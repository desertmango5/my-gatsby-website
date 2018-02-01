import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'
import couple from '../../assets/images/photography/portraits/couple.jpg'
import jumping from '../../assets/images/photography/portraits/jumping.jpg'
import man from '../../assets/images/photography/portraits/man.jpg'
import woman from '../../assets/images/photography/portraits/woman.jpg'


const PortraitImages = () => (
  <div className={style.images}>
    <img 
      src={man} 
      alt=""
      className={style.images__portrait}  
    />
    <img 
      src={jumping} 
      alt=""
      className={style.images__portrait}  
    />
    <img 
      src={couple} 
      alt=""
      className={style.images__portrait}  
    />
    <img 
      src={woman} 
      alt=""
      className={style.images__portrait}  
    />
  </div>
)

export default PortraitImages