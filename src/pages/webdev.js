import React from 'react' 
import style from '../styles/webdev.module.scss'
import Experience from '../components/Experience'
import Project from '../components/Project'
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
import Pug from '../assets/icons/pug-logo.png'
import SASS from '../assets/icons/sass-logo.png'

const Webdev = () => (
  <div className={style.body}>
    <section className={style.about}>
      <h2 className={style.about__heading}>Web Development Skills</h2>
      <p><em><strong>#LearningByDoing</strong></em></p>
      <p>
        I read official documentation, countless blogs, and follow along with numerous training videos on my way to becoming a Frontend Web Developer. But at the end of the day, nothing increases my understanding of any concept like rolling up my sleeves and attempting a project without a safety net. 
      </p>
      <p>My intention to learn Frontend Web Development began in June 2017 after three years as the IT Manager for a Dubai sports training and retail startup. I am proud of how far I've come in a short time but I still have a lot to learn. Of course, this is web development so I will <em>always</em> have a lot to learn!</p>
    </section>
    <h2>Technology I'm Learning</h2>
    <section className={style.experience}>
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
      <Experience 
        logo={Pug}
        tool="Pug"
        level="5"
      />
      <Experience 
        logo={SASS}
        tool="SASS"
        level="7"
      />
    </section>
    <h2>Projects</h2>
    <section className={style.projects}>
      <Project 
        name="michaelmanges.com"
        url="https://michaelmanges.netlify.com"
        logos={[JS, ReactLogo, SASS, ES6, Gatsby, CSS3, GraphQLLogo, GraphCMS, JAM, Photoshop, CSSGrid, NPM]}
        desc="My professional website and blog."
      />
      <Project 
        name="Recipe Box"
        url="https://github.com/mkmanges/recipe-box"
        logos={[JS, NodeJS, ES6, Express, Pug, NPM, CSS3, SASS, Webpack, Mongo, HTMLLogo]}
        desc="A personal project I made for my wife to store and search for recipes."
      />
      <Project 
        name="Rock Paper Scissors"
        url="https://mkmanges.github.io/rock-paper-scissors/"
        logos={[JS, Vue, NPM, HTMLLogo, SASS, CSS3]}
        desc="Personal project to learn Vue.js modules."
      />
      <Project 
        name="Wikipedia Viewer"
        url="https://mkmanges.github.io/wikipedia-viewer/"
        logos={[JS, HTMLLogo, ES6, NPM, SASS, CSS3]}
        desc="A FreeCodeCamp JavaScript API project."
      />
      <Project 
        name="Chuck Norris Quote Machine"
        url="https://mkmanges.github.io/chuck-norris-facts/"
        logos={[JS, HTMLLogo, ES6, NPM, CSS3]}
        desc="A FreeCodeCamp JavaScript API project."
      />
    </section>
  </div>
)

export default Webdev