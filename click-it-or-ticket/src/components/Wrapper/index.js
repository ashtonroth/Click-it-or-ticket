import React, { Component } from "react";
import ActorCard from '../ActorsIcons';
import Header from '../Header';
// import Actors from "../actors.json";
// import './style.css';

let topScore = 0;
let currentScore = 0;
let lives = 3;
let message = "Click on any Actor to start";
let Actors = [
    {
        "id": 1,
        "name": "Mia Thermopolis",
        "image": "/Users/ashtonroth/class/Click-it-or-ticket/click-it-or-ticket/public/images/download.jpeg",
        "clicked": false
    },
    {
        "id": 2,
        "name": "Catwoman",
        "image": "click-it-or-ticket/public/images/download.jpeg",
        "clicked": false
    },
    {
        "id": 3,
        "name": "Andrea Sachs",
        "image": "/Users/ashtonroth/class/Click-it-or-ticket/click-it-or-ticket/public/images/andreasachs.jpeg",
        "clicked": false
    },
    {
        "id": 4,
        "name": "Jules",
        "image": "./Jules.jpeg",
        "clicked": false
    },
    {
        "id": 5,
        "name": "Meryl Streep",
        "image": "./images/merylstreep.jpeg",
        "clicked": false
    },
    {
        "id": 6,
        "name": "Julie Andrews",
        "image": "./images/Julieandrews.jpeg",
        "clicked": false
    },
    {
        "id": 7,
        "name": "Heather Matarazzo",
        "image": "./images/heatherm.jpeg",
        "clicked": false
    },
    {
        "id": 8,
        "name": "Erik Von Detten",
        "image": "./images/erikvd.jpeg",
        "clicked": false
    },
    {
        "id": 9,
        "name": "Fat Louie",
        "image": "./images/fatlouie.jpeg",
        "clicked": false
    },
    {
        "id": 10,
        "name": "Adrien Grenier",
        "image": "./images/adrieng.jpeg",
        "clicked": false
    }
    
]

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
                        <ActorCard
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