var image = [
    "father.png",
    "mother.png",
    "me.jpg",
    "brother.jpg"
];
var names =[
    "Nandkisor Kale",
    "Sanjivani Kale",
    "Akshad Kale",
    "Arnav Kale"
];
var i=0
function next(){
    if (i==4){
        i=0;
    }
    document.getElementById("image").src=image[i];
    document.getElementById("Name").innerHTML=names[i];
  i++;
}