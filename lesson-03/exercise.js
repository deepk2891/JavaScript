/*

    Lesson 3 : Exercises - Strings

    !!! NOTE : Do these Exercise in the console (right-click > inspect > Console)

*/

//  🟩3a. Create the text 'My name is:' as a string.
"My name is:";

//  🟩3b. Create your name as a string (for example:'deep').
"deep";

//  🟩3c. Using concatenation, add 2 strings from Exercise-3a & 3b together to create the text:'My name is deep'
"My name is " + "deep";

//  🟩3d. At a restaurant, you order 1 apple($5) and 1 banana($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost:$__'(replace__with total you calculated).
"Total cost : $" + (5 + 3);

//  🟩3e. Do the same thing as Exercise-3d, but use a template string and interpolation.
`Total cost : $${5 + 3}`;

//  🟩3f. Display the text from Exercise-3e in a popup using alert('...');
alert(`Total cost : $${5 + 3}`);

//  🟩3g. You order 1 coffee($5.99) and 1 apple($2.95). Using math, calculate the total cost, and using concatenation, create the text:'Total cost:$__'(hint:calculate in cents to avoid inaccuracies).
"Total cost : $" + (599 + 295) / 100;

//  🟩3h. Do the same thing as Exercise-3g, but use a template string and interpolation.
`Total cost : $${(599 + 295) / 100}`;

//  🟩3i. Display the text from Exercise-3h in a popup.
alert(`Total cost : $${(599 + 295) / 100}`);

//  🟩3j. Using a multi-line string, create the text from Exercise-3h and add a line of text underneath:'Thank you, come again!. Display both lines in a popup.
//         Total cost: $8.94
//         Thank you, come again!
alert(`
Total cost : $${(599 + 295) / 100}
Thank you, come again!
`);
