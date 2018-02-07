import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Hiking extends React.Component {
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
          Hiking <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            One of the reasons I moved to Arizona from the midwest was the climate. I love to be outdoors and hiking a mountain trail might be one of my all time favorite activites. My wife and I really got to know each other while hiking. It's great exercise and it takes me away from the stress of life. My favorite trail is the Echo Canyon Trailhead on Camelback Mountain in Phoenix, Arizona.
          </p>         
        </ToggleDisplay>
      </div>
    )
  }
}

export default Hiking