export function filterCompletedMatches(matches) {
  const INTL_TEAMS = [
    // Men
    "India", "Pakistan", "Australia", "England", "South Africa",
    "New Zealand", "Sri Lanka", "Bangladesh", "Afghanistan", "West Indies",
    "Ireland", "Zimbabwe", "Netherlands", "Scotland", "Namibia", "USA",
    
    // Women
    "India Women", "Pakistan Women", "Australia Women", "England Women", "South Africa Women",
    "New Zealand Women", "Sri Lanka Women", "Bangladesh Women", "Afghanistan Women", "West Indies Women",
    "Ireland Women", "Zimbabwe Women", "Netherlands Women", "Scotland Women", "Namibia Women", "USA Women"
  ];

  const now = new Date();

  return matches.filter(match => {
    // const matchDate = new Date(match.dateTimeGMT);
    // console.log("Match Date:", matchDate, "Now:", now);

    // // Check past
    // if (matchDate >= now) return false;
    console.log("Match Completed Status:", match);
    if(match.ms !== 'result') return false;

    // Extract clean team names (remove [XXX] codes if present)
    const team1 = match.t1?.split("[")[0].trim();
    const team2 = match.t2?.split("[")[0].trim();

    // Check both teams are in whitelist
    return INTL_TEAMS.includes(team1) && INTL_TEAMS.includes(team2);
  });
}


export function sortMatchesByDate(matches) {
  return matches.sort((a, b) => {
    const dateA = new Date(a.dateTimeGMT);
    const dateB = new Date(b.dateTimeGMT);
    return dateA - dateB;
  });
}
