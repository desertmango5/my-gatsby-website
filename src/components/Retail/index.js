import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Retail extends React.Component {
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
          className={style.retail__header}
          title="Open for details"
        >
          Retail Management <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            I spent a few years in management with a fast-paced, high volume company that rewarded hard work and results. This company is different from any other I worked for. For instance, if they implemented an idea that sounded good on paper but fell flat in practice, rather than blame the employees for failing to carry out their vision, they acknowledged that it was not working and scrapped the idea. I respected them so much for this. 
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>Admitting that your idea is not working is not a sign of weakness. Throw that crazy idea out there but if it's not working, just own it and move on. Your employees will love you for it.</li>
            <li>'Never Be Satisfied' is a great company motto. We can always do better. <em>However</em>, that motto should not prevent supervisors from giving positive feedback. Eventually, <em>never be satisfied</em> begins to feel like <em>never good enough</em>.</li>
            <li>Good Results + Relationships > Great Results alone. When it came to results, I stood out from the crowd. In fact, I was one of the managers brought in to turn around struggling stores. But my rapid managerial rise only went so far. My supervisor confided that my results were stellar but that my people skills needed work. Even though at the time the idea had not yet gained mainstream traction, he was telling me that I need to improve my Emotional Intelligence. It was difficult to hear but he was right. </li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Retail