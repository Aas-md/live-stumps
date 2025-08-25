export function filterUpcommingMatches(matches) {
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
    const matchDate = new Date(match.dateTimeGMT);

    // Check upcoming
    if (matchDate <= now) return false;

    // Extract clean team names (remove [XXX] codes if present)
    const team1 = match.t1?.split("[")[0].trim();
    const team2 = match.t2?.split("[")[0].trim();

    // Check both teams are in whitelist
    return INTL_TEAMS.includes(team1) && INTL_TEAMS.includes(team2);
  });
}

export function sortmatchByNearestDate(matches) {
  const now = new Date();

  return matches.sort((a, b) => {
    const da = new Date(a.date);
    const db = new Date(b.date);

    const diffA = Math.abs(da - now);
    const diffB = Math.abs(db - now);

    return diffA - diffB; // smaller difference = nearer
  });
}

