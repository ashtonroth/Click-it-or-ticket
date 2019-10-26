import React, { Component } from "react";
import actorCard from '../ActorsIcons';
import Header from '../Header';
import Actors from "../src/actors.json";
import './style.css';

let topScore = 0;
let currentScore = 0;
let lives = 3;
let message = "Click on any Actor to start";

class Wrapper extends Component {

    state = {
        Actors,
        topScore,
        currentScore,
        message,
        lives
    };

    componentDidMount = () => {
        // shuffle Actors
        Actors.sort((a, b) => {
            return 0.5 - Math.random();
        });

        this.setState({ Actors });
    }

    renderlives() {
        let divs = [];

        for (let i = 0; i < this.state.lives; i++) {
            divs.push(<div key={i} className="lives"></div>);
        }

        return <div>{divs}</div>;
    };

    setClicked = id => {
        const Actors = this.state.Actors;
        const actorClicked = Actors.filter(Actor => Actor.id === id);

        if (actorClicked[0].clicked) {
            // reset game
            currentScore = 0;

            // setting message dependent on lives left
            if (lives <= 1) {
                message = "Game Over! Click an Actor to play again";
                topScore = 0;
                lives = 3;
                this.setState({ topScore });

                // reset all Actors to "not clicked"
                for (let i = 0; i < Actors.length; i++) {
                    Actors[i].clicked = false;
                }

            } else {
                lives--
                message = "Oops, your knowledge base has failed.";

                // reset all Actors to "not clicked"
                for (let i = 0; i < Actors.length; i++) {
                    Actors[i].clicked = false;
                }
            }

            this.setState({ lives });
            this.renderlives();
            this.setState({ message });
            this.setState({ currentScore });
            this.setState({ Actors });

        } else {
            // changed to "clicked"
            actorClicked[0].clicked = true;


            // if they get all of it!
            if (currentScore === 44) {
                message = "Wow! Maybe stop watching so much film...";
                currentScore = 0;
                topScore = 0;
                lives = 3;
                this.setState({ topScore });

                // reset all Actors to "not clicked"
                for (let i = 0; i < Actors.length; i++) {
                    Actors[i].clicked = false;
                }
            } 
            // During the game (score under 60)
            else {
                // Adding score to current score
                currentScore = currentScore + 4;
                message = "Making Progress!"

                if (currentScore > topScore) {
                    topScore = currentScore;
                    this.setState({ topScore });
                }
            }

            // shuffle Actors
            Actors.sort((a, b) => {
                return 0.5 - Math.random();
            });

            this.setState({ Actors });
            this.setState({ currentScore });
            this.setState({ message });
        }
    };

    render() {

        return (
            <div clasName="container-fluid">
                <Header lives={this.renderlives()} currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message} />
                <div className="row Wrapper">
                    {this.state.Actors.map(Actor => (
                        <actorCard
                            setClicked={this.setClicked}
                            id={Actor.id}
                            key={Actor.id}
                            image={Actor.image}
                            name={Actor.name}
                            className="col-sm-1"
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Wrapper;