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

let text = "aabbcacdab"
console.log(text.match(/a+b?/g)); // op: we can see the middle a also in the output

// start and end character matching
const pattern1 = /^[a-z].+[0-9].+$/igm
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


 /*QUESTION 1:
    Complete the function in the editor below by returning a RegExp object,
    that matches any string  satisfying both of the following conditions:

    String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
    The remainder of string  (i.e., the rest of the string after the prefix) 
    consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
 */
log("---------------------- Mr and Mrs question -------------------------")
// use backslash to denote special characters \.
const pattern4 = /(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+/

log(pattern4.test("Mr.sabari"))
log(pattern4.test("Mr .sabari"))
log(pattern4.test("MR sabari"))
log(pattern4.test("Dr#Joseph"))

/*QUESTION 2:
Complete the function in the editor below by returning a RegExp object, 
that matches every integer in some string .

Sample Input
102, 1948948 and 1.3

Sample Output 
102
1948948
1
3

Explanation 
When we call match on string  and pass the correct RegExp as our argument, 
it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].
*/
log("------------------- Finding digits question -----------------------")
const pattern5 = /\d+/g
log("patt12345ern56 8.1".match(pattern5))

/*
\w - matches all the words(alphanum)
\W - matches all the non-words(alphanum)
\s - matches all the space characters
\S - matches all the non-space characters
*/
