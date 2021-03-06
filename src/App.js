import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron"
import matches from "./Cards.json";
//import all necessary dependencies


let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on all the images, but don't click on any of them more than once! Try and click 12 in a row! ";

class App extends Component {
    
    // Setting this.state.matches to the matches json array, sets intial state of "let" variables, use let because they are subject to change
    state = {
        matches,
        correctGuesses,
        bestScore,
        clickMessage
    };

    setClicked = (id) => {

        // Make a copy of the state matches array to work with
        const matches = this.state.matches;

        // Filter for the clicked match
        const clickedMatch = matches.filter(match => match.id === id);

        // If the image's clicked value is already true, 
        // start the game over again
        if (clickedMatch[0].clicked){

            console.log ("Correct Guesses: " + correctGuesses);
            console.log ("High Score: " + bestScore);

            correctGuesses = 0;
            clickMessage = "You already clicked on that. START OVER!"

            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ correctGuesses });
            this.setState({matches});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correctGuesses < 11) {

            // Set its value to true
            clickedMatch[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;
            //continuous message
            clickMessage = "Nice! Keep going!";

            if (correctGuesses > bestScore){
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});
            this.setState({clickMessage});
        } else {

            
            clickedMatch[0].clicked = true;

            // restarts the user guess counter
            correctGuesses = 0;

           //Restart
            clickMessage = "You got ALL of them!!! Can do it again?";
            bestScore = 12;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < matches.length ; i++){
                matches[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            matches.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.matches equal to the new matches array
            this.setState({ matches });
            this.setState({correctGuesses});
            this.setState({clickMessage});

        }
    };

    render() {
        return (
            <Wrapper >
            
                <div style={{textAlign: "center", margin: -25}}>
                
                <Title ><h2>Fantasy Click Game</h2>
        
                </Title>
        
                <h2 className="scoreSummary">
                    {this.state.clickMessage}
                </h2>
                
                <h2 className="scoreSummary">
                    Correct Guesses: {this.state.correctGuesses} 
                    <br />
                    High Score: {this.state.bestScore} 
                </h2>
                
                </div>
           

              
                
            
              <div>
                {this.state.matches.map(match => (
                    <GameCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                
                </div>
                </Wrapper>
           
        );
    }
}

export default App;
