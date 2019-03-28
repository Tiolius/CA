const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 21
        },
        {
            firstName: 'Igor',
            lastName: 'Ivanov',
            age: 22
        },
        {
            firstName: 'Ronald',
            lastName: 'Donald',
            age: 20
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Broncos',
            teamPoints: 12,
            opponentPoints: 37
        },
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 17
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(oppName, teamPoints, oppPoints) {
        let game = {
            opponent: oppName,
            teamPoints: teamPoints,
            opponentPoints: oppPoints
        };
        this._games.push(game);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);