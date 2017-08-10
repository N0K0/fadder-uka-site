import React from 'react'
import '../../styles/styles.scss'
import 'bootstrap'
import BoardMemberCard from '../../components/BoardMemberCard'

class Board extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1 className="d-block bg-faded">
            Styret
          </h1>
          <p>
            Lurer du på hvem som er bakmennene bak denne fadderuka?
          </p>

          <div className="container-fluid">
            <div className="home-text-area">
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-1.jpeg")} name="Emilie Mæhlum" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-2.jpeg")} name="Svein Manum" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-3.jpeg")} name="Kangeyan Illavalagan" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-1.jpeg")} name="Tonje Røyeng" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-2.jpeg")} name="Victoria Hyun Oh" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-3.jpeg")} name="Lilly Arstad Helmersen" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-1.jpeg")} name="Zahra Ghassem Yndestad" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-2.jpeg")} name="Kudakwashe Kidwell Chambwe" title="Styremedlem"/>
              <BoardMemberCard imageLink={require("../../static/images/faces/portrait-3.jpeg")} name="Sarujanthan Subaschandran" title="Styremedlem"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
