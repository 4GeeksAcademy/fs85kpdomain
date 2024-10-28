let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < 8; i++) {
  let random1 = Math.floor(Math.random() * pronoun.length);
  let random2 = Math.floor(Math.random() * adj.length);
  let random3 = Math.floor(Math.random() * noun.length);
  let randomize = pronoun[random1] + adj[random2] + noun[random3];
  console.log(randomize+ 'com');

}
