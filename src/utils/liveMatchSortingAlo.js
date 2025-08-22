export default function sortMatches(matches) {
  const teamPriority = [
    "India", "Pakistan", "Australia", "England", "South Africa",
    "West Indies", "New Zealand", "Bangladesh", "Afghanistan", "Sri Lanka"
  ];

  const now = new Date();

  function getTeamRank(match) {
    // check if either team is in priority list
    const t1 = teamPriority.indexOf(match.team1?.name);
    const t2 = teamPriority.indexOf(match.team2?.name);

    // agar dono hai to min(rank1, rank2) le lo
    if (t1 !== -1 && t2 !== -1) return Math.min(t1, t2);
    if (t1 !== -1) return t1;
    if (t2 !== -1) return t2;

    return Infinity; // not in top 10
  }

  function isLive(match) {
    return match.matchStarted && !match.matchEnded;
  }

  function getDateDiff(match) {
    const matchDate = new Date(match.dateTimeGMT);
    return Math.abs(matchDate - now); // nearest distance from current time
  }

  matches.sort((a, b) => {
    // 1. team priority
    const rankA = getTeamRank(a);
    const rankB = getTeamRank(b);
    if (rankA !== rankB) return rankA - rankB;

    // 2. live status
    const liveA = isLive(a);
    const liveB = isLive(b);
    if (liveA !== liveB) return liveB - liveA;

    // 3. date proximity
    const diffA = getDateDiff(a);
    const diffB = getDateDiff(b);
    return diffA - diffB;
  });

  return matches;
}
