import React from 'react' 
import style from './index.module.scss'
import ReactLogo from '../../assets/icons/react-logo.png'


const Experience = (props) => (
  <section className={style.exp}>
    <img 
      src={props.logo} 
      alt="logo"
      className={style.logo}  
    />
    <h3 className={style.tool}>{props.tool}</h3>
    <p className={style.skill}>Skill Level: <span className={style.rating}>{props.level}</span></p>
  </section>
)

export default Experience