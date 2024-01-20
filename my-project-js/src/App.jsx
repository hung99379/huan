import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // // Bài 1
  // // Dữ liệu từ API
  // const game = {
  //   teams: {
  //     team1: 'Bayern Munich',
  //     team2: 'Borussia Dortmund',
  //   },
  //   players: {
  //     team1: ['Neuer', 'Pavard', 'Sule', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
  //     team2: ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  //   },
  //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski', 'Hakimi', 'Hakimi', 'Hakimi'],
  //   odds: {
  //     team1: 1.33,
  //     x: 3.25,
  //     team2: 6.5,
  //   },
  // };

  // // Nhiệm vụ 1
  // const [gk, ...fieldPlayers] = game.players.team1;
  // const players1 = [gk, fieldPlayers];
  // const players2 = game.players.team2;

  // // Nhiệm vụ 2
  // const [gk1, ...fieldPlayers1] = game.players.team1;
  // const fieldPlayers1Final = [...fieldPlayers1, 'Thiago', 'Coutinho', 'Perisic'];
  // const players1Final = [gk1, fieldPlayers1Final];

  // // Nhiệm vụ 3
  // const allPlayers = [...game.players.team1, ...game.players.team2];

  // // Nhiệm vụ 4
  // const { team1: team1Odds, x: drawOdds, team2: team2Odds } = game.odds;

  // // Nhiệm vụ 5
  // const printGoals = (...scorers) => {
  //   scorers.forEach((player, index) => {
  //     console.log(`Goal ${index + 1}: ${player}`);
  //   });
  // };

  // // Nhiệm vụ 6
  // printGoals(...game.scored);

  // // Nhiệm vụ 7
  // const winner = team1Odds < team2Odds ? game.teams.team1 : game.teams.team2;
  // console.log(`The winner is: ${winner}`);


  // Bài 2
  // Dữ liệu từ API
const game = {
  teams: {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
  },
  players: {
    team1: ['Neuer', 'Pavard', 'Sule', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    team2: ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  },
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski', 'Hakimi', 'Hakimi', 'Hakimi'],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Nhiệm vụ 1
console.log("Danh sách cầu thủ ghi bàn:");
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// Nhiệm vụ 2
const calculateResultRatio = () => {
  const totalOdds = game.odds.team1 + game.odds.draw + game.odds.team2;
  const team1Ratio = (game.odds.team1 / totalOdds) * 100;
  const drawRatio = (game.odds.draw / totalOdds) * 100;
  const team2Ratio = (game.odds.team2 / totalOdds) * 100;

  console.log(`Tỉ lệ thắng của ${game.teams.team1}: ${team1Ratio.toFixed(2)}%`);
  console.log(`Tỉ lệ hòa: ${drawRatio.toFixed(2)}%`);
  console.log(`Tỉ lệ thắng của ${game.teams.team2}: ${team2Ratio.toFixed(2)}%`);
};

calculateResultRatio();

// Nhiệm vụ 3
console.log("Tỉ lệ cược:");
console.log(`Tỉ lệ thắng của ${game.teams.team1}: ${game.odds.team1}`);
console.log(`Tỉ lệ hòa: ${game.odds.draw}`);
console.log(`Tỉ lệ thắng của ${game.teams.team2}: ${game.odds.team2}`);

// Nhiệm vụ 4
const scorers = {};
game.scored.forEach(player => {
  scorers[player] = (scorers[player] || 0) + 1;
});

console.log("Danh sách cầu thủ ghi bàn và số bàn thắng:");
console.log(scorers);

}

export default App
