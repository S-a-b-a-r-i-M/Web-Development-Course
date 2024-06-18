// Regex literals are enclosed between slashes (/pattern/flags).
log = console.log
let about = "my name is sabari.I'm from karur"

// search from position
console.log(about.search(/from/i)); // i for case-insensitivity 
console.log(about.search(/i/)) //if a pattern is occurred more than a time, it'll return the first occurrence
console.log(about.search(/z/)) // -1 for not occurred value

// replace a pattern
console.log(about.replace(/from/,"to"));  // returns a new string
console.log(about); // there is no affect in the original string
console.log(about.replace(/z/,"ggg")); // returns the string without any return values

// global match
console.log(about.match(/i/g)); // returns array of matched words
console.log(about.match(/nithika/g)) // null for not occurred value

// d  -  Perform start and end matching
let text = "aabbccdd"
console.log(text.match(/(aa)b/d));

// start and end character matching
const pattern1 = /^[a-z].+[0-9].+$/igm
console.log("Murugan0".match(pattern1)); // -> returns an array containing matching strings
log(pattern1.test("Murugan")) // -> returns bool 
 // pattern1 explanation
 /*
 ^             #  Represents beginning of a line
 [a-z]         #  Alphabetic character
 .+            #  Any character 1 or more time
 [0-9]         #  Digits
 $             #  End of a line
 i             #  Case-insensitive match
 g             #  Global
 m             #  Multiline */


 // RegExp class
text = "007james bond"
let text2 = "alphabe" 
const pattern2 = new RegExp(`^[aeiou].*[aeiou]$`)
log(pattern2.test(text2))
/*Explanation
The regex pattern ^[aeiou].*[aeiou]$ can be explained as follows:

^[aeiou]: The string must start with a vowel (a, e, i, o, or u).
.*: There can be zero or more of any characters (including no characters at all) between the two vowels.
[aeiou]$: The string must end with a vowel (a, e, i, o, or u).
*/

const pattern3 = new RegExp("^([aeiou]).*\\1$")
log(pattern3.test("orango")) // \1$: Ensures the last character matches the first captured letter.
/*The parentheses ([a-zA-Z]) in the regex pattern create a capturing group. 
A capturing group allows you to capture a part of the string and reference it later
 in the pattern using a back reference.*/