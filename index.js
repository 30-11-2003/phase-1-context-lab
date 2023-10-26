/* Your Code Here */
function createEmployeeRecord(firstName,familyName,title,payPerHour){
return{

    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents:[]
};
}
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(function(arr){
        return createEmployeeRecord.apply(this,[arr]);
    });
}
function createTimeInEvent(dateStamp){
    const[date, time]=dateStamp.split('');
    employee.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(time),
        date
    });
    return this;
}
function hoursWorkedonDate(date){
    const timeIn =this.timeInEvents.find(event=> event.date === date);
    const timeOut=this.timeOutEvents.find(event =>event.date===date);

    return (timeOut.hour-timeIn.hour)/100;

}
function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedonDate.call(this,date);
    return hoursWorked*this.payPerHour;
}
function allWagesFor(){
    const datesWorked=this.timeInEvents.map(event =>encodeURIComponent.date);
    const totalWages=datesWorked.recuce((total,date)=>total+wagesEarnedOnDate.call(this,date),0);
    return totalWages;
}
function findEmployeeByFirstName(srcArray,firstName) {
    const totalPayroll =EmployeeRecords.reduce((total,employee)=>total + allWagesFor.call(employee),0);
    return totalPayroll;
}
const employeeData=[
    ["Gray","Worm","Security" ,1],
    ["moe", "sizlak", "barkeep", 2]
];
const employees=createEmployeeRecords(employeeData);

employees.forEach(employee=>{
    createTimeInEvent.call(employee,"2023-10-25 0900");
    createTimeOutEvent.call(employee,"2023-10-25 1700");
    createTimeInEvent.call(employee,"2023-10-26 0800");
    createTimeOutEvent.call(employee,"2023-10-26 1600");
});

console.log(allWagesFor.call(employees[0]));
console.log(allWagesFor.call(employees[1]));

console.log(calculatePayroll(empployees));
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

