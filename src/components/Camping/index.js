import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Camping extends React.Component {
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
          Camping <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            When I was a kid most of our family vacations involved camping. Often it was close to home but a few times we traveled as far as the Great Smoky Mountains. My 8th birthday was spent camping in the Smokies.
          </p>
          <p>
            Camping is a little different now. In Arizona, there is a lot of public land and you are free to use it for camping. In the UAE we are able to pitch a tent just about anywhere along the Indian Ocean beach.
          </p>         
        </ToggleDisplay>
      </div>
    )
  }
}

export default Camping