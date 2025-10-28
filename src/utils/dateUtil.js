export function formatDateAndTime(dateStr) {
  // Force GMT parsing
  const d = new Date(dateStr + "Z"); // "Z" ensures UTC/GMT

  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata" // Convert UTC to IST
  });

  const date = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  });

  return `${time} & ${date} `;
}



export  function formatDate(dateStr) {
  const date = new Date(dateStr);

  // Month names
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Age calculation
  const today = new Date();
  let age = today.getFullYear() - year;
  const hasBirthdayPassed = 
    today.getMonth() > date.getMonth() || 
    (today.getMonth() === date.getMonth() && today.getDate() >= day);

  if (!hasBirthdayPassed) {
    age--; // if birthday not yet passed this year
  }

  return `${day} / ${month} / ${year} (${age} years)`;
}

