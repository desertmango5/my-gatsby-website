import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Tech extends React.Component {
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
          className={style.tech__header}
          title="Open for details"
        >
          In-home Computer Tech <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Do you remember the electronics retailer, Circuit City? They have been defunct for over a decade and rightly so. I left the company about 4 months before they closed up shop and, to put it mildly, they were a dumpster fire. I was hired to be a <em>Firedog</em> which was their version of BestBuy's <em>Geek Squad</em>. 
          </p>
          <p>
            The manager of the computer department was a bald guy named Scott who literally could not connect his laptop to the wifi. Everyday he asked me to do it for him. One of the services we offered was in-home computer setup. That meant unpackaging all the hardware, connecting it (neatly), doing basic configurations, and installing extra software like antivirus and Microsoft Office. The package description also indicated some basic computer training once everything was up and running. Back then it took about 20 minutes just to install the drivers for an HP printer. Scott seemed to think all this should take 30 minutes. Maybe 35 if you go slow.  
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>Don't just give lip service to things like customer service and employee loyalty.</li>
            <li>I worked in the store on a Black Friday and it was one of the worst experiences of my life.  <em>Black Friday comes straight from the pits of hell</em>.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Tech