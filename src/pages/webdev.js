import React from 'react' 
import style from '../styles/webdev.module.scss'
import Experience from '../components/Experience'
import ReactLogo from '../assets/icons/react-logo.png'
import jsLogo from '../assets/icons/js-logo.png'

const Webdev = () => (
  <div className={style.body}>
    <Experience 
      logo={ReactLogo}
      tool="ReactJS"
      level="5"
    />
    <Experience 
      logo={jsLogo}
      tool="JavaScript"
      level="7"
    />
  </div>
)

export default Webdev