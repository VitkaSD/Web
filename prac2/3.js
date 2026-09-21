const pupils =[
    {name: "Leha", grade: 5},
    {name: "Gleb", grade: 3},
    {name: "Sanya", grade: 4},
    {name: "Petr", grade: 5},
    {name: "Mihon", grade: 2},
    {name: "Dash", grade: 4},
    {name: "Igor", grade: 2},
    {name: "Egor", grade: 4},
    {name: "Lesya", grade: 2},
    {name: "Nadya", grade: 5}
];
const nd = prompt("Grade:");

const b_s = pupils.filter(c => c.grade >= nd).map(c => c.name);
const s_o = pupils.reduce((a,c) => a + c.grade,0)/pupils.length;
console.log(b_s, s_o);