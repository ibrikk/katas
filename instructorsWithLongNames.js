const instructorWithLongestName = instructors => {
  let res = {name: ''};
  for (const obj of instructors) {
    if (obj.name.length > res.name.length) {
      res = obj;
    }
  }
  return res;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));