'use strict';

var scoresTie = [
    'Love',
    'Fifteen',
    'Thirty',
    'Deuce'
];

var scores = [
    'Love',
    'Fifteen',
    'Thirty',
    'Forty'
];

var TennisGame1 = function (player1Name, player2Name) {
    this.player1 = { name: player1Name, points: 0 };
    this.player2 = { name: player2Name, points: 0 };
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1") {
        this.player1.points += 1;
    } else {
        this.player2.points += 1;
    }
};

function getTieResult(result) {
    return result < 3 ? scoresTie[result] + '-All' : scoresTie[3];
}

function getResult(result) {
    return scores[result];
}

TennisGame1.prototype.getScore = function () {
    var score = "",
        diffResult = 0,
        i;
    if (this.player1.points === this.player2.points) {
        score = getTieResult(this.player1.points);
    } else if (this.player1.points >= 4 || this.player2.points >= 4) {
        diffResult = this.player1.points - this.player2.points;

        if (Math.abs(diffResult) === 1) {
            score = "Advantage ";
        } else if (Math.abs(diffResult) >= 2) {
            score = "Win for ";
        }
        score += diffResult > 0 ? 'player1' : 'player2';
    } else {
        for (i = 0; i <= 1; i++) {
            score += i === 0 ? getResult(this.player1.points) : '-' + getResult(this.player2.points);
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}