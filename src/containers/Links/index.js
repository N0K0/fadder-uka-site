import React from 'react'
import '../../styles/styles.scss'
import 'bootstrap'

class Links extends React.Component {
  render() {
    return (
       <div className={"container-fluid"}>
         <div className={"container link-area link-card"}>
          <h1>Kjekt å vite</h1>
          <h3>Facebook:</h3>
          <a href="https://www.facebook.com/groups/545443012163643/?ref=br_rs">Ifi-studenter</a>
          <br />
          <a href="https://www.facebook.com/groups/1081179195275216/?ref=br_rs">Ifi-studenter off-topic</a>
          <br />
          <a href="https://www.facebook.com/groups/433698650002908/?ref=br_rs">Ifi-memes</a>
         </div>
          <div className={"container link-card"}>
          <h3>Foreninger på Ifi:</h3>
          <a href="http://www.mn.uio.no/ifi/livet-rundt-studiene/organisasjoner/">Oversikt</a>
         </div>
          <div className={"container link-card"}>
          <h3>Matsteder i nærheten</h3>
          <p>Syntes du mat fra SiO kantinene blir litt dyrt? Frykt ikke. Her er en liten liste over butikker og andre matsteder i nærheten av OJD.</p>
          <p><a href="https://goo.gl/maps/EfFNW9vSCzq">Dana</a> er et lite tyrkisk bakeri som ligger under Forksningsparken T-bane. De servere alt fra kebab og køfter til børek og calzone. Kanskje der den beste børeken i Oslo lages.</p>
          <p><a href="https://goo.gl/maps/diJEjJ7wrt42">Kiwi Trikkesløyfa</a> er en liten kiwi ikke så langt unna trikken. Ta første trikken mot byen og gå av på John Collets plass.</p>
          <p><a href="https://goo.gl/maps/eHu15FR6fGk">Bunnpris</a> på blinderen er en liten butikk med en rimlig salatbar og et lite utvalg av varm mat. Tar ikke så lang tid å gå fra OJD.</p>
          <p><a href="https://goo.gl/maps/P6ftg7kmDkq">McDonalds</a> ved Gaustad serverer alles elskede junkfood. Gå mot Sogn studentby og <b>*baam*</b> så er du der.</p>
         </div>
         <div className={"container link-card"}>
          <h3>Diverse lenker</h3>
          <p><a href="http://ifi.uio.no">Ifi</a> sine sider</p>
          <p><a href="http://ojdmap.ifi.uio.no/">Kart</a> over OJD. Er interaktivt og viser etasjer og rom</p>
          <p><a href="http://ifi-uio.slack.com">Slack</a>. Er en felles kommunikasjonsplatform for studenter ved Ifi.</p>
          <p><a href="">Laptophjelpen</a>. Her kan du få hjelp med å sette opp laptopen din.</p>
         </div>
         <div className={"container link-card"}>
          <h3>Snapchat</h3>
           <img className={"img-fluid"} src={require('../../static/images/snapcode.png')}/>
         </div>
       </div>
    );
  }
}

export default Links
