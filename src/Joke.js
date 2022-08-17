// NOTE: Some of the functionalities in the refactoring are used from the solution.

// import React from "react";
import React, { Component } from "react"; // for class based componet, need Component
import "./Joke.css";

// Functional component
// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

// Class based component
class Joke extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this); // bind the object(instance) of the class
        this.downVote = this.downVote.bind(this);
        this.toggleLock = this.toggleLock.bind(this); // used from the solution
    }

    upVote() {
        this.props.vote(this.props.id, +1);
    }

    downVote() {
        this.props.vote(this.props.id, -1);
    }

    // used from the solution
    toggleLock() {
        this.props.toggleLock(this.props.id);
    }
    
    //Functional rendering
    // return (
    //     <div className="Joke">
    //       <div className="Joke-votearea">
    //         <button onClick={upVote}>
    //           <i className="fas fa-thumbs-up" />
    //         </button>

    //         <button onClick={downVote}>
    //           <i className="fas fa-thumbs-down" />
    //         </button>

    //         {votes}
    //       </div>

    //       <div className="Joke-text">{text}</div>
    //     </div>
    //   );

    // Class based rendering
    render() {
        return (
            <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
                <div className="Joke-votearea">
                    <button onClick={this.upVote}>
                        <i className="fas fa-thumbs-up" />
                    </button>
                    <button onClick={this.downVote}>
                        <i className="fas fa-thumbs-down" />
                    </button>
                    <button onClick={this.toggleLock}>
                        <i className={`fas ${this.props.locked ? "fa-unlock" : "fa-lock"}`} />
                    </button>
                    {this.props.votes}
                </div>
                <div className="Joke-text">{this.props.text}</div>
            </div>
        );
    }
}

export default Joke;
