const courseList = [
    {code: "ACIT 1630", name: "Database Systems"},
    {code: "ORGB 1100", name: "Organizational Behaviour"},
    {code: "COMM 1116", name: "Business Communications"},
];

// let test = false;

// let ask = prompt("Do you know what my course numbers are? Enter them here and find out!")

// while (test === false) {
//     if (isNaN(ask)) {
//         alert("Yeah, that's not really a number...Try again!");
//     }
//     else if (ask.length !== 4) {
//         alert("Please enter 4 digits/numbers! No more, no less!");
//     } else {
//         alert("you entered: " + ask + ", which is a valid entry!");
//         test = true;
//     }

//     }

// let method = true;

// while (method === true) {
//     for (let coursenum = 0; coursenum < courseList.length; coursenum++) {
//         if (courseList[coursenum].code.includes(ask)) {
//             console.log(`Yes, I am currently taking ${courseList[coursenum].code} - ${courseList[coursenum].name}`);
//             method = false;
//         }
//         }

//     if (method === true) {
//             const newcourse = {code: ask, name: null};
//             courseList.push(newcourse);
//             console.log(`Succeeded in entering ${ask} as a new course!`);
//             method = false;
//             }
//     }
function createCourseArray() {
    const coursecounter = document.querySelectorAll('.courseformat li');
    const theCourseArray = [];
  
    for (let i = 0; i < coursecounter.length; i++) {
      const coursenameitems = coursecounter[i].querySelector('.coursename');
      const coursedateitems = coursecounter[i].querySelector('.coursedate');
  
      if (coursenameitems && coursedateitems) {
        const coursename = coursenameitems.textContent.trim(); // use trim to remove leading/trailing spaces
        const coursedate = coursedateitems.textContent.trim(); // use trim to remove leading/trailing spaces
        const coursedictionary = { code: coursename, date: coursedate };
  
        theCourseArray.push(coursedictionary);
      }
    }
    return theCourseArray;
  }
  

const runcoursearray = createCourseArray();
console.log(runcoursearray);

function findCourse(runcoursearray) {
    let ask = prompt("Enter a 4 digit course code!");
    let newitem = false;
    let runtime = true;
  
    while (runtime === true) {
      if (!/^\d{4}$/.test(ask)) {
        ask = prompt("Enter a 4 digit course code!");
        runtime = true;
      } else {
        runtime = false;
      }
    }
  
    const coursenameitems = document.querySelectorAll('.coursename');
  
    for (let i = 0; i < coursenameitems.length; i++) {
      const coursecode = coursenameitems[i].textContent.trim();
  
      if (coursecode.includes(ask)) {
        coursenameitems[i].parentNode.classList.toggle("green");
        newitem = true;
      }
    }
  
    if (newitem === false) {
      const courselist = document.querySelector('.courseformat');
      const newcourseitem = document.createElement('li');
      newcourseitem.innerHTML = `<p class="coursename">${ask}</p><p class="description">N/A</p><p class="coursedate">Fall 2020</p>`;
      courselist.appendChild(newcourseitem);
    }
  }
  
findCourse(runcoursearray);
