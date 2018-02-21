import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class DevEd extends React.Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <h4 
          onClick={ () => this.handleClick() }
          className={style.banker__header}
          title="Open for details"
        >
          Frontend Development Education <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
          My learning approach has been simple. Stay focused. It's really easy to get distracted by the next new, shiny thing in web development, especially when I run into a difficult challenge. I have refused to let myself get distracted to avoid hard challenges. Instead, I force myself to stay on topic until the challenge has been overcome. At times this approach has caused much weeping and gnashing of teeth but it has paid great dividends. <em>I'm looking at you, JavaScript.</em>
          </p>
          <blockquote>
            <p>The only true wise man is a man who knows that he knows nothing.</p>
            <p>- Socrates</p>
          </blockquote>
          <p>
          At times I must be really wise because front end development makes me feel like I know nothing. But then there are times when I overcome yet another obstacle and I think to myself, <em>maybe I can do this</em>.
          </p>
          <br/>
          <p><strong>My Learning Path</strong></p>
          <p>
            I didn't begin studying as a total <em>noob</em>. Back in 2013 I managed to hand-code a photography portfolio site. It was a single page responsive site that was all of 3 files: 1 HTML file, 1 CSS file, and 1 JavaScript file. I was very proud of that site; for two years it was probably my best photography saleman. But that was several years ago...
          </p>
          <p>
            I began where so many begin. FreeCodeCamp. Codecademy. Udacity. I followed along with the training videos and did the projects. I found them all useful for introducing a foundation of coding knowledge. When my family went home last summer, I stayed behind for a month to focus on the JavaScript section in FreeCodeCamp. That was a rough month. I was away from my family for the first time and I was struggling through arrays, objects, and functions. But it was time well spent.
          </p>
          <p>
            I began to notice a problem with this approach to learning. When following along with a video or tutorial I was able to understand what was happening. But when I tried to build something on my own, I was lost. I could see that I needed to get away from watching other people code and start struggling through my own projects, regardless of their triviality. For example, to better understand Vue I created a <em>Rock Paper Scissors</em> game using Vuex for state management. At the time I didn't realize that this was a really common thing to build. No matter. I had to refer to the documentation a lot but in the end my understanding had grown by leaps and bounds. To learn Node.js and Express I built the first version of a <em>Recipe Box</em> app for Kelly. Again, my understanding took off. It's been fun to look back and see how far I've come.
          </p>
          <br/>
          <p><strong>My Excellent Skills</strong></p>
          <p>
            HTML5, CSS3, FLEXBOX
          </p>
          <p><strong>My Fluent Skills</strong></p>
          <p>
            JAVASCRIPT (ES6), REACT, VUE, JAMSTACK, WEBPACK, EXPRESS, SASS, CSS GRID, PUG/JADE, GIT
          </p>
          <p><strong>My Novice Skills</strong></p>
          <p>
            NODE, NPM, MONGODB, GRAPHQL
          </p>
          <br/>
          <p><strong>What's Next?</strong></p>
          <p>
            The more I learn, more I see that I have barely scratched the frontend development surface. I will continue to build new projects, read documentation, and experiment. At this point, I think that a job as a frontend developer would really fuel my learning and take my knowledge to the next level. 
          </p>
          <br/>
          <p><strong>Things I Plan To Learn</strong></p>
          <p>
            <ul>
              <li>GraphQL</li>
              <li>CSS Animations</li>
              <li>Databases</li>
              <li>Algolia Search</li>
              <li>SVG Images</li>
            </ul>
          </p>
        </ToggleDisplay>
      </div>
    )
  }
}

export default DevEd