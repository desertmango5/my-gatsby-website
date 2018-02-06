import React from 'react' 
import style from '../styles/webdev.module.scss'
import Experience from '../components/Experience'
import ReactLogo from '../assets/icons/react-logo.png'
import JS from '../assets/icons/js-logo.png'
import ES6 from '../assets/icons/es6-logo.png'
import CSS3 from '../assets/icons/css-logo.png'
import GraphQLLogo from '../assets/icons/graphql-logo.png'
import GraphCMS from '../assets/icons/graphcms-logo.png'
import HTMLLogo from '../assets/icons/html-logo.png'
import JAM from '../assets/icons/jamstack-logo.png'
import NodeJS from '../assets/icons/node-logo.png'
import NPM from '../assets/icons/npm-logo.png'
import Photoshop from '../assets/icons/photoshop-logo.png'
import Illustrator from '../assets/icons/illustrator-logo.png'
import Vue from '../assets/icons/vue-logo.png'
import Webpack from '../assets/icons/webpack-logo.png'
import Gatsby from '../assets/icons/gatsby-logo.png'
import CSSGrid from '../assets/icons/css-grid-logo.png'
import Mongo from '../assets/icons/mongodb-logo.png'
import Express from '../assets/icons/express-logo.png'

const Webdev = () => (
  <div className={style.body}>
    <h2 className={style.skills}>Web Development Skills</h2>
    <section className={style.tools}>
      <Experience 
        logo={JS}
        tool="JavaScript"
        level="7"
      />
      <Experience 
        logo={ReactLogo}
        tool="React"
        level="5"
      />
      <Experience 
        logo={ES6}
        tool="ES6"
        level="7"
      />
      <Experience 
        logo={CSS3}
        tool="CSS3"
        level="8"
      />
      <Experience 
        logo={GraphQLLogo}
        tool="GraphQL"
        level="4"
      />
      <Experience 
        logo={GraphCMS}
        tool="GraphCMS"
        level="6"
      />
      <Experience 
        logo={HTMLLogo}
        tool="HTML"
        level="8"
      />
      <Experience 
        logo={JAM}
        tool="JAMstack"
        level="6"
      />
      <Experience 
        logo={NodeJS}
        tool="Node.js"
        level="4"
      />
      <Experience 
        logo={NPM}
        tool="NPM"
        level="4"
      />
      <Experience 
        logo={Photoshop}
        tool="Photoshop"
        level="8"
      />
      <Experience 
        logo={Illustrator}
        tool="Illustrator"
        level="6"
      />
      <Experience 
        logo={Vue}
        tool="Vue"
        level="4"
      />
      <Experience 
        logo={Webpack}
        tool="Webpack"
        level="5"
      />
      <Experience 
        logo={Gatsby}
        tool="Gatsby"
        level="6"
      />
      <Experience 
        logo={CSSGrid}
        tool="CSS Grid"
        level="6"
      />
      <Experience 
        logo={Mongo}
        tool="MongoDB"
        level="4"
      />
      <Experience 
        logo={Express}
        tool="ExpressJS"
        level="5"
      />
    </section>
  </div>
)

export default Webdev