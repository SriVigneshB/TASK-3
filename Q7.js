let people=["Greg","Mary","Devon","James"];
for(let i=0;i<people.length;i++){
    console.log(people[i])
}
people.slice(0,2)
console.log(people);
people.push("Matt");
console.log(people);
people.push("Sri");
console.log(people);
let j=0;
while(people[j]!='Mary'){
    console.log(people[j]);
    j++;
}
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
let bob=["bob"];
console.log(people.concat(bob));
