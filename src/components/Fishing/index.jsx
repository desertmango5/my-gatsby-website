import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Fishing extends React.Component {
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
          Fishing <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Again, this goes back to my childhood and now Kelly and our boys are also <em>hooked</em> on fishing. We aren't hardcore anglers. When visiting my parents, we generally enjoy taking a couple boats out on a calm lake to bobber fish for bluegills. Our favorite lake is hidden gem called Little Turkey in northeast Indiana.
          </p>         
        </ToggleDisplay>
      </div>
    )
  }
}

export default Fishing