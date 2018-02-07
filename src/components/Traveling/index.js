import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Traveling extends React.Component {
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
          Traveling <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            I've had a few traveling goals since I was younger:
          </p>
          <ol>
            <li>Visit all 50 U.S. states</li>
            <li>Visit all 7 continents</li>
          </ol>
          <p>
            So far I've been to 43 states but I'm a little behind schedule on the continents. I've only been to North American, Asia, and Europe. My favorite cities visited so far (in no particular order):
          </p>
          <ul>
            <li>Seoul, South Korea</li>
            <li>Paris, France</li>
            <li>London, England</li>
            <li>Bangkok, Thailand</li>
            <li>Singapore</li>
            <li>Dubai, United Arab Emirates</li>
            <li>San Diego, CA, USA</li>
            <li>Chicago, IL, USA</li>
          </ul>        
        </ToggleDisplay>
      </div>
    )
  }
}

export default Traveling