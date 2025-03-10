

function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                player1: {
                    name: 'Alan Anderson',
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                player2: {
                    name: 'Reggie Evans',
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                player3: {
                    name: 'Brook Lopez',
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds:19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                player4: {
                    name: 'Mason Plumlee',
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                player5: {
                    name: 'Jason Terry',
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                player1: {
                    name: 'Jeff Adrien',
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                player2: {
                    name: 'Bismak Biyombo',
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                player3: {
                    name: 'DeSagna Diop',
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                player4: {
                    name: 'Ben Gordon',
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                player5: {
                    name: 'Brendan Haywood',
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }     
    }
}


// function to call game objects 

const game = gameObject();
console.log(game);


// function to call home team (using bracket notation)

function homeTeam() {
    return game['home'] ['teamName'];
}
console.log(homeTeam());

// function to call home team (using dot notation)
function homeTeam() {
    return game.home.teamName;
}
console.log(homeTeam());


// function to call home team players (using dot notation)
function homeTeamPlayers() {
    return game.home.players;
}
console.log(homeTeamPlayers());

// function to call home team players (using bracket notation)
function homeTeamPlayers() {
    return game['home'] ['players'];
}
console.log(homeTeamPlayers());


// function to call away team (using dot notation)
function awayTeam() {
    return game.away.teamName;
}
console.log(awayTeam());
// function to call away team (using bracket notation)
function awayTeam() {
    return game['away'] ['teamName'];
}
console.log(awayTeam());

// function to call away team players (using dot notation)
function awayTeamPlayers() {
    return game.away.players;
}
console.log(awayTeamPlayers());

// function to call away team players (using bracket notation)
function awayTeamPlayers() {
    return game['away'] ['players'];
}
console.log(awayTeamPlayers());


// function to call team using the team name
function team(teamName) {
    return teamName === game.home.teamName ? game.home : game.away;
}
console.log(team('Brooklyn Nets'));
console.log(team('Charlotte Hornets'));



// function to call team colors using the team function
function teamColors(teamName) {
    return team(teamName).colors;
}
console.log(teamColors('Brooklyn Nets'));
console.log(teamColors('Charlotte Hornets'));



// function to call player stats using the team and playerName
function getPlayerStats(team, playerName) {
    return game[team].players[playerName];
}
console.log(getPlayerStats('home', 'player1'));
console.log(getPlayerStats('home', 'player2'));
console.log(getPlayerStats('home', 'player3'));
console.log(getPlayerStats('home', 'player4'));
console.log(getPlayerStats('home', 'player5'));

console.log(getPlayerStats('away', 'player1'));
console.log(getPlayerStats('away', 'player2'));
console.log(getPlayerStats('away', 'player3'));
console.log(getPlayerStats('away', 'player4'));
console.log(getPlayerStats('away', 'player5'));



// function to call the winning team using the team points
function winningTeam() {
    return game.home.points > game.away.points ? game.home.teamName : game.away.teamName;
}
console.log(winningTeam());



// function to call all team players using the team name
function getTeamPlayers(teamName) {

    if (teamName === 'Brooklyn Nets' || teamName === 'Charlotte Hornets') {
        return team(teamName).players;
    }
    else
        return "Insert team input. Please use 'Brooklyn Nets' or 'Charlotte Hornets'.";
}
console.log(getTeamPlayers('Brooklyn Nets'));
console.log(getTeamPlayers('Charlotte Hornets'));



// function to get the number of points scored by a player
function getPlayerPoints(teamName, playerName) {
    return team(teamName).players[playerName].points;
}
console.log(getPlayerPoints('Brooklyn Nets', 'player1'));
console.log(getPlayerPoints('Brooklyn Nets', 'player2'));
console.log(getPlayerPoints('Brooklyn Nets', 'player3'));
console.log(getPlayerPoints('Brooklyn Nets', 'player4'));
console.log(getPlayerPoints('Brooklyn Nets', 'player5'));

console.log(getPlayerPoints('Charlotte Hornets', 'player1'));
console.log(getPlayerPoints('Charlotte Hornets', 'player2'));
console.log(getPlayerPoints('Charlotte Hornets', 'player3'));
console.log(getPlayerPoints('Charlotte Hornets', 'player4'));
console.log(getPlayerPoints('Charlotte Hornets', 'player5'));

// function that retrieves the total points scored by all players of each team

function teamPoints(teamName) {
    return Object.values(getTeamPlayers(teamName)).reduce((acc, player) => acc + player.points, 0);
}
console.log(teamPoints('Brooklyn Nets'));
console.log(teamPoints('Charlotte Hornets'));


// alternatively B

function getTeamPoints(teamName) {
    let totalPoints = 0;
    let teamPlayers;
    if (teamName === 'Brooklyn Nets' || teamName === 'Charlotte Hornets') {
        teamPlayers = getTeamPlayers(teamName);
        for (let player in teamPlayers) {
            totalPoints += teamPlayers[player].points;
        }
        return totalPoints;
    }
    else
        return "Insert team input. Please use 'Brooklyn Nets' or 'Charlotte Hornets'.";
}
console.log(getTeamPoints('Brooklyn Nets'));
console.log(getTeamPoints('Charlotte Hornets'));
console.log(getTeamPoints('Orlando Pirates'));


// alternatively C
function getTeamPoints(teamName) {
    let totalPoints = 0;
    let teamPlayers;
    if (teamName === 'Brooklyn Nets' || teamName === 'Charlotte Hornets') {
        teamPlayers = game.home.players;
        } else if (teamName === 'Charlotte Hornets') {
            teamPlayers = game.away.players;
        } else {
            return "Input a valid team name i.e. 'Brooklyn Nets' or 'Charlotte Hornets'.";
        }
        for (let player in teamPlayers) {
            totalPoints += teamPlayers[player].points;
        }
        return totalPoints;
    }
    console.log(getTeamPoints('Brooklyn Nets'));
    console.log(getTeamPoints('Charlotte Hornets'));
    console.log(getTeamPoints('Manchester United'));


// function to call player numbers using the spread operator
function getPlayerNumbers() {
    const game = gameObject();
    const allPlayers = { ...game.home.players, ...game.away.players };
    const playerNumbers = [];
    for (let player in allPlayers) {
        playerNumbers.push(allPlayers[player].number);
    }
    return playerNumbers;
}
console.log(JSON.stringify(getPlayerNumbers(), null, 2));


// function to return big shoe rebounds
function bigShoeRebounds() {
    const allPlayers = { ...game.home.players, ...game.away.players };
    let playerWithBiggestShoe = '';
    let biggestShoeSize = 0;
    for (let player in allPlayers) {
        if (allPlayers[player].shoe > biggestShoeSize) {
            biggestShoeSize = allPlayers[player].shoe;
            playerWithBiggestShoe = allPlayers[player];
        }
    }
    return playerWithBiggestShoe.rebounds;
}
console.log(bigShoeRebounds());


// function to return the player with the longest name
function longestName() {
    const allPlayers = { ...game.home.players, ...game.away.players };
    let playerWithLongestName = '';
    let longestNameLength = 0;
    for (let player in allPlayers) {
        if (allPlayers[player].name.length > longestNameLength) {
            longestNameLength = allPlayers[player].name.length;
            playerWithLongestName = allPlayers[player];
        }
    }
    return playerWithLongestName.name;
}
console.log(longestName());

// function to return the player with the longest name had the most steals
function getMostSteals() {
    const allPlayers = { ...game.home.players, ...game.away.players };
    let playerWithMostSteals = '';
    let mostSteals = 0;
    for (let player in allPlayers) {
        if (allPlayers[player].steals > mostSteals) {
            mostSteals = allPlayers[player].steals;
            playerWithMostSteals = allPlayers[player];
        }
    }
    return playerWithMostSteals.name;
}
console.log(getMostSteals());

// function that returns true if the player with the longest name had the most steals
function playerWithLongestNameHadMostSteals() {
    return longestName() === getMostSteals();
}
console.log(playerWithLongestNameHadMostSteals());




// // function to call all players using spread operator ( we used the spread operator ... to merge the two objects)
// function getAllPlayers() {
//     const game = gameObject();
//     const allPlayers = { ...game.home.players, ...game.away.players };
//     return allPlayers;
// }
// console.log(getAllPlayers());


