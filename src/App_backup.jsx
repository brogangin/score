import { useState, useEffect } from "react";
import axios from "axios";

// import { Container, Nav, Navbar } from "react-bootstrap";

const leagueList = [
  {
    url: "GB-PL",
    name: "Premier League",
    id: 39,
  },
  {
    url: "FR-Ligue1",
    name: "Ligue 1",
    id: 61,
  },
  {
    url: "BR-SerieA",
    name: "Serie A",
    id: 71,
  },
  {
    url: "DE-Bundesliga1",
    name: "Bundesliga 1",
    id: 78,
  },
  {
    url: "NL-Eredivisie",
    name: "Eredivisie",
    id: 88,
  },
  {
    url: "PT-PrimeiraLiga",
    name: "Primeira Liga",
    id: 94,
  },
  {
    url: "IT-SerieA",
    name: "Serie A",
    id: 135,
  },
  {
    url: "ES-LaLiga",
    name: "La Liga",
    id: 140,
  },
  {
    url: "BE-JPL",
    name: "Jupiler Pro League",
    id: 144,
  },
  {
    url: "GB-Premiership",
    name: "Premiership",
    id: 179,
  },
];

export default function App() {
  const [league, setLeague] = useState(leagueList[0]);
  const [matchs, setMatchs] = useState(null);

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
            season: 2023,
          },
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            // "x-rapidapi-key": "651f62fa4668f6e3d440b35ca6cd5727",
            "x-rapidapi-key": "5254bc0cdfb864d4d0381abe374ad217",
          },
        })
        .then((response) => {
          console.log(response);
          setMatchs(response.data.response);
        });
    };

    fetchData().catch(console.error);
  }, [league.id]);

  return (
    <>
      <NavBar onLeague={handleLeague} />
      {/* <p>{league.id}</p> */}
      <Main>
        <Matchs matchs={matchs} />
      </Main>
    </>
  );
}

function NavBar({ onLeague }) {
  return (
    <nav className="navbar navbar-dark bg-black" style={{ width: "100%" }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4 fw-bolder m-auto" href="#">
          Brogangin
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  League
                </a>
                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                  {leagueList.map((league) => (
                    <li className="my-1" key={league.id} onClick={() => onLeague(league.id)}>
                      <a className="dropdown-item">
                        <div className="row align-items-center" style={{ height: "30px" }}>
                          <div className="col-2">
                            <div className="text-center">
                              <img className="" src={`https://media.api-sports.io/football/leagues/${league.id}.png`} alt="" style={{ maxHeight: "30px", maxWidth: "30px" }} />
                            </div>
                          </div>
                          <div className="col" style={{ marginLeft: "-0.5rem;" }}>
                            <div className="small">{league.name}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
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
    <div className="container-fluid mb-2 pb-2 pt-1 bg-light border-top border-4 border-dark shadow rounded-3">
      {matchs?.map((match) => (
        <Match key={match.fixture.id} match={match} />
      ))}
    </div>
  );
}

function Match({ match }) {
  return (
    <div className="row align-items-center mt-1 btn-outline-dark rounded-3 shadow-sm" style={{ height: "65px" }}>
      <div className="col-2 text-center fw-normal fst-italic lh-sm small align-items-center">
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
      </div>
      <div className="col-1 " style={{ marginLeft: 0.5 + "rem" }}>
        <div className="">
          <img src={match["teams"]["home"]["logo"]} style={{ maxHeight: 20 + "px", maxWidth: 20 + "px" }} />
        </div>
        <div style={{ height: "5px" }}></div>
        <div className="">
          <img src={match["teams"]["away"]["logo"]} style={{ maxHeight: 20 + "px", maxWidth: 20 + "px" }} />
        </div>
      </div>
      <div className="col justify-content-start" style={{ marginLeft: 0.35 + "rem" }}>
        <div className="small">{match.teams.home.name}</div>
        <div style={{ height: "5px" }}></div>
        <div className="small">{match.teams.away.name}</div>
      </div>
      <div className="col-2 text-center justify-content-end" style={{ marginLeft: "-0.4rem" }}>
        <div className="small">{match.goals.home}</div>
        <div style={{ height: "5px" }}></div>
        <div className="small">{match.goals.away}</div>
      </div>
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
