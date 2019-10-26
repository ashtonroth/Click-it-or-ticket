import React from "react";
import "./style.css";

export default (props) => {
    return (
        <div class="container-fluid scoreboard">
            <div className="row scoring">
                <div className="anneWrapper col-3">
                    <div className="anneTitle row">Lives Left</div>
                    <div className="anne row">{props.hearts}</div>
                </div>
                <div className="anneTitle col-6">
                    <h1 className="gameTitleMain">Anne Hathaway Memory Game</h1>
                    <h3 className="rules">Can you remember all of Anne's costars without clicking the same one twice?</h3>
                </div>
                <div className="col-3 scores">
                    <div className="currentScore score row"> Current Score: {props.currentScore} </div>
                    <div className="topScore score row">Top Score: {props.topScore}</div>
                </div>
            </div>
            <div className="row message">
                <h3 className="messageText">{props.message}</h3>
            </div>
        </div>
    );
}