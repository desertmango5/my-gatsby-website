import React from 'react'; 
import style from '../styles/photography.module.scss';
import ArtisticImages from '../components/ArtisticImages';
import BusinessImages from '../components/BusinessImages';
import PortraitImages from '../components/PortraitImages';

const Photography = () => (
  <div>
    <div className={style.hero}>
      <h4 className={style.year}>Since 2011</h4>
      <h1 className={style.h1}>Photography</h1>
      <p className={style.byline}>Portraits • Business • Artistic</p>
    </div>
    <div className={style.body}>
      <h2>Portraits</h2>
      <p>Individual • Couples • Families</p>
      <PortraitImages />

      <h2>Artistic</h2>
      <p>Some of My Favorite Work</p>
      <ArtisticImages />

      <h2>Business</h2>
      <p>Make an Impression</p>
      <BusinessImages />
    </div>
  </div>

);

export default Photography; 
