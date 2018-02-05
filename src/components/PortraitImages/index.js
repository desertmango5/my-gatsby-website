import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'


const PortraitImages = () => (
  <div className={style.images}>
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/man.jpg`} 
      alt="Man posing on sand dune"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/jumping.jpg`} 
      alt="Man jumping in air throwing sand"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/couple.jpg`} 
      alt="Couple posing together in front of mountain"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/woman.jpg`} 
      alt="Woman in blue dress lying on desert sand"
      className={style.images__portrait}  
    />
  </div>
)

export default PortraitImages