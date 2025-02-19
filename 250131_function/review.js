/*const newYear = {
  name: "을사년",
  number: 2025,
  wish: ["취업", "건강"],
  1: "not recommended",
  true: "also not recommended", //not bullean just variance
  hello: function () {
    console.log("HelloWorld");
  },
};

console.log(newYear.name);
console.log(newYear.number);
console.log(newYear.wish);
console.log(newYear["wish"]);
console.log(newYear[1]);
console.log(newYear.true);
console.log(newYear.hello);
console.log(newYear.hello());
newYear.hello();

// ------------
console.log(Object.keys(newYear));
// banana
console.log("b" + "a" + +"a" + "a");
// kv 대응이되는편(브라우저에 따라 다를수도)
console.log(Object.values(newYear));

console.log(Object.entries(newYear));
*/

const language = ["Python", "js", "c++", 0, true, {}, []];

console.log(language.slice(1, 3));
console.log(language.length);
console.log(language.concat(language));

const l2 = language.concat(language); //inplace methond 자신을 변형
console.log(l2);
console.log("\n\n");
l2.pop();
console.log(language);
console.log(l2);

for (let i = 0; i < language.length; i++) {
  console.log(i, language[i]);
}
for (const v of language) {
  console.log(v);
}
