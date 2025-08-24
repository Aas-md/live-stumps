export function getOrderedTeams(scoreEntry, teamInfo = []) {
  if (!teamInfo || teamInfo.length < 2) return [];

  // Agar score null/undefined hai → dono teams ko random order mai return karo
  if (!scoreEntry) {
    return teamInfo
      .sort(() => Math.random() - 0.5) // shuffle random
      .map(t => ({
        name: t.name,
        shortName: t.shortname,
        img: t.img
      }));
  }

  // inning string se team ka naam nikal lo
  const teamName = scoreEntry.inning
    ?.replace(/Inning.*/i, "") // remove "Inning" and after
    .trim();

  // inning wali team ko find karo
  const battingTeam = teamInfo.find(
    t => t.name.toLowerCase() === teamName.toLowerCase()
  );

  // jo team batting team nahi hai, wo doosri hai
  const otherTeam = teamInfo.find(
    t => t.name.toLowerCase() !== teamName.toLowerCase()
  );

  // order maintain karke dono teams return karo
  return [battingTeam, otherTeam].map(t => ({
    name: t?.name ?? "N/A",
    shortName: t?.shortname ?? "N/A",
    img: t?.img ?? ""
  }));
}
