// console.log('Hello Jee');

// string with primitive and object
    // let lastName = 'Babbar' ;
    // let firstName = new String('Love');

// `` : Backtics character
    // let message = 
    // `Hello ${lastName},

    // Thanks for the Opportunity

    // Regards,
    // Babbar`;
    // console.log(message);

//Split method
    // let words = message.split(' ');
    // console.log(words);

//Date Method
    // let date = new Date();
    // let date2 = new Date('June 20 1998 07:15');
    // let date3 = new Date(1998, 11, 20, 7);
    // console.log(date);
    // console.log(date2);
    // date3.setFullYear(1947);
    // console.log(date3);

//Array 
    // let numbers = [1,4,5,7];
//Array Incertion
    // console.log(numbers);
    // numbers.push(7)
    // console.log(numbers);
    // numbers.unshift(9);
    // console.log(numbers);
    // numbers.splice(0, 1);
    // console.log(numbers);

//Array Serching
    // console.log(numbers);
    // console.log(numbers.indexOf(7));

//we want to check if a number exist in an array
    // if(numbers.indexOf(4) != -1) 
    //     console.log("present");

//Check if includes return true
    // console.log(numbers.includes(7));

//check from the desired index
    // console.log(numbers.indexOf(4, 1) );

//Searching array's in objects using find method
    // let courses = [
    //     {no:1, naam:'Love'},
    //     {no:2, naam:'Rahul'}
    // ];
    // let course =  courses.find(function(course) {
    //     return course.naam === 'Love';
    // });
    // let course2 = courses.find(course2 => course2.naam === 'Rahul'); 
    // console.log(course);
    // console.log(course2);

//Deletion method's
    // let numbers = [1,2,3,4,5,6,7];
    // console.log(numbers);
    //Deletion using pop method(From the end)
        // numbers.pop();
        // console.log(numbers);
    //Deletion using shift mehod(Form the begining)
        // numbers.shift();
        // console.log(numbers);
    //Deletion using splice mehod(Form the middle)
        // numbers.splice(1,3);
        // console.log(numbers);

//Empty Array
    // let numbers = [1,2,3,4,5];
    // numbers.splice(0,numbers.length);
    // console.log(numbers);

//concatination of array's
    // let first = [1,2,3];
    // let second = [4,5,6];
    // let combined = first.concat(second);
            //or//
    // let combined2 = [...first,...second];
    // console.log(combined2);

//Array slicing
    // let marks = [10,20,30,40,50,60,70,80];
    // let sliced = marks.slice(0,2);
    // console.log(sliced);

//array coping
    // let combined = [10,20,30,40];
    // let another = [...combined];
    // console.log(another);


//Using forEach, arrow function
    // let arr = [10,20,30,40,50];
    //accesing a array using for loop
        // for(let value of arr) {
        //     console.log(value);
        // }

//using foreach
    // arr.forEach(function(arr2){
    //     return console.log(arr2);
    // })
            //or//
    // arr.forEach(arr2 => console.log(arr2));

//Array Joining
    // let numbers = [10,20,30,40,50];
    // let joined = numbers.join('_');
    // console.log(joined);

//array spliting
    // let message = 'This is my first message';
    // let pices = message.split(' ');
    // console.log(pices);
    // pices.pop();
    // console.log(pices);
    // pices.push('satya');
    // console.log(pices);
    // pices.splice(0,2)
    // console.log(pices);

//reverse an array using .reverse function
    // let numbers = [5,10,4,40];
    // numbers.reverse();
    // console.log(numbers);

//Flitering object's using 
    // let numbers = [1,2,-1,-4];
    // let filtered = numbers.filter(number => number>=0);
    // console.log(filtered);

//mapping using map method
    // let numbers = [7,8,9,10];
    // let items = numbers.map(value => 'student_no ' + value);
    // console.log(items);

    // let numbers = [1,2,-6,-9];
    // let items = numbers.filter(value => value >= 0).map(num => {value: num});
    // console.log(items);





