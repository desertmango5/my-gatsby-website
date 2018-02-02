import React from 'react' 
import Img from 'gatsby-image'
import style from './index.module.scss'
import doctor from '../../assets/images/photography/business/doctor.jpg'
import group from '../../assets/images/photography/business/group.jpg'
import hospital from '../../assets/images/photography/business/hospital.jpg'
import sign from '../../assets/images/photography/business/sign.jpg'


const BusinessImages = () => (
  <div className={style.images}>
    <img 
      src={hospital} 
      alt="Oasis Hospital in Al Ain, UAE"
      className={style.images__business}  
    />
    <img 
      src={group} 
      alt="Customer service group photo"
      className={style.images__business}  
    />
    <img 
      src={doctor} 
      alt="Headshot of female doctor"
      className={style.images__business}  
    />
    <img 
      src={sign} 
      alt="Sign for Oasis Hospital in Al Ain, UAE"
      className={style.images__business}  
    />
  </div>
)

export default BusinessImages