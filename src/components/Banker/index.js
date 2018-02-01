import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Banker extends React.Component {
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
          Personal Banker <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            This job sounds better than it actually was. I was a salesman and my product was debt. The bank made a ton of money from credit cards and home equity loans, therefore, everyone who walked through the door should leave with a shiny new credit card and/or a new line of credit. To use the old cliché, I felt like a slimy used car salesman. For what it's worth, I was the top banker in my branch.
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>When it comes to their money, people are <em>very</em> serious.</li>
            <li>It's common for people to be upset when they go the bank. This gave me many opportunities to improve my people skills, especially defusing tense situations. 'What would you like me to do for you' is one of the most invaluable customer service techniques I've learned. Staying calm is key. Don't take what the customer says personally. My job is to help them.</li>
            <li>People are suspicious of banks.</li>
            <li>Selling does not have to be high pressure if your product solves a real problem.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Banker