//  'Basic Syntax of Switch'

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

        // Agar inn cases ke andar "break" keyword ni lagayenge toh uske neeche ka jo code wo saara execute kardega "EXCEPT ->> default"

    default:
        console.log("Default case matched");
        break;
}           