
// var name,age,country,id;
//     name = "Rayhan";
//     age = 24;
//     country = 'bangladesh';
//     id = 1479;

//     document.write(age,country,id+'<br>');
    

//     var number = 12.4678;

    
//     console.log (number.toPrecision(3));

//     var Num1,Num2;
//     Num1 = 5;
//     Num2 = 7;

//     document.write("Num1=" + Num1 + "& Num2 ="+ Num2+'<br>');

    // var cont=prompt("Enter Your Text : ");
    // document.write('Text length is='+ cont.length+'<br>');
    

//     var numberTimes = 100;

// for(var times = 0; times < numberTimes; times++) {
//     document.write("Number of times executed: " + times + " " + "<br>");
// }

// document.write("It's over.")

// var firstName =prompt ('firstName');
// var lastName =prompt('lastName');
// var fullName=firstName.concat(lastName);
// fullName = fullName.toUpperCase();
// document.write(fullName+'<br>');
// document.write('text length is :'+ fullName.length);
// Arithmetic operators + - % / * ++ --

// var Num1 = prompt('Enter First Number :');
// var Num2 = prompt('Enter Second Number:');
// Num1 = parseInt(Num1,10);
// Num2 = parseInt(Num2,10);
// var sum,sub;
// sum = Num1+Num2;
// sub = Num1-Num2;
// document.write('Addition' + sum +'<br>' );
// document.write('Subtraction is = '+ sub +'<br>');

//fahrenheit to celcius

// var fahrenheit = parseFloat(prompt('Enter Fahrenheit Tem :'));
// var temp = (fahrenheit-32)*5/9;
// document.write('Celcius temp is ='+temp+'C');

document.write('All Arithmetic Operation Input Those Numbrs'+ '<br>');

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8 +" C ";
  }
// var Num1,Num2,Num3;

// Num1=20;
// Num2=15;
// Num3=17;
// document.write(Num2>Num1 && Num3>Num1);

var Num1 = parseFloat( prompt('Enter First  Number :'));
var Num2 = parseFloat( prompt('Enter Second Number'));
var sum,sub,mul,div,module;
sum=Num1+Num2;
document.write(Num1 + '+' +Num2 +"=" + sum +'<br>' );

sub=Num1-Num2;
document.write(Num1 + '-' +Num2 +"=" + sub +'<br>' );

mul=Num1*Num2;
document.write(Num1 + '*' +Num2 +"=" + mul +'<br>' );

div=Num1/Num2;
document.write(Num1 + '/' +Num2 +"=" + div +'<br>' );

module=Num1%Num2;
document.write(Num1 + '%' +Num2 +"=" + module +'<br>' );



// control statement is two type 1.conditional con statement 2.loop control statement and other one is switch
