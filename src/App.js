import GameCard from "./GameCard";

const gamesList = [
  {
    id: 0,
    name: "Poker",
    rating: null,
    category: "Fun"
  },
  {
    id: 1,
    name: "Pokemon",
    rating: null,
    category: "Monster Catcher"
  },
  {
    id: 2,
    name: "Apex",
    rating: null,
    category: "Fast"
  }
]



function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      { gamesList.map( g => (
        <GameCard game={g}/> ))}
        </div>
  );
}

export default App;
