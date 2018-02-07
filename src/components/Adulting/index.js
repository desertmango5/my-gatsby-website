import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Adulting extends React.Component {
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
          Adulting <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Recently, my Grandpa passed away. He was born in 1924 and was 94 years old. I find myself thinking about all that changes he witnessed during his life. Radio. TV. World War II. Atomic/nuclear bombs. Internet. Mobile phones. Being able to talk with and see his great-grandsons half a world away on a computer screen. When I was a kid he told me that thought it would be cool to see the year 2000. Simply amazing.
          </p>
          <p>
            There is one more event my Grandpa witness and I'm guessing he probably was not impressed: the idea of 'adulting'. To him, growing up and being an adult was not optional; it's what a person did. I know, I sound like an old curmudgeon, <em>I am the Decrepit Webdev</em>, after all. I see the adulting jokes and I even laugh at them. I get that adulting is hard. I've been doing it for a bit. But just because it's hard should not make it optional. In fact, when I was a kid I couldn't wait to be an adult. Is it hard? Yes. Do I want to be a kid again so everything is done for me? Hell, no!!! I take pride in being able to adult. I don't see it as optional.
          </p>           
        </ToggleDisplay>
      </div>
    )
  }
}

export default Adulting