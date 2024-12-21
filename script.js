/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee.name);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee.name);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const data = {id: 4, name: "zoro", age: 21, profession: "intern"};

    // for add the data only one time
    const added = arr.some(employee => employee.id == data.id)
    if(!added){
        arr.push(data);   
    }   
   
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
        arr = arr.filter(employee => employee.profession !== "admin");
        console.log(arr);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        {id: 5, name: "Nami", age:22, profession: "Analyst"},
        {id: 6, name: "Luffy", age:21, profession: "Tester"},
        {id: 7, name: "Robin", age:25, profession: "Manager"}
    ];

    let newArr = arr.concat(arr2);
    console.log(newArr);

    
    
  }

