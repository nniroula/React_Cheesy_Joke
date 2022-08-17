import React from "react";
// import React, { Component }  from "react";
import "./Joke.css";

function Joke({ vote, votes, text, id }) {
  const upVote = () => vote(id, +1);
  const downVote = () => vote(id, -1);

// class Joke extends Component {
//     constructor(props) {
//         super(props);
//         this.upVote = this.upVote.bind(this); // bind the object(instance) of the class
//         this.downVote = this.downVote.bind(this);
//         // this.toggleLock = this.toggleLock.bind(this);
//     }

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
