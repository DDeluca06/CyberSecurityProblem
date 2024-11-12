// This is our data variable, treat it with care!
const cyberData = [
  {
    Level: "Entry-level",
    LocalJobOpenings: 3567,
    AvailableTalent: 531,
  },
  {
    Level: "Mid-level",
    LocalJobOpenings: 9558,
    AvailableTalent: 343,
  },
  {
    Level: "Senior-level",
    LocalJobOpenings: 13432,
    AvailableTalent: 146,
  },
];

// Grab the combined total of role openings
const totalOpenRoles = cyberData.reduce((total, job) => total + job.LocalJobOpenings, 0);

/* // Display to our user in console
cyberData.forEach((job) => {
  // For each 'role' in the table...
  console.log(`${job.Level}: ${job.LocalJobOpenings} openings`); // ... display how many openings there are.
}); */

/* // Total open roles
console.log(`There is a combined total of ${totalOpenRoles} open roles.`); */

// Find our largest shortage by cycling through our current list
function findLargestShortage() {
  // If we wanted to improve this, work with reduce. But that's a PAIN for me to
  // do right now. It'll work for demonstration!
  let largest = Math.max(
    cyberData[0].LocalJobOpenings,
    cyberData[1].LocalJobOpenings,
    cyberData[2].LocalJobOpenings
  );
  let role = cyberData.find(item => item.LocalJobOpenings === largest).Level;
  return `Highest Shortage: ${role} with a gap of ${largest}`;
}

function findTalentShortage() {
  let talentTotal = cyberData[0].AvailableTalent + cyberData[1].AvailableTalent + cyberData[2].AvailableTalent;
  return `Total Talent Gap: ${talentTotal}`;
}

console.log(`Cybersecurity Talent Gap Analysis:`)
console.log(findLargestShortage(cyberData));
console.log(findTalentShortage(cyberData));
