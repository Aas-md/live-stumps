export function filterRecentMatches(matches) {
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
  const pastLimit = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); // 2 din pehle
  const futureLimit = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 din baad

  return matches.filter(match => {
    const matchDate = new Date(match.dateTimeGMT);

    // ✅ Filter only matches within ±2 days
    if (matchDate < pastLimit || matchDate > futureLimit) return false;

    // ✅ Extract clean team names (remove [XXX])
    const team1 = match.t1?.split("[")[0].trim();
    const team2 = match.t2?.split("[")[0].trim();

    // ✅ Only keep international teams
    return INTL_TEAMS.includes(team1) && INTL_TEAMS.includes(team2);
  });
}
