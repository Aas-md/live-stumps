export  function getRunRate(scoreStr) {
  if (!scoreStr) return null;

  // Example: "176/7 (20.0)" -> ["176/7 ", "20.0"]
  const parts = scoreStr.split("(");
  if (parts.length < 2) return null;

  // Runs part -> "176/7 " -> "176"
  const runsPart = parts[0].trim().split("/")[0];
  const runs = parseInt(runsPart, 10);

  // Overs part -> "20.0)" -> "20.0"
  const oversStr = parts[1].replace(")", "").trim();

  // Handle overs and balls (like "12.4" = 12 overs 4 balls)
  const [oversWhole, ballsStr] = oversStr.split(".");
  const overs = parseInt(oversWhole, 10) + (parseInt(ballsStr || "0", 10) / 6);

  if (!runs || !overs) return null;

  const runRate = runs / overs;
  return runRate.toFixed(2); // keep 2 decimal places
}

// export function getRequiredRate(scoreStr,target) {
//   const parts = scoreStr.split("(");
//   const runs = parseInt(parts[0].split("/")[0].trim(),10);
//   const oversStr = parts[1].replace(")","").trim();
//   const [o,b] = oversStr.split(".");
//   const overs = parseInt(o,10)+(parseInt(b||"0",10)/6);
//   const remainingRuns = target-runs;
//   const remainingOvers = 50-overs; 
//   return (remainingRuns/remainingOvers).toFixed(2);
// }

export function getRequiredRate(scoreStr, target, format = "odi") {
  if (!scoreStr || scoreStr === "N/A") return "N/A";
  if (format.toUpperCase() === "test") return "N/A"; // Test me required rate nahi hota

  const parts = scoreStr.split("(");
  const runs = parseInt(parts[0].split("/")[0].trim(), 10);
  const oversStr = parts[1]?.replace(")", "").trim() || "0";
  const [o, b] = oversStr.split(".");
  const overs = parseInt(o || "0", 10) + (parseInt(b || "0", 10) / 6);

  // Total overs based on format
  let totalOvers = 50; // default ODI
  if (format.toUpperCase() === "t20") totalOvers = 20;
  else if (format.toUpperCase() === "odi") totalOvers = 50;

  const remainingRuns = target - runs;
  const remainingOvers = totalOvers - overs;

  if (remainingRuns <= 0) return "0.00"; // Match already won
  if (remainingOvers <= 0) return "N/A"; // No overs left

  return (remainingRuns / remainingOvers).toFixed(2);
}



export function getTarget(scoreStr) {
  if (!scoreStr) return 0;

  const runs = parseInt(scoreStr.split("/")[0].trim(), 10);
  if (runs === 0) return 0;

  return runs + 1;
}



