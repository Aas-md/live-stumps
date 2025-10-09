

export default function sortMatches(matches) {
  const teams = [
    "India", "Pakistan", "Australia", "England", "South Africa",
    "West Indies", "New Zealand", "Bangladesh", "Afghanistan", "Sri Lanka",
    "Ireland", "Zimbabwe", "Scotland", "Netherlands", "UEA", "Namibia", "Nepal", "Oman"
  ];

  const now = new Date();


  function isLive(match) {
    return match.matchStarted && !match.matchEnded
  }

  function getDateDiff(match) {
    const matchDate = new Date(match?.dateTimeGMT)
    return Math.abs(matchDate - now)
  }


  let filteredMatches = matches.filter((match) => {

    for (let team of teams) {
      if (match?.team1.name.toLowerCase().includes(team.toLowerCase()) || match?.team2.name.toLowerCase().includes(team.toLowerCase()))
        return true
    }
  })

  filteredMatches.sort((a, b) => {
    if (
      a.team1.name.toLowerCase() == 'india' || a.team2.name.toLowerCase() == 'india' ||
      a.team1.name.toLowerCase() == 'pakistan' || a.team2.name.toLowerCase() == 'pakistan' ||
      a.team1.name.toLowerCase() == 'australia' || a.team2.name.toLowerCase() == 'australia' ||
      a.team1.name.toLowerCase() == 'england' || a.team2.name.toLowerCase() == 'england'
    ) return -1;

     if (
    b.team1.name.toLowerCase() == 'india' || b.team2.name.toLowerCase() == 'india' ||
    b.team1.name.toLowerCase() == 'pakistan' || b.team2.name.toLowerCase() == 'pakistan' ||
    b.team1.name.toLowerCase() == 'australia' || b.team2.name.toLowerCase() == 'australia' ||
    b.team1.name.toLowerCase() == 'england' || b.team2.name.toLowerCase() == 'england'
  ) return 1;


    if(isLive(a))return -1
    if(isLive(b))return 1

    let diffa = getDateDiff(a)
    let diffb = getDateDiff(b)
    if(diffa < diffb)return -1
    return 1


  });


  return filteredMatches
}
