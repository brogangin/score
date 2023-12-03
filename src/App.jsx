import { useState } from "react";
import { useEffect } from "react";
import "flowbite";
import "./App.css";
import axios from "axios";
import "./App.js";

const leagueList = [
  {
    url: "GB-PL",
    name: "Premier League",
    color: "purple",
    id: 39,
  },
  {
    url: "FR-Ligue1",
    name: "Ligue 1",
    color: "blue",
    id: 61,
  },
  {
    url: "BR-SerieA",
    name: "Serie A",
    color: "green",
    id: 71,
  },
  {
    url: "DE-Bundesliga1",
    name: "Bundesliga 1",
    color: "red",
    id: 78,
  },
  {
    url: "NL-Eredivisie",
    name: "Eredivisie",
    color: "orange",
    id: 88,
  },
  {
    url: "PT-PrimeiraLiga",
    name: "Primeira Liga",
    color: "rose",
    id: 94,
  },
  {
    url: "IT-SerieA",
    name: "Serie A",
    color: "cyan",
    id: 135,
  },
  {
    url: "ES-LaLiga",
    name: "La Liga",
    color: "amber",
    id: 140,
  },
  {
    url: "BE-JPL",
    name: "Jupiler Pro League",
    color: "red",
    id: 144,
  },
  {
    url: "GB-Premiership",
    name: "Premiership",
    color: "sky",
    id: 179,
  },
];
const fixtures = [
  {
    fixture: {
      id: 1035304,
      referee: "T. Bramall",
      timezone: "UTC",
      date: "2023-12-03T14:00:00+00:00",
      timestamp: 1701612000,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 504,
        name: "Vitality Stadium",
        city: "Bournemouth, Dorset",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 35,
        name: "Bournemouth",
        logo: "https://media-4.api-sports.io/football/teams/35.png",
        winner: null,
      },
      away: {
        id: 66,
        name: "Aston Villa",
        logo: "https://media-4.api-sports.io/football/teams/66.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035305,
      referee: "P. Bankes",
      timezone: "UTC",
      date: "2023-12-02T15:00:00+00:00",
      timestamp: 1701529200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 494,
        name: "Emirates Stadium",
        city: "London",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-4.api-sports.io/football/teams/42.png",
        winner: null,
      },
      away: {
        id: 39,
        name: "Wolves",
        logo: "https://media-4.api-sports.io/football/teams/39.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035306,
      referee: "A. Taylor",
      timezone: "UTC",
      date: "2023-12-02T15:00:00+00:00",
      timestamp: 1701529200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 10503,
        name: "Gtech Community Stadium",
        city: "Brentford, Middlesex",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 55,
        name: "Brentford",
        logo: "https://media-4.api-sports.io/football/teams/55.png",
        winner: null,
      },
      away: {
        id: 1359,
        name: "Luton",
        logo: "https://media-4.api-sports.io/football/teams/1359.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035307,
      referee: "C. Kavanagh",
      timezone: "UTC",
      date: "2023-12-02T15:00:00+00:00",
      timestamp: 1701529200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 512,
        name: "Turf Moor",
        city: "Burnley",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 44,
        name: "Burnley",
        logo: "https://media-4.api-sports.io/football/teams/44.png",
        winner: null,
      },
      away: {
        id: 62,
        name: "Sheffield Utd",
        logo: "https://media-4.api-sports.io/football/teams/62.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035308,
      referee: "C. Pawson",
      timezone: "UTC",
      date: "2023-12-03T14:00:00+00:00",
      timestamp: 1701612000,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 519,
        name: "Stamford Bridge",
        city: "London",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 49,
        name: "Chelsea",
        logo: "https://media-4.api-sports.io/football/teams/49.png",
        winner: null,
      },
      away: {
        id: 51,
        name: "Brighton",
        logo: "https://media-4.api-sports.io/football/teams/51.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035309,
      referee: "S. Attwell",
      timezone: "UTC",
      date: "2023-12-03T14:00:00+00:00",
      timestamp: 1701612000,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 550,
        name: "Anfield",
        city: "Liverpool",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 40,
        name: "Liverpool",
        logo: "https://media-4.api-sports.io/football/teams/40.png",
        winner: null,
      },
      away: {
        id: 36,
        name: "Fulham",
        logo: "https://media-4.api-sports.io/football/teams/36.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035310,
      referee: "S. Hooper",
      timezone: "UTC",
      date: "2023-12-03T16:30:00+00:00",
      timestamp: 1701621000,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 555,
        name: "Etihad Stadium",
        city: "Manchester",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-4.api-sports.io/football/teams/50.png",
        winner: null,
      },
      away: {
        id: 47,
        name: "Tottenham",
        logo: "https://media-4.api-sports.io/football/teams/47.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035311,
      referee: "R. Jones",
      timezone: "UTC",
      date: "2023-12-02T20:00:00+00:00",
      timestamp: 1701547200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        city: "Newcastle upon Tyne",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 34,
        name: "Newcastle",
        logo: "https://media-4.api-sports.io/football/teams/34.png",
        winner: null,
      },
      away: {
        id: 33,
        name: "Manchester United",
        logo: "https://media-4.api-sports.io/football/teams/33.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035312,
      referee: "P. Tierney",
      timezone: "UTC",
      date: "2023-12-02T17:30:00+00:00",
      timestamp: 1701538200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 566,
        name: "The City Ground",
        city: "Nottingham, Nottinghamshire",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media-4.api-sports.io/football/teams/65.png",
        winner: null,
      },
      away: {
        id: 45,
        name: "Everton",
        logo: "https://media-4.api-sports.io/football/teams/45.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1035313,
      referee: "M. Oliver",
      timezone: "UTC",
      date: "2023-12-03T14:00:00+00:00",
      timestamp: 1701612000,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 598,
        name: "London Stadium",
        city: "London",
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-4.api-sports.io/football/leagues/39.png",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
      season: 2023,
      round: "Regular Season - 14",
    },
    teams: {
      home: {
        id: 48,
        name: "West Ham",
        logo: "https://media-4.api-sports.io/football/teams/48.png",
        winner: null,
      },
      away: {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media-4.api-sports.io/football/teams/52.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export default function App() {
  const [league, setLeague] = useState(leagueList[0]);
  const [matchs, setMatchs] = useState(fixtures);

  function handleLeague(id) {
    const newLeague = leagueList.filter((league) => league.id === id);
    setLeague(newLeague[0]);
  }

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://v3.football.api-sports.io/fixtures", {
          params: {
            // 'timezone' : self::timezone(),
            timezone: "Jakarta/Indonesia",
            league: league.id,
            round: "Regular Season - 14",
            season: 2023,
          },
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "651f62fa4668f6e3d440b35ca6cd5727",
            // "x-rapidapi-key": "5254bc0cdfb864d4d0381abe374ad217",
          },
        })
        .then((response) => {
          // console.log(response);
          setMatchs(response.data.response);
        });
    };

    fetchData().catch(console.error);
  }, [league.id]);

  return (
    <Container>
      <NavBar league={league} onLeague={handleLeague} />
      {/* <p>{league.id}</p> */}
      <Main color={league.color}>
        <Matchs matchs={matchs} />
      </Main>
    </Container>
  );
}

function NavBar({ onLeague, league }) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center sm:text-2xl text-lg font-bold whitespace-nowrap dark:text-white">Brogangin</span>
        </a>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse md:text-sm text-xs">
          <button
            type="button"
            id="league-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="menu-dropdown"
            data-dropdown-placement="bottom"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-center dark:focus:ring-gray-500 inline-flex items-center justify-center  px-4 py-2"
          >
            <img className="w-3 h-3 lg:w-5 lg:h-5 sm:w-4 sm:h-4 me-2" aria-hidden="true" src={`https://media.api-sports.io/football/leagues/${league.id}.png`}></img>
            {league.name}
          </button>
          {/* Dropdown */}
          <div className="z-50 hidden my-4 list-none text-gray-900 bg-gray-100 rounded-lg shadow " id="menu-dropdown">
            <ul className="py-2 font-medium" aria-labelledby="league-menu-button">
              {leagueList.map((league) => (
                <li key={league.id}>
                  <a href="#" onClick={() => onLeague(league.id)} className="block px-4 py-2 hover:bg-gray-200 ">
                    <div className="inline-flex items-center">
                      <img className="w-3 h-3 lg:w-5 lg:h-5 sm:w-4 sm:h-4 me-2" aria-hidden="true" src={`https://media.api-sports.io/football/leagues/${league.id}.png`}></img>
                      {league.name}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={function () {
              document.querySelector("#navbar-hamburger").classList.toggle("hidden");
              document.querySelector("#navbar-button").ariaExpanded = "true";
            }}
            id="navbar-button"
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 sm:w-10 sm:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-hamburger">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Container({ children }) {
  return <div className="bg-white dark:bg-slate-950">{children}</div>;
}

function Main({ color, children }) {
  const bg = {
    purple: "from-purple-400 via-purple-700 to-purple-500",
    blue: "from-blue-400 via-blue-700 to-blue-500",
    red: "from-red-400 via-red-700 to-red-500",
    amber: "from-amber-400 via-amber-700 to-amber-500",
    sky: "from-sky-400 via-sky-700 to-sky-500",
    cyan: "from-cyan-400 via-cyan-700 to-cyan-500",
    orange: "from-orange-400 via-orange-700 to-orange-500",
    rose: "from-rose-400 via-rose-700 to-rose-500",
    green: "from-green-400 via-green-700 to-green-500",
  };
  return <main className={`sm:h-full h-screen py-5 bg-gradient-to-bl ${bg[color]}`}>{children}</main>;
}

// function Box({ children }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="box">
//       <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//         {isOpen ? "–" : "+"}
//       </button>
//       {isOpen && children}
//     </div>
//   );
// }

function Matchs({ matchs }) {
  return (
    <div className="mx-auto mt-5 w-11/12 lg:w-6/12 sm:w-8/12 relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full mx-auto text-xs lg:text-base sm:text-sm text-gray-700 dark:text-gray-300">
        <caption className="p-5 text-lg font-semibold italic text-center rtl:text-right text-gray-900 bg-gray-200 dark:text-white dark:bg-slate-950">GAMEWEEK 14</caption>
        <tbody>
          {matchs?.map((match) => (
            <tr key={match.fixture.id} className="w-full flex items-center justify-between py-1 lg:py-3 sm:py-2 bg-white/60 border-t dark:bg-gray-800/60 dark:border-gray-700 hover:bg-gray-50/60 dark:hover:bg-gray-600/60">
              <td className="flex items-center justify-start w-1/3 px-2 sm:px-4  ">
                <img src={match.teams.home.logo} alt={match.teams.home.name} className="w-8 h-8 lg:w-10 lg:h-10 sm:w-9 sm:h-9" />

                <div className="sm:ps-4 ps-2 text-left font-medium text-gray-900  dark:text-white">{match.teams.home.name}</div>
              </td>
              {match.fixture.status.short == "TBD" || match.fixture.status.short == "NS" ? "" : <td className="px-4 xs:px-1  w-1/12 text-right ">{match.goals.home}</td>}
              <td className="px-1 sm:px-4 w-1/6 text-center">
                {match.fixture.status.short == "TBD" || match.fixture.status.short == "NS" ? (
                  <>
                    <div>
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "short",
                        timeZone: "Asia/Jakarta",
                      }).format(new Date(match.fixture.date))}
                    </div>
                    <div>
                      {new Intl.DateTimeFormat("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        timeZone: "Asia/Jakarta",
                      }).format(new Date(match.fixture.date))}
                    </div>
                  </>
                ) : match.fixture.status.short == "1H" || match.fixture.status.short == "2H" || match.fixture.status.short == "ET" ? (
                  match.fixture.status.elapsed + " '"
                ) : (
                  match.fixture.status.short
                )}
              </td>
              {match.fixture.status.short == "TBD" || match.fixture.status.short == "NS" ? "" : <td className="px-1 sm:px-4  w-1/12 text-left">{match.goals.away}</td>}
              <td className="flex items-center justify-end w-1/3 px-2 sm:px-4">
                <div className="sm:pe-4 pe-2 text-right font-medium  text-gray-900 dark:text-white">{match.teams.away.name}</div>
                <img src={match.teams.away.logo} alt={match.teams.away.name} className="w-8 h-8 lg:w-10 lg:h-10 sm:w-9 sm:h-9" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// function MatchDetail({ selectedAnime }) {
//   return (
//     <div className="details">
//       <header>
//         <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
//         <div className="details-overview">
//           <h2>{selectedAnime.title}</h2>
//           <p>
//             {selectedAnime.year} &bull; {selectedAnime.score}
//           </p>
//         </div>
//       </header>
//       <section>
//         <p>
//           <em>{selectedAnime.synopsis}</em>
//         </p>
//       </section>
//     </div>
//   );
// }
