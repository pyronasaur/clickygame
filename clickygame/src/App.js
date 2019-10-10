import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Jumbo from "./components/Jumbo";
import friends from "./friends.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

class App extends Component {

  state = {
    friendList: friends,
    message: "",
    score: 0,
    topScore: 0,
    idTracker: []
  };

  

  doTheShuffle = (someArray) => {
    var shuffled = someArray.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    //console.log(shuffled);
    return shuffled;
  };

  isDupe = (id, arrayOfIds) => {
    let isDupe = false;
    arrayOfIds.forEach((item) => {
      if(item===id) {
        isDupe = true;
      }
    })
    return isDupe;
  }

  handleFriendClick = (id) => {
    //event.preventDefault();
    let friendArray = this.doTheShuffle(this.state.friendList);
    let nuscore;
    let top;
    let msg;
    let idArray = this.state.idTracker;

    if(!this.isDupe(id, idArray)) {
      idArray.push(id);
      nuscore = this.state.score + 1;
      top = (nuscore >= this.state.topScore ? nuscore : this.state.topScore);
      msg = "You guessed correctly!";      
    }else {
      idArray = [];
      msg = "You guessed incorrectly!";
      nuscore = 0;
      top = this.state.topScore;
    }

    this.setState({
      friendList: friendArray,
      score: nuscore,
      topScore: top,
      message: msg,
      idTracker: idArray
    })
  };

  render() {
    return (
      <div>
        <Header 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbo />
        <Wrapper>
          {this.state.friendList.map((friend) => {
            return (
              <FriendCard
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
                handleClick={() => this.handleFriendClick(friend.id)}
                key={friend.id}
                id={friend.id}
              />
            )
          })}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
