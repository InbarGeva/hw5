console.log("Question 3");


const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];


const mapingLastName = students => students.lastName.startsWith("C");

const filterScore = (array, func) => array.filter(func);
const sum = array => array.reduce((acc, elem)=> acc + elem, 0);
const maxScore = array => Math.max(...array);
const minScore = array => Math.min(...array);

const cLastNameResults = filterScore(studentList,mapingLastName).map(student => {
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        maxScore: maxScore(student.scores),
        minScore: minScore(student.scores),
        avgScore: sum(student.scores) / student.scores.length

        
    }
})

console.log(cLastNameResults);


