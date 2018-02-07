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
            Frontend Development seems like an odd job for several reasons. When I do a search for degrees in web development, I get a few hits from schools that tend to be <em>for-profit</em>. If you read above about my experience as a university financial aid processor, you'll see that I do not think for-profit and education should mix. Then, look at online learning resources like FreeCodeCamp and you'll see a large number of people with computer science degrees who are there to learn web development. While a small sample, it seems like computer science is not a direct route to becoming a Frontend Developer. So how does one become a Frontend Web Developer??
          </p>
          <p><strong>My Learning Path</strong></p>
          <p>

          </p>
        </ToggleDisplay>
      </div>
    )
  }
}

export default DevEd