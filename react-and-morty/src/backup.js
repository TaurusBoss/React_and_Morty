import React from 'react';
import ReactCardFlip from 'react-card-flip';

export class OurCard extends React.Component {
    
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    

    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className='card card-container' onClick={this.handleClick}>
            <img className="card-image" src={this.props.data.image} alt="photo of person" />
            <p>Name: {this.props.data.name}</p>
            <p>Species: {this.props.data.species}</p> 
        </div>
        <div className='card card-container' onClick={this.handleClick}>
        <img className="card-image" src="MeeseeksHQ.webp" alt="photo of person" />
            <p>Status: {this.props.data.status}</p>
            <p>Gender: {this.props.data.gender}</p>
            <p>Location: {this.props.data.location.name}</p>
        </div>
        </ReactCardFlip>
      )
    }
  }
  

function TextContent(input){
    if(this.state.isFlipped){
        return <div>
            <p>Status: {input.status}</p>
            <p>Gender: {input.gender}</p>
            <p>Location: {input.location.name}</p>
        </div>
    } else if(this.state.isFlipped == false){
        <div>
            <p>Name: {input.name}</p>
            <p>Species: {input.species}</p>
        </div>
    } else {
        console.log("itt bizony hiba történt");
    }
}

