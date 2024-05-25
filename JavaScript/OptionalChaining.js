/*
// Define object
let student = {
    // member variables
    stu_name : "sabari",
    age : 21,
    salary : 30000,
    address : {
        city : "Karur",
        pincode : 639006
    },
    //member functions
    getSalary() {
        // return null
        // return {salary : null}
        return {salary : 30000}
    }
}
    // Traditional way to get city 
let city, salary

if (student && student.address && student.address.city) 
    city = student.address.city
else 
    city = "Unknown"

console.log('Traditional way to get a city', city)

    // Using optional chaining 
city = student?.address?.city || 'default value'
console.log('Using optional way to get a city', city)

    // Traditional way to get city 
if (student && student.getSalary()){
    const res = student.getSalary()
    if (res.salary)
        salary = res.salary
    else
        salary = 0
}
console.log('Traditional way to get salary', salary)

    // Using optional chaining
salary = student?.getSalary()?.salary || 0
console.log('Using optional chaining to get salary', salary)
*/

// Dynamic property access
// we have an array of users, where each user may or may not have a profile.
users = [
    {id: 1, profile: {user_name : 'sabari'}},
    {id: 2, profile: {user_name: null}},
    {id: 3, profile: null },
    {id: 4}
]
    // Traditional way
var names = users.map(
    user => {
        if(user.profile && user.profile.user_name)
            return user.profile.user_name
        else
            return "default name"
    }
)

console.log("Traditional way", names);

    // Using optional chaining
names = users.map(user => user?.profile?.user_name || "default name")
console.log("optional chaining way", names);