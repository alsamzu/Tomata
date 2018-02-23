////alert ("Hello Javascript");
////var myVar="Alsam is ..."
////document.write(myVar)
////var myAge=22;
////if(myAge==24){
////    document.write("\n You are Alsam")
////}
////else if(myAge <23){
////    document.write("\n You are Zulfa")
////}
////var myNum=5
////document.write(++myNum)
////myNum>6
////
////var x = 4
//// while(x<10){
////     document.write("You are under 10!\n")
////     x++;
//// }
////document.write("You are now over 10")
////
////var link = document.getElementsByTagName("a");
////
////for (c=1; c < link.length; c++)
////    {
////        document.write("This is link" +c)
////    }
////function getAvg(a,b){
////    var ag = (a+b)/2;
////    return ag;
////    
////}
////var res = getAvg(9,2);
////document.write(res);
////
//// 
//
////function add(x,y){
////    var z = document.write(x+y);
////}
////add(4,5);
//
//
////function nam(){
////    var name = prompt("Enter your name");
////  var c = alert("Hello," +name +"?"+ " How are you doing today");
////}
////nam();
////Area of a rectangle
////function  sqrarea(){
////    var x= prompt("Enter the length");
////    var z= prompt("Enter the width");
////    var y =x*z;
////    document.write('The area is : ' +y);
////}
////sqrarea();
//
//
////dollar conversion
////function doll(){
////    var d = prompt("Enter your amount in dollars");
////    var kes = d*105;
////    document.write("Your amount in Kes is: " +kes);
////}
////doll();
//function ksh(){
//    var n = prompt("Hello please enter your name");
//    var d = prompt("hey " +n+ " Enter your amount in Kes");
//    var dol = d/105;
//    var choice = prompt(n+" you have "+dol+" dollars. What do want: \n 1.Shoes@ 50$ \n 2.Top@ 100$ \n 3.Both@ 150$");
//   if(choice=1 && dol>=50){
//       alert(n+" you can get shoes");
//       
//   }
//    else (choice=1 && dol<50){
//        alert(n+" sorry you dont have enough money to get shoes");
//    }
//     if(choice=2 && dol>100){
//        alert(n+" you can get a top");
//    }
//    else (choice=2 && dol<100){
//        alert(n+" sorry you dont have enough money to get a top");
//    }
//    else if(choice=3 && dol>150){
//        alert(n+" you can get shoes and a top");
//    }
//    else if (choice=3 && dol<150){
//        alert(n+" sorry you dont have enough money to get a top and shoes");
//    }
////  if(dol>100){ alert( n+" "+dol+ " can buy you shoes and a top "  );}
////   else{
////       alert("sorry "+n+" "+dol+ " can buy you shoes only "  );
////    }
//}
//ksh();
//Maximum Number
//function max(x,y){
//    if(x>y){
//        document.write(x+" is greater than "+y);
//    }
//    else{
//        document.write(y+" is greater than "+x);
//    }
//}
//max(15,5);
////user input
//function maxi(){
//    var x =prompt("enter the first number");
//    var y =prompt("enter the second number");
//     if(x>y){
//        document.write(x+" is greater than "+y);
//         
//    }
//    else{
//        document.write(y+" is greater than "+x);
//    }
//}
//maxi();
//    AREA OF A CIRCLE

//function circle(){
// var x =prompt("Enter Radius");
//    var area = 3.14*x*x;
//    alert("Radius : "+x +" area: " +area);
//}
//circle();

//POSITIVE AND NEGATIVE NUMBERS
//function pos(){
//    var x=prompt("Enter first number ");
//    x=parseInt(x);
//    if(x>0){
//        alert(x+"is a positive number");
//    }
//    else if(x==0){
//        alert(x+"is equal to zero");
//        
//        
//    }
//    else{
//        alert(x+" is a negative number");
//    }
//}
//pos();


//Dollar Conversion

function doll(){
    var a =prompt("Welcome! \n Please enter your name");
    var b = prompt(a+" enter your amount in Kes");
    var c = b/105;

    var d = prompt(a+" you have "+c+" dollars.What would you like to buy \n 1.Top@ 50$ \n 2.Shoes@ 50$ \n 3.Both@ 150$");   
    
    
    if(d=1 && c>=50){
    alert("Thanks for purchasing the Top.");
    }
     else if(d=2 && c>=100){
    alert("Thanks for purchasing the Shoes.");
    }
    else if(d=3 && c>=150){
        alert("Thanks for purchasing Shoes and Top.");
    }
    else{
         alert("Thanks "+a+" for visiting "+c+" is not enough to purchase anything.");
    }
    
   
}
doll();

