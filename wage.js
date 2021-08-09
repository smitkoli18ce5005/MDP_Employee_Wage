//uc1
console.log("----------uc1---------");
console.log("Welcome to employee wage computation");

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
