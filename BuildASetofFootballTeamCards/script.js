let footballTeam = {
  team: "Australia",
  year: 2025,
  headCoach: "John Citizen",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

let team = document.getElementById("team");
let year = document.getElementById("year");
let headCoach = document.getElementById("head-coach");
let playerOption = document.getElementById("players");
let playerCards = document.getElementById("player-cards");

team.innerHTML = footballTeam.team;
year.innerHTML = footballTeam.year;
headCoach.innerHTML = footballTeam.headCoach;

// Trigger default render on page load
window.addEventListener("DOMContentLoaded", () => {
  playerOption.value = "all"; // Ensures default select value is 'all'
  playerOption.dispatchEvent(new Event("change")); // Triggers the same rendering logic
});

playerOption.addEventListener("change", () => {
  let filltedPlayer = [];
  if (playerOption.value === "all") {
    filltedPlayer = footballTeam.players;
  } else {
    filltedPlayer = footballTeam.players.filter(
      (player) => player.position === playerOption.value
    );
  }

  playerCards.innerHTML = "";

  filltedPlayer.forEach(({ name, position, isCaptain }) => {
    playerCards.innerHTML += `<div class="player-card">
                                <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
                                <p>Position: ${position}</p>
                              </div>`;
  });
});
