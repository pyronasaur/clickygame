import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friendList: friends
  };

  doTheShuffle = (someArray) => {
    var shuffled = someArray.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    console.log(shuffled);
    return shuffled;
  };

  handleFriendClick = () => {
    //event.preventDefault();
    let friendArray = this.doTheShuffle(this.state.friendList);

    this.setState({
      friendList: friendArray
    });
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friendList.map((friend) => {
          return (
            <FriendCard
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              handleClick={this.handleFriendClick}
              key={friend.id}
              id={friend.id}
            />
          )
        })}
        {/* <FriendCard
          name={friends[0].name}
          image={friends[0].image}
          occupation={friends[0].occupation}
          location={friends[0].location}
        />
        <FriendCard
          name={friends[1].name}
          image={friends[1].image}
          occupation={friends[1].occupation}
          location={friends[1].location}
        />
        <FriendCard
          name={friends[2].name}
          image={friends[2].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        /> */}
      </Wrapper>
    );
  }
}

export default App;
