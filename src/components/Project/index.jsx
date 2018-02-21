import React from 'react' 
import style from './index.module.scss'

const Project = (props) => (
  <section className={style.project}>
    <h3 className={style.name}>
      <a href={props.url} target="_blank" className={style.name__link}>{props.name}</a>
      <hr/>
    </h3>
    <div className={style.logos}>
      {props.logos.map(logo => (
        <div>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
      ))}
    </div>
    <p className={style.desc}>{props.desc}</p>
  </section>
)

export default Project