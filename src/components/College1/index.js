import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class College1 extends React.Component {
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
          College Round One <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            I entered college out of high school and majored in pre-physical therapy at Indiana University South Bend. For the first time in my life, I truly applied myself to school and the results made me regret my previous laissez-faire attitude toward my education. After two years of chemistry, physics, and human anatomy/physiology at IUSB, I had a 3.74 GPA. Not bad for someone who was a 'dumb jock' in high school.
          </p>
          <p>
            For my third year of college, I transferred to IUPUI (Indiana University-Purdue University at Indianapolis) and lived on my own for the first time. During this time I applied for one of the 32 open seats in the IUPUI Physical Therapy B.S. degree program. If my info was correct, I was one of over 400 applicants. Long story short, after two attempts the closest I got to making it into the program was the 9th alternate. That meant I needed 9 out 32 people to decline their offer to the school. That did not happen.
          </p>
          <p><strong>What I Did Wrong</strong></p>
          <p>
            At this point, I wish I knew then what I know now. I assumed that IUPUI was the only viable school available to me. My resources were limited and they were the only public university in Indiana offering a degree in physical therapy. My other options were private in-state universities or pay out-of-state tuition and I just assumed that I could not afford the higher tuition. Like so many in their early 20s, I did not ask for help. Why? Because I was a fool. 
          </p>
          <p>
            Studying physical therapy at IUPUI had been my <em>Plan A</em> since early high school. Unfortunately, I did not have a Plan B so I improvised with another foolish decision. I partied, my grades plummeted, and I withdrew from school embarrassed and disappointed with myself.
          </p>
        </ToggleDisplay>
      </div>
    )
  }
}

export default College1