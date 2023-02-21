// Everybody knows the classic "half your age plus seven" dating rule that a lot of people 
// follow (including myself). It's the 'recommended' age range in which to date someone.

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float 
// (which doesn't represent age). Return your answer in the form [min]-[max]

// Examples
// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

// My solution
function datingRange(age){
    let minAge = Math.floor(age/2 + 7);
    let maxAge = Math.floor((age - 7)* 2);
    let under14Min = Math.floor(age - 0.10 * age);
    let under14Max = Math.floor(age + 0.10 * age);
    
    return age <= 14 ? `${under14Min}-${under14Max}` : `${minAge}-${maxAge}`
  }