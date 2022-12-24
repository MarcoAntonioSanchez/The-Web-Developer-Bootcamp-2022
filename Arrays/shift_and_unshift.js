// Shift and unshift

// Remove the first person in line
movieLine = ["tom", "nancy", "pablo", "oliver", "eva"];
movieLine.shift();
movieLine; // "nancy", "pablo", "oliver", "eva"

// Add a new person to the beginning of the line
movieLine.unshift("VIP");
movieLine; // "VIP", "tom", "nancy", "pablo", "oliver", "eva"
