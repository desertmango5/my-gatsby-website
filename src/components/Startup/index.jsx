import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Startup extends React.Component {
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
          className={style.startup__header}
        >
          IT Manager - Dubai Startup <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show}>
          <p>For three years I had the title of IT Manager. But that was a loose title; I wore many hats.</p>
          <ul>
            <li>Graphic Designer</li>
            <li>eCommerce Manager</li>
            <li>Sports Photographer</li>
            <li>Product Photographer</li>
            <li>Marketing</li>
            <li>Webmaster (for lack of a better term)</li>
            <li>The Tech Guy</li>
          </ul>
          <p>Basically, I was the person handling anything technical and/or creative. Much of what I did was learned on the fly because someone had to do it. As I've heard is said in Japan when a job needs to be done, 'Why not me?'</p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>Communication is HUGE and bad communication destroys trust and morale. Several times I was ready to cut ties with this operation and the #1 reason was lack of communication. People feel valued when we make the effort to communicate with them!</li>
            <li>Be wise. Do not work without a contract. I wanted to trust in good intentions but the so-called promise of future pay is not a salary. Protect yourself and get the terms in writing.</li>
            <li>I picked up several new skills: basic design principles, Photoshop, Illustrator, product & sports photography, Shopify e-commerce platform, HTML/CSS, email marketing, working remotely, and how to do business with people from a variety of cultural backgrounds.</li>
            <li>Negotation is a valuable skill. If I don't like the initial offer, make a counter offer. Be creative.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Startup