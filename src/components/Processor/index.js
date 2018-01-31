import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Processor extends React.Component {
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
          className={style.processor__header}
          title="Open for details"
        >
          University Financial Aid Processor <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            This is a difficult job to discuss because my biggest takeaways are negative and cynical. One positive was my co-workers. I really enjoyed the people I worked with.  
          </p>
          <p>
            I held two positions at this private <em>for-profit</em> university. At the time, we were pushing the boundries of online education and most of our students were spread across the U.S. I started as a financial aid advisor connecting with students over the phone. After a short period of time, I was promoted to financial aid processor. I processed all the FAFSA finicial aid including processing and dispersing federal and private student loans. I was also a liaison between the university financial aid office and the accounting office. 
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>For-profit and education should NOT mix. It's impossible to hold students to a high standard when they are viewed as customers.</li>
            <li>Crap work in large quantities gets rewarded.</li>
            <li>The people who find that crap work and fix it are not rewarded. Their numbers are too low.</li>
            <li>Companies often say one thing but mean another.</li>
            <li>Cubicles suck.</li>
            <li>Most people in a certain region of the U.S. do not say 'goodbye' when a phone conversation is over. They just hang up. It's nothing personal--that's just how they roll.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Processor