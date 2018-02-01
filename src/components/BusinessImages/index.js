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
      alt=""
      className={style.images__business}  
    />
    <img 
      src={group} 
      alt=""
      className={style.images__business}  
    />
    <img 
      src={doctor} 
      alt=""
      className={style.images__business}  
    />
    <img 
      src={sign} 
      alt=""
      className={style.images__business}  
    />
  </div>
)

export default BusinessImages