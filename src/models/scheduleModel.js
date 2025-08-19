const scheduleMatches = [
  {
    id: "d54c93cc-abd1-44c7-a534-ede33788e69e",
    name: "singapure vs some thing else, 1st T20I",
    matchType: "t20",
    status: "Singapore Women won by 125 runs",
    venue: "Singapore National Cricket Ground, Singapore",
    dateTimeGMT: "2025-08-13T04:30:00",
    matchStarted: false,
    matchEnded: false,

    team1: { name: "pakistan", shortName: "Pak", img: "https://shorturl.at/7fbYU", score: "0/0 (0)" },
    team2: { name: "West Indies", shortName: "WI", img: "https://shorturl.at/7fbYU", score: "0/0 (0)" },

    teams: [
      "pakistan",
      "West indease"
    ],


  },

  {
    id: "m1",
    name: "India vs Pakistan, 1st T20I",
    matchType: "t20",
    status: "India won by 5 wickets",
    venue: "Wankhede Stadium, Mumbai",
    dateTimeGMT: "2025-08-10T14:00:00",
    teams: ["India", "Pakistan"],
    team1: {
      name: "India",
      shortName: "IND",
      img: "https://shorturl.at/7fbYU",
      score: "0/0 (0)"
    },
    team2: {
      name: "Pakistan",
      shortName: "PAK",
      img: "https://shorturl.at/7fbYU",
      score: "0/0 (0)"
    },
    matchStarted: false,
    matchEnded: false
  },
  {
    id: "m2",
    name: "Bangladesh vs Australia, 2nd T20I",
    matchType: "t20",
    status: "Australia won by 20 runs",
    venue: "Sher-e-Bangla National Stadium, Dhaka",
    dateTimeGMT: "2025-08-11T10:00:00",
    teams: ["Bangladesh", "Australia"],
    team1: {
      name: "Bangladesh",
      shortName: "BAN",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "0/0 (0)"
    },
    team2: {
      name: "Australia",
      shortName: "AUS",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "0/0 (0)"
    },
    matchStarted: false,
    matchEnded: false
  },
  {
    id: "m3",
    name: "England vs South Africa, 3rd T20I",
    matchType: "t20",
    status: "England won by 3 wickets",
    venue: "Old Trafford, Manchester",
    dateTimeGMT: "2025-08-12T17:00:00",
    teams: ["England", "South Africa"],
    team1: {
      name: "England",
      shortName: "ENG",
      img: "https://h.cricapi.com/img/icon512.png",
      score:"0/0 (0)"
    },
    team2: {
      name: "South Africa",
      shortName: "SA",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "0/0 (0)"
    },
    matchStarted: false,
    matchEnded: false
  },
  {
    id: "m4",
    name: "Sri Lanka vs New Zealand, 1st T20I",
    matchType: "t20",
    status: "New Zealand won by 8 wickets",
    venue: "Pallekele International Cricket Stadium, Kandy",
    dateTimeGMT: "2025-08-13T13:30:00",
    teams: ["Sri Lanka", "New Zealand"],
    team1: {
      name: "Sri Lanka",
      shortName: "SL",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "0/0 (0)"
    },
    team2: {
      name: "New Zealand",
      shortName: "NZ",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "0/0 (0)"
    },
    matchStarted: true,
    matchEnded: true
  },
  {
    id: "m5",
    name: "West Indies vs Afghanistan, 2nd T20I",
    matchType: "t20",
    status: "West Indies won by 35 runs",
    venue: "Kensington Oval, Bridgetown",
    dateTimeGMT: "2025-08-14T18:00:00",
    teams: ["West Indies", "Afghanistan"],
    team1: {
      name: "West Indies",
      shortName: "WI",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "180/4 (20.0)"
    },
    team2: {
      name: "Afghanistan",
      shortName: "AFG",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "145/8 (20.0)"
    },
    matchStarted: false,
    matchEnded: false
  },
  {
    id: "m6",
    name: "Zimbabwe vs Ireland, 3rd T20I",
    matchType: "t20",
    status: "Ireland won by 6 wickets",
    venue: "Harare Sports Club, Harare",
    dateTimeGMT: "2025-08-15T12:00:00",
    teams: ["Zimbabwe", "Ireland"],
    team1: {
      name: "Zimbabwe",
      shortName: "ZIM",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "150/7 (20.0)"
    },
    team2: {
      name: "Ireland",
      shortName: "IRE",
      img: "https://h.cricapi.com/img/icon512.png",
      score: "151/4 (18.3)"
    },
    matchStarted: true,
    matchEnded: false
  }
]

export default scheduleMatches