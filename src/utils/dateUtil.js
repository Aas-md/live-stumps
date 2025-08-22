export function formatDate(dateStr) {
  // Force UTC parsing
  const d = new Date(dateStr + "Z"); // "Z" = UTC indicator
  
  const time = d.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: true, 
    timeZone: "Asia/Kolkata" 
  });

  const date = d.toLocaleDateString("en-GB", { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric", 
    timeZone: "Asia/Kolkata" 
  });

  return `${time} & ${date} IST`;
}
