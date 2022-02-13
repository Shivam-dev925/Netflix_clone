import React from 'react'
import styled from 'styled-components'


 export const Section=styled.div`

height: 500px;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr;
width: 100wh;
border-bottom: 10px solid grey;

@media (max-width:400px){
height: 600px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
width: 100%;
.div1>h1{
    font-size: 21px;
    margin-bottom: 40px;

}
.div1>h2{
    font-size: 15px;
    height:200px;
}
.div1,.div2{
  width: 200px;
  margin-bottom: 0px;
 
  height: 200px;
}

.div2>img{
  width: 100%;
  margin: 0%;
}

}
`
function Home2Compo() {
  return (
  <>
     <Section>
      <div className="div1">
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
      </div>

      <div className="div2">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="image not found" />
      </div>

     </Section>


  </>
  )
}

export default Home2Compo