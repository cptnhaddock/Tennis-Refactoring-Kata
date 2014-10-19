'use strict';

var TennisGame1 = function (player1Name, player2Name) {
    this.players = [
        {player1Name: 0},
        {player2Name: 0}
    ];
    console.log(this);
};

TennisGame1.prototype.wonPoint = function (playerName) {
    console.log(this.players[playerName]);

};

TennisGame1.prototype.getScore = function() {
    var score = "",
        tempScore = 0;
    if (this.players[0] === this.players[1]) {
        switch (this.players[0]) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
        }
    } else if (this.players[0] >= 4 || this.players[1] >= 4) {
        var minusResult = this.players[0] - this.players[1];
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.players[0];
            else {
                score += "-";
                tempScore = this.players[1];
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}