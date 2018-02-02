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
      alt="Man posing on sand dune"
      className={style.images__portrait}  
    />
    <img 
      src={jumping} 
      alt="Man jumping in air throwing sand"
      className={style.images__portrait}  
    />
    <img 
      src={couple} 
      alt="Couple posing together in front of mountain"
      className={style.images__portrait}  
    />
    <img 
      src={woman} 
      alt="Woman in blue dress lying on desert sand"
      className={style.images__portrait}  
    />
  </div>
)

export default PortraitImages