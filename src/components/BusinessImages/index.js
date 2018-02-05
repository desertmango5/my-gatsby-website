import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'


const BusinessImages = () => (
  <div className={style.images}>
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/hospital.jpg`} 
      alt="Oasis Hospital in Al Ain, UAE"
      className={style.images__business}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/group.jpg`} 
      alt="Customer service group photo"
      className={style.images__business}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/doctor.jpg`} 
      alt="Headshot of female doctor"
      className={style.images__business}  
    />
    <img 
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUD_NAME}/image/upload/v1517811454/mysite/sign.jpg`} 
      alt="Sign for Oasis Hospital in Al Ain, UAE"
      className={style.images__business}  
    />
  </div>
)

export default BusinessImages