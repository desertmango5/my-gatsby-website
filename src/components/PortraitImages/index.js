import React from 'react' 
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
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1518983987/mysite/memories.jpg`} 
      alt="Backlight family posing in front of colorful sunset"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/family-8.jpg`} 
      alt="Three young boys smiling"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/couple-15.jpg`} 
      alt="Couple on a carpet in the desert"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/desert-couple.jpg`} 
      alt="Couple holding hands in desert"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/throwing-sand.jpg`} 
      alt="Man throwing sand in desert"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/woman.jpg`} 
      alt="Woman in blue dress lying on desert sand"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/family-5.jpg`} 
      alt="Family in desert with long shadows"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1519026501/mysite/family-2.jpg`} 
      alt="Family in desert"
      className={style.images__portrait}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/f_auto/v1518983990/mysite/Derwin.jpg`} 
      alt="Young man wearing a hat"
      className={style.images__portrait}  
    />
  </div>
)

export default PortraitImages