const courses = [
    {code: "ACIT 1630", name: "Database Systems"},
    {code: "ORGB 1100", name: "Organizational Behaviour"},
    {code: "COMM 1116", name: "Business Communications"},
];

let test = false;

let ask = prompt("Do you know what my course numbers are? Enter them here and find out!")

while (test === false) {
    if (isNaN(ask)) {
        alert("Yeah, that's not really a number...Try again!");
    }
    else if (ask.length !== 4) {
        alert("Please enter 4 digits/numbers! No more, no less!");
    } else {
        alert("you entered: " + ask + ", which is a valid entry!");
        test = true;
    }

    }

let method = true;

while (method === true) {
    for (let coursenum = 0; coursenum < courses.length; coursenum++) {
        if (courses[coursenum].code.includes(ask)) {
            console.log(`Yes, I am currently taking ${courses[coursenum].code} - ${courses[coursenum].name}`);
            method = false;
        }
        }


    if (method === true) {
            const newcourse = {code: ask, name: null};
            courses.push(newcourse);
            console.log(`Succeeded in entering ${ask} as a new course!`);
            method = false;
            }
    }
