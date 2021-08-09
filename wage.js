const full_time_wage = 8
const part_time_wage = 4
const wage_per_hr = 20
const days_in_month = 20

//uc1
console.log("----------uc1---------");
console.log("Welcome to employee wage computation");
{
    let key = Math.floor(Math.random()*10%3);
    let isfulltime = false;
    switch(key){
        case 0:
            console.log("Part time employee");
            break;
        case 1:
            console.log("Full time employee");
            break;
        case 2:
            console.log("Employee absent");
            break;
        default:
            console.log("In default case");
            break;
    }
}

//uc2
console.log("----------uc2---------");
console.log("Full time wage for employee is : " +full_time_wage*wage_per_hr);

//uc3
console.log("----------uc3---------");
console.log("Part time wage for employee is : " +part_time_wage*wage_per_hr);

//uc4
console.log("----------uc4---------");
{
    let key = Math.floor(Math.random()*10%3);
        let isfulltime = false;
        switch(key){
            case 0:
                console.log("Part time wage for employee is : " +part_time_wage*wage_per_hr);
                break;
            case 1:
                console.log("Full time wage for employee is : " +full_time_wage*wage_per_hr);
                break;
            case 2:
                console.log("Absent wage for employee is : 0");
                break;
            default:
                console.log("In default case");
                break;
        }
}

//uc5
console.log("----------uc5---------");
{   
    let current_day = 0;
    let employee_wage = 0;
    let total_employee_wage = 0;
    while(current_day < days_in_month){
        let key = Math.floor(Math.random()*10%3);
        let isfulltime = false;
        switch(key){
            case 0:
                employee_wage += part_time_wage*wage_per_hr;
                break;
            case 1:
                employee_wage += full_time_wage*wage_per_hr;
                break;
            case 2:
                break;
            default:
                console.log("In default case");
                break;
        }
        total_employee_wage += employee_wage;
        current_day += 1;
    }
    console.log("Monthly Employee Wage = " +total_employee_wage);
}

//uc6
console.log("----------uc6---------");
{   
    let current_day = 0;
    let employee_wage = 0;
    let total_employee_wage = 0;
    let max_working_hours = 160;
    let current_hours = 0;
    let total_part_time_days = 0;
    let total_full_time_days = 0;
    let total_absent_time_days = 0;

    while(current_hours <= max_working_hours && current_day < days_in_month){
        let key = Math.floor(Math.random()*10%3);
        let isfulltime = false;
        switch(key){
            case 0:
                current_hours += part_time_wage;
                employee_wage += part_time_wage*wage_per_hr;
                total_part_time_days += 1;
                break;
            case 1:
                current_hours += full_time_wage;
                employee_wage += full_time_wage*wage_per_hr;
                total_full_time_days += 1;
                break;
            case 2:
                total_absent_time_days += 1;
                break;
            default:
                console.log("In default case");
                break;
        }
        total_employee_wage += employee_wage;
        current_day += 1;
    }
    console.log("Total Absent Days = " +total_absent_time_days);
    console.log("Total Part Time Days = " +total_part_time_days);
    console.log("Total Full Time Days = " +total_full_time_days);
    console.log("Total Working Hours = " +current_hours);
    console.log("Total Working Days = " +current_day);
    console.log("Monthly Employee Wage = " +total_employee_wage);
}

//uc7
console.log("----------uc7---------");
class Employee{
    constructor(){
        console.log("Welcome to employee wage computation");
    }
    checkAttendance(){
        let key = Math.floor(Math.random()*10%3);
        switch(key){
            case 0:
                return 0;
                break;
            case 1:
                return 1;
                break;
            case 2:
                return 2;
                break;
            default:
                console.log("In default case");
                break;
        }
    }
    partTimeWage(){
        return part_time_wage*wage_per_hr;
    }
    fullTimeWage(){
        return full_time_wage*wage_per_hr;
    }
    absentWage(){
        return 0;
    }
    dailyWage(attendance){
        if(attendance == 0){
            return this.partTimeWage();
        }
        else if(attendance == 1){
            return this.fullTimeWage();
        }
        else{
            return this.absentWage();
        }
    }
    monthlyWage(){
        let total_wage = 0;
        for(let i=0;i<days_in_month;i++){
            total_wage += this.dailyWage(this.checkAttendance());
        }
        return total_wage;
    }
    restrictedHours(max_working_hours){
        let total_wage = 0;
        let current_hours = 0;
        let current_day = 0;
        let total_part_time_days = 0;
        let total_full_time_days = 0;
        let total_absent_time_days = 0;

        while(current_hours <= max_working_hours && current_day < days_in_month){
            let wage = this.dailyWage(this.checkAttendance());
            total_wage += wage;
            if(wage == 160){
                total_full_time_days += 1;
                current_hours += 8;
            }
            else if(wage == 80){
                total_part_time_days += 1;
                current_hours += 4;
            }
            else{
                total_absent_time_days += 1;
                current_hours += 0;
            }
            current_day += 1;
        }

        console.log("Total Absent Days = " +total_absent_time_days);
        console.log("Total Part Time Days = " +total_part_time_days);
        console.log("Total Full Time Days = " +total_full_time_days);
        console.log("Total Working Hours = " +current_hours);
        console.log("Total Working Days = " +current_day);
        console.log("Monthly Employee Wage = " +total_wage);
    }
}

var emp = new Employee();
console.log("Monthly wage = " +emp.monthlyWage());
console.log("-----------------------------------");
emp.restrictedHours(160);