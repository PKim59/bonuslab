const courses = {
    course1 : {code: "ACIT 1630", name: "Database Systems"},
    course2 : {code: "ORGB 1100", name: "Organizational Behaviour"},
    course3 : {code: "COMM 1116", name: "Business Communications"},
}

let method = false

while (method === false) {
    let ask = prompt("Do you know what my course numbers are? Enter them here and find out!")
        if (ask == NaN) {
            alert("Yeah, that's not really a number...")
        }
        else if (ask.length !== 4) {
                alert("Please enter 4 digits/numbers! No more, no less.")
        } else {
            alert("you entered: " + ask);
            let method = true
            break
        }
    
    }

while (method === true) {
    for (let coursenum = 0; coursenum < courses.length; coursenum++) {
        if (courses[courseID][code].includes(ask)) {
            let coursedetails = courses[courseID][code].includes(ask)
            console.log(`Yes, I am currently taking the course ${coursedetails.code} - ${coursedetails.name}`)
            method = false
        }
        else {
            courses.push({ask : {code: ask, name: null}})
            console.log(`succeeded in entering ${ask} as a new course!`)
        }
    }   
}
