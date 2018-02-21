import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class College2 extends React.Component {
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
          College Round Two <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Shortly after Kelly and I married, I enrolled in the computer science program at Arizona State University. Looking back I realize that enrolling in CS was probably a mistake. I literally knew nothing about programming. My introduction to programming was Java and it kicked my butt. This was frustrating because I was told Java was a great first language since it's so easy to learn. It was not easy for me. I was able to keep up for the first half of the semester but after that, no matter how hard I tried, it was moving too fast. I was lost and I assumed I just didn't have what it took to be a developer. More than a decade passed before I gave coding another chance.
          </p>
          <p>
            At this point, I just wanted a degree and with my previous physical therapy credits, biology seemed to be the path of least resistance. So after a semester of CS, I changed my major to biology. During this time, Kelly became pregnant with our first child. The timeline would be tough but we thought after he came Kelly would teach one more year and I would be dad by day and full-time student by night. Our son had other ideas.
          </p>
          <p><strong>Life Happens</strong></p>
          <p>
            While she was on summer break, Kelly went into preterm labor. Less than 24 hours later, we were parents to a very little boy who was now in the Neonatal Intensive Care Unit. We were scared. I withdrew from my summer class to be with Kelly and our son. 
          </p>
          <p>
            Our son came home with a mostly clean bill of health after spending his first 20 days on earth in the hospital. Today he is healthy and you would never know by looking at him that he had a rough start. But the experience shook Kelly and me. She wanted to be done as a teacher so she could be full-time Mom. While teachers don't make a ton of money, she had been teaching for 14 years and we were used to her salary. 
          </p>
          <p>
            I found an entry level management job with a company that rewarded hard work and results. If I agreed to work the overnight shift, it meant a higher hourly rate and monthly bonuses. It also meant working almost 50 hours a week. I tried to continue with school while being a new dad and working nights but it was proving to be too much. I withdrew from my classes. 
          </p>
          <p><strong>I Would Like to Finish My Degree But...</strong></p>
          <p>
            It's been several years since I left school. In that time, I am blown away by the rise in tuition rates. Even though I would love to return to school, I feel like I have been priced out of the market. As of this writing, undergraduate <em>online</em> classes at Arizona State University cost between $510 - $718 per credit hour. Is it any wonder why so many graduates are swimming in student loan debt?
          </p>
        </ToggleDisplay>
      </div>
    )
  }
}

export default College2