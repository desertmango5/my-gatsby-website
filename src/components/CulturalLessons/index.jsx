import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class CulturalLessons extends React.Component {
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
          Cultural Lessons <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Living in another culture teaches you a lot about yourself. For instance, did you know that outside of western countries people do <em>not</em> look both ways before stepping into traffic? They just go and then are surprised when they look up to see your car coming at them. That, my friend, is cultural influence. I look both ways when crossing the street for one reason: I happened to be born in the United States. I was influenced by my culture and didn't even know it until I was outside that cultural box. My sense of personal space, considering how my actions will affect others, and saying "thank you" are programmed into me by my culture. But here's the take away. One culture is not <em>better</em> than another. Cultures are <em>different</em>, not better. That was my culture shock moment many years ago. Once I started viewing my culture's way as different rather than better, I started to see that different is ok. This has made it easier to extend a little grace to people who might step on my cultural toes. I'm probably stepping on their toes, too!
          </p>          
        </ToggleDisplay>
      </div>
    )
  }
}

export default CulturalLessons