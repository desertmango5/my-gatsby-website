import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class ParentingLessons extends React.Component {
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
          Parenting Lessons <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>
            Kelly and I have three sons. As of this writing in early 2018, our oldest is 14 years old and we have 12 year old fraternal twins. All three were born prematurely and required NICU hospital stays. The twins spent nearly the first two months of their lives in the hospital and about two years eating through feeding tubes. Thankfully, they are completely healthy now. Kelly was amazing during those first couple years; they would not be doing as well as they are without her tireless effort. I'm certain of that. 
          </p>
          <p>
            When it comes to areas in my life full of mistakes, parenting is probably at the top of that list. But I try to learn from my mistakes. For example:
          </p>
          <ol>
            <li>Being a parent exposes your weaknesses. Boys not showing respect to each other? I need to better model what respect looks like.</li>
            <li>Kids (and people in general) don't care about what you say. They care about what you do.</li>
            <li>Kids (and people in general) respond better to calm discussion than to yelling. Who'd of thunk it?</li>
            <li>When you are wrong, look your kids in the eyes and humbly own it.</li>
            <li>Respect your kids enough to talk <strong><em>to</em></strong> them rather than talk <strong><em>at</em></strong> them.</li>
          </ol>          
        </ToggleDisplay>
      </div>
    )
  }
}

export default ParentingLessons