import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Dicing extends React.Component {
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
          className={style.dicing__header}
          title="Open for details"
        >
          Dicing Saw Operator <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            When I began this job, the company was small and privately owned. I worked a full-time overnight shift while attending school full-time during the day. We made ultrasonic transducers--those devices you think of when a woman has an ultrasound of her unborn baby. In fact, the company founder had invented a production technique that at the time made our product cutting edge. It was the first 3-D ultrasound. 
          </p>
          <p>
            After almost a year, our company merged with GE Medical Systems. Until this point, the atmosphere was relaxed and I knew everyone. It felt like a family. After the merge, that changed. Everything became driven by numbers. 
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>When I started, I saw this position as temporary. When I finished school, I would be leaving. Since I did not intend to stay long-term, it did not seem right to me at the time to take any promotions. So right up front I indicated this. Now I realize this was a mistake and it cost me opportunites. I should never predetermine my future.</li>
            <li>We had a diverse team and no one really gave it much thought. Everyone worked at getting along and everyone did their job well. It was a great group of people to work with.</li>
            <li>Our team was much more productive when we were a private company. The manager was hands-off but there when we needed him. He trusted us to be adults and to do our job. </li>
            <li>If given the choice to work for a small, private company or a large corporation, I would most likely choose the small company.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Dicing