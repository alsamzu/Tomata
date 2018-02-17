alert ("Hello Javascript");
var myVar="Alsam is ..."
document.write(myVar)
var myAge=22;
if(myAge==24){
    document.write("\n You are Alsam")
}
else if(myAge <23){
    document.write("\n You are Zulfa")
}
var myNum=5
document.write(++myNum)
myNum>6

var x = 4
 while(x<10){
     document.write("You are under 10!\n")
     x++;
 }
document.write("You are now over 10")

var link = document.getElementsByTagName("a");

for (c=1; c < link.length; c++)
    {
        document.write("This is link" +c)
    }
function getAvg(a,b){
    var ag = (a+b)/2;
    return ag;
    
}
var res = getAvg(9,2);
document.write(res);

 