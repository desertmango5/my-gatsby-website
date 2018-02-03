import React from 'react' 
import style from '../styles/about.module.scss'
import ToggleDisplay from 'react-toggle-display'
import Startup from '../components/Startup'
import Photographer from '../components/Photographer'
import Retail from '../components/Retail'
import Banker from '../components/Banker'
import Processor from '../components/Processor'
import Dicing from '../components/Dicing'
import Tech from '../components/Tech'
import Driver from '../components/Driver'

const About = () => (
  <div className={style.body}>
    <h2>The Short Story</h2>
    <p>
      This is where I reveal my amazing life; the social media version of me. No worts. No mistakes. I have it ALL together. Gosh-darn-it-people-like-me stuff. Hmmm...
    </p>
    <p>
      I learned an important lesson about being genuine when my wife and I were just getting to know each other. We found ourselves on an overnight backpacking trip with mutual friends in the Superstition Mountains in Arizona. If you've ever been backpacking, you know that your hair gets messed up, your clothes are dirty, and, if you're like me, you might develop an odd smell. On that trip the normal dating pretenses were blown away and she saw a much closer version of the real me. For 30 miles, Kelly and I hiked and talked without the pretenses of looking and acting like the best versions of ourselves. The results? We were married in October 2001 and I feel like I married the same person I dated because we had been real with each other from the beginning.  
    </p>
    <p>
      If it's true that we are all our own brand, I want my brand to the real version of myself. Hair messed up. Clothes dirty. Me being a little smelly. In one word: <em>real</em> 
    </p>
    <h2>The TLDR Story</h2>
    <p>
      I often hear myself telling my three sons that they need to learn from their mistakes. That is good advice for me, too. There are so many times I would love to go back in time so I could have a redo. Of course, I cannot but I can prevent history from repeating itself by learning from my mistakes. Below I'm going to share some of what my history has taught me. 
    </p>
    <h3>Today</h3>
    <p>
      It seems like friends and family from home assume that my life is one adventure after another. After all, since 2009 my family and I have lived overseas in the United Arab Emirates. Living overseas has been fascinating for all the obvious reasons. We've been able to travel to London, Paris, Singapore, Seoul, Thailand, Oman, and Kuwait. Honestly, though, life is pretty routine. My wife is a kindergarten teacher for the Abu Dhabi government. Our three teenage sons are home schooled and take tennis lessons twice a week. Since June 2017, after ending a three year stint with a Dubai startup, I have been pinned to my laptop learning frontend web development. It's been 9 years since we moved to the Middle East and after this school year, we intend to complete our time here. The Arabic word is <em>khalas</em>.
    </p>
    <h4>Cultural Lessons</h4>
    <p>
      Living in another culture teaches you a lot about yourself. For instance, did you know that outside of western countries people do <em>not</em> look both ways before stepping into traffic? They just go and then are surprised when they look up to see your car coming at them. That, my friend, is cultural influence. I look both ways when crossing the street for one reason: I happened to be born in the United States. I was influenced by my culture and didn't even know it until I was outside that cultural box. My sense of personal space, considering how my actions will affect others, and saying "thank you" are programmed into me by my culture. But here's the take away. One culture is not <em>better</em> than another. Cultures are <em>different</em>, not better. That was my culture shock moment many years ago. Once I started viewing my culture's way as different rather than better, I started to see that different is ok. This has made it easier to extend a little grace to people who might step on my cultural toes. I'm probably stepping on their toes, too!
    </p>
    <h4>Parenting Lessons</h4>
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
    <h3>Adulting</h3>
    <p>
      Recently, my Grandpa passed away. He was born in 1924 and was 94 years old. I find myself thinking about all that changes he witnessed during his life. Radio. TV. World War II. Atomic/nuclear bombs. Internet. Mobile phones. Being able to talk with and see his great-grandsons half a world away on a computer screen. When I was a kid he told me that thought it would be cool to see the year 2000. Simply amazing.
    </p>
    <p>
      There is one more event my Grandpa witness and I'm guessing he probably was not impressed: the idea of 'adulting'. To him, growing up and being an adult was not optional; it's what a person did. I know, I sound like an old curmudgeon, <em>I am the Decrepit Webdev</em>, after all. I see the adulting jokes and I even laugh at them. I get that adulting is hard. I've been doing it for a bit. But just because it's hard should not make it optional. In fact, when I was a kid I couldn't wait to be an adult. Is it hard? Yes. Do I want to be a kid again so everything is done for me? Hell, no!!! I take pride in being able to adult. I don't see it as optional.
    </p>
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
    <h3>Education</h3>
    <p>
      Years ago, when I was in 9th grade my high school had a career day. I was an athlete so athletic training sounded interesting. There wasn't much interest from anyone else, so they assigned me to the physical therapy group. As a 15 year old punk, even though I knew everything I didn't know what a physical therapist did. 
    </p>
    <h3>For Fun</h3>
  </div>
)

export default About
