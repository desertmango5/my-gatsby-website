import React from 'react' 
import Img from 'gatsby-image'
import style from '../styles/photography.module.scss'
import hero from '../assets/images/photography/bridge.jpg'
import ArtisticImages from '../components/ArtisticImages'
import BusinessImages from '../components/BusinessImages'
import PortraitImages from '../components/PortraitImages'

const Photography = () => (
  <div>
    <img 
      src={hero} 
      alt="Tempe Town Lake at night"
      className={style.hero}
    />
    <div className={style.body}>
      <h2>Portraits</h2>
      <p>Individual • Couples • Families</p>
      <PortraitImages />

      <h2>Business</h2>
      <p>Make an Impression</p>
      <BusinessImages />
      

      <h2>Artistic</h2>
      <p>Some of My Favorite Work</p>
      <ArtisticImages />
    </div>
  </div>

)

export default Photography