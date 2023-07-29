/*
    [Type Annotations with Fumctions]

    - noImplicitAny {}
    - noImplicitReturns {
        => Will check all code paths to a function to ensure they return a value
        => The function in default (javascript) returns undefined if you didn't specify return value
    }
    - noUnusedParameters {
        => Report errors on unused parameters within the function
    }
    noUnusedLocals {
        Enable error reporting when local variables are declared but never used read.
    }
*/
var showMsg = true;
function showDetails(name, age, salary) {
    var test = 10;
    if (showMsg) {
        return "Hello ".concat(name, " Your Age is ").concat(age, " and Sallary is ").concat(salary, " and test variables is ").concat(test);
    }
    return 100;
}
showDetails("Eslam", 21, 5000);
/********************************************************************************/
// Function Optional and Default Parameters L9
/*
1 => Optional parameters are parameters that can be omitted when calling a function.
They have default values assigned, so if the caller doesn't provide a value for that
parameter, the function will use the default value. If the caller provides a value for
    the optional parameter, it will override the default value.

    2 => Default parameters are another way to implement optional parameters. They are
    essentially the same as optional parameters but are set at the function definition
    instead of using a default value inside the function body.
    
    */
function getData(name, age, country) {
    return name + " " + age + " " + country;
}
console.log(getData("Eslam", 20));
/********************************************************************************/
// Function Rest Parameter
/*
    - Rest parameter
    - What about float => All under type number
*/
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     result += nums[i] 
    // }
    nums.forEach(function (num) { return result += num; });
    return result;
}
console.log(addAll(10, 20, 30, 40, 50, 10.5, +true));
