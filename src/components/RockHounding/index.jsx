import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class RockHounding extends React.Component {
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
          Rock Hounding <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            I picked up rock hounding after moving to Arizona. It's basically like going on a treasure hunt in beautiful places in search for specimens of amethyst, jade, agate, jasper, petrified wood, tiger's eye, etc.
          </p>         
        </ToggleDisplay>
      </div>
    )
  }
}

export default RockHounding