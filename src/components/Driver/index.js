import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Driver extends React.Component {
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
          className={style.driver__header}
          title="Open for details"
        >
          OTR Truck Driver <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            The most difficult job I've ever had? This one. I was an over-the-road truck driver. For me, that meant spending 2-4 weeks at a time sitting in a drivers seat inside a small moving box that sits 10 feet off the ground. 
          </p>
          <p>
            This job took a heavy mental toll on me. It was difficult to spend so much time alone with my thoughts. I've joked that I went crazy several times during my year+ of driving. Pardon the pun, but there was also a heavy physical toll--I got <em>really</em> fat while driving. And what would expect when you sit on your bum day after day eating fried truckstop food for every meal? 
          </p>
          <p>
            There are a few upsides to truck driving. I was able to scratch my travel itch by driving through 43 of the 50 states and Canada. And the pay was good.
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>We should have a lot more respect for truck drivers. They have a difficult and dangerous job.</li>
            <li>I need to stay physcially active when I have a sedentary job. You know, like web development.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Driver