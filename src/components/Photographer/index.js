import React from 'react' 
import style from './index.module.scss'
import ToggleDisplay from 'react-toggle-display'

class Photographer extends React.Component {
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
          className={style.photography__header}
          title="Open for details"
        >
          Professional Photographer <ToggleDisplay 
            if={!this.state.show} 
            className={style.plus}>&#43;</ToggleDisplay>
            <ToggleDisplay 
            if={this.state.show} 
            className={style.plus}>&#45;</ToggleDisplay>
        </h4>
        <ToggleDisplay show={this.state.show} className={style.section}>
          <p>
            Since 2011 I have been a professional photographer here in Al Ain, UAE. My paid work has primarily been individual and family desert portraits but I also have been hired by several businesses. If you have flown Air Berlin anytime in the last few years you might have seen my Abu Dhabi photos in their in-flight magazine, including the cover. 
          </p>
          <p><strong>What I Learned</strong></p>
          <ul>
            <li>Self-critique is extremely difficult but necessary.</li>
            <li>Do not be afraid to put your work out in public.</li>
            <li>High quality sells itself.</li>
            <li>The difference between a professional and an amateur is the professional does not let anyone see their crap work.</li>
            <li>It takes more than a camera to be photographer. I spent <em>years</em> studying photography. My education continues and always will.</li>
            <li>I learned how to learn.</li>
            <li>There is not a magic setting on your camera that will make your photos awesome.</li>
            <li>You never know what another person is going to like. Several times a client has loved a photo that I was hesitant to even show them and other times they hardly notice my favorite photo from their shoot. Therefore, let people make their own choices.</li>
            <li>Always keep your word.</li>
          </ul>
        </ToggleDisplay>
      </div>
    )
  }
}

export default Photographer