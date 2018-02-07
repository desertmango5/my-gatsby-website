import React from 'react' 
import style from '../styles/about.module.scss'
import ToggleDisplay from 'react-toggle-display'
import CulturalLessons from '../components/CulturalLessons/index';
import ParentingLessons from '../components/ParentingLessons/index';
import Adulting from '../components/Adulting'
import Startup from '../components/Startup'
import Photographer from '../components/Photographer'
import Retail from '../components/Retail'
import Banker from '../components/Banker'
import Processor from '../components/Processor'
import Dicing from '../components/Dicing'
import Tech from '../components/Tech'
import Driver from '../components/Driver'
import College1 from '../components/College1'
import Overpriced from '../components/Overpriced'
import College2 from '../components/College2'
import DevEd from '../components/DevEd'
import Hiking from '../components/Hiking/index';
import Camping from '../components/Camping/index';
import Fishing from '../components/Fishing/index';
import RockHounding from '../components/RockHounding/index';
import Traveling from '../components/Traveling/index';

const About = () => (
  <div className={style.body}>
    <section className={style.short}>
      <h2>The Short Story</h2>
      <p>
        I learned an important lesson about being genuine when my wife and I were just getting to know each other. We found ourselves on an overnight backpacking trip with mutual friends in the Superstition Mountains in Arizona. If you've ever been backpacking, you know that your hair gets messed up, your clothes are dirty, and, if you're like me, you might develop an odd smell. On that trip the normal dating pretenses were blown away and she saw a much closer version of the real me. For 30 miles, Kelly and I hiked and talked without the pretenses of looking and acting like the best versions of ourselves. The results? We were married in October 2001 and I feel like I married the same person I dated because we had been real with each other from the beginning.  
      </p>
      <p>
        If it's true that we are all our own brand, I want my brand to the real version of myself. Hair messed up. Clothes dirty. Me being a little smelly. In one word: <em>real</em> 
      </p>
    </section>
    <section className={style.long}>
      <h2>TL;DR</h2>
      <p>
        I often hear myself telling my three sons that they need to learn from their mistakes. That is good advice for me, too. There are so many times I would love to go back in time so I could have a redo. Of course, I cannot but I can prevent history from repeating itself by learning from my mistakes. Below I'm going to share some of what my history has taught me. 
      </p>
    </section>
    <section className={style.today}>
      <h3>Today</h3>
      <p>
        It seems like friends and family from home assume that my life is one adventure after another. After all, since 2009 my family and I have lived overseas in the United Arab Emirates. Living overseas has been fascinating for all the obvious reasons. We've been able to travel to London, Paris, Singapore, Seoul, Thailand, Oman, and Kuwait. Honestly, though, life is pretty routine. My wife is a kindergarten teacher for the Abu Dhabi government. Our three teenage sons are home schooled and take tennis lessons twice a week. Since June 2017, after ending a three year stint with a Dubai startup, I have been pinned to my laptop learning frontend web development. It's been 9 years since we moved to the Middle East and after this school year, we intend to complete our time here. The Arabic word is <em>khalas</em>.
      </p>
      <CulturalLessons />
      <hr/>      
      <ParentingLessons />
      <hr/>
      <Adulting />
      <hr/>
    </section>
    <section className={style.work}>
      <h3>Work Experiences</h3>
      <p>
        This is not meant to be a resumé but rather a glimse into my experiences and some of my takeaways. My hope is that in sharing this you will feel like you know me. Some of my lessons are negative in nature, so I might withhold some company names. My intention is to share what I've learned, not malign former employers. I am thankful for all these opportunities.
      </p>
      <Startup />
      <hr/>
      <Photographer />
      <hr/>
      <Retail />        
      <hr/>
      <Banker />
      <hr/>
      <Processor />
      <hr/>
      <Dicing />
      <hr/>
      <Tech />
      <hr/>
      <Driver />
      <hr/>
    </section>
    <section className={style.education}>
      <h3>Education</h3>
      <p>
        I want to be upfront regarding my college education... I spent several years in college but left <em>twice</em> without earning a Bachelor's degree. 
      </p>
      <College1 />
      <hr/>
      <Overpriced />
      <hr/>
      <College2 />
      <hr/>
      <DevEd />
      <hr/>
    </section>
    <section className={style.fun}>
      <h3>For Fun</h3>
      <p>
        I think I might like the outdoors 🏕️ 🌳 ⛰️ 🎣 
      </p>
      <Hiking />
      <hr/>
      <Camping />
      <hr/>
      <Fishing />
      <hr/>
      <RockHounding />
      <hr/>
      <Traveling />
      <hr/>
    </section>
  </div>
)

export default About
