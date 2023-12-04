javaScript zero to hero 

day 1: setting up the browser and environment.

topis: basics

  we learn how to pop-ups in website with the help of js.

alert("Hello world");
alert("good job");
documet.body.innerHTMl='Hello';

chapter 2:  number and maths
 
 order for operation:

multiply > divide > add > subtract

priority in operation :

multiply is greater then divide and add is more priotise than subtract.

if priority is same than it is calculated from left to right.

if we use () to control which part is dine first.

() hve the highest priority.

for calculating percentage, we must use decimal.

wired behavior of number

1) whole no is called integer. ig: 1, 2.

2) decimal no are float, ie .2, 5.2.
computer can only read binary no due which the float can have some issue in  calculating. so avoid decimal. calute in integer.

Round the number:

Math.round(2.2) = 2

Math.ceil(2.2) = 3

Math.floor(4.6) = 4

Chapter-3: strings

strings =text.

Synatx for writing strings

a) sroound the text by single qoutes.

b) add stings together.
'some' + 'text' = 'sometext'

c) we can add more stings together.
'some' + 'more' + 'text' = 'somemoretext' . This is called concatennaton (combine strings together.)

There two type of values in javascript.
numbers and strings

we can check through this code.
typeof sapace and value.

d) if we add strings and number, then js will automatically convert number into string.
'heelo' + 3 = 'heelo3'
this is called type coercion (automatic type conversion.)

e) strings also follow the order of operation.
'$' + (20.95 + 7.99) = '$28.9399999999'

* when calculating money 
a) convert in cents
b) convert in dollars.

*There are 3 way to create strings in js.

1) single quotes ' ----'  // double qoutes "-----"
there is no difference in results in both but. we can use double quotes where their is single qoute inside string.
"I'm learning javascript." 

2) Escape character " 1 letter / number /symbol"
charcter can be letter , number symbol.

Escape charcter 

"\n - start new line"
"\'  back slash is a charcter, has no meaning no start no end."
"\" create double quote"

3) back ticks are called template strings. because of having special features.
a) interpolation: insert value directly into the strings.
`Items(${1+1}): $${(2095+799) /100}`= 'Items(2): $28.94'

b) next feature --multi line strings
`some
text` = 'some\ntext'
