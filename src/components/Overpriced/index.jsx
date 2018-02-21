import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Overpriced extends React.Component {
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
          Overpriced Associates Degree <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            I moved to Arizona in 1999 during what turned out to be a tech bubble. Investors were lining up to throw money at companies that generated zero revenue and those companies were hiring anyone with a pulse and a little computer knowledge. I had the former and decided it might be a good idea to get some of the latter, so I enrolled in an overpriced school offering an Associates degree in IT and Computer Networking in only 15 months.
          </p>
          <p>
            I did finish this program while working a full-time overnight shift. It was difficult but I am proud of my effort. However, if I had it to do over, I would have put those resources into finishing my B.S. degree at Arizona State University.
          </p>
          <p>
            By the way, that tech bubble burst about 4 months before I finished the program. I refuse to say that education is ever a waste of time but that program cost a <em>lot</em> of money and the only jobs offered to me paid about 30% less than I was making at the job I already had. 
          </p>          
        </ToggleDisplay>
      </div>
    )
  }
}

export default Overpriced