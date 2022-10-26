document.querySelector("li a").style.color="red";
document.querySelector("button").style.backgroundColor="yellow";
document.querySelector("h1").classList.add("huge");
//document.querySelector("li").innerHTML = "<em>HTMltag and texted has been added using the innerHTMl property</em>" ;
document.querySelector("ul :nth-child(2)").textContent = "text added by the textContent property";
document.querySelector("a").attributes; // return what attributes does this tag holds
document.querySelector("a").getAttribute("href"); // return the value of that attribute 
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // Changes the value of the attribute, this property 
// takes 2 arguments the first one is the attibute that you want to make changes to it or add it the second one the value you want.
// Create a new tag and added to an exsiting one using the method below.
let newItem = document.createElement("li");
let newText = document.createTextNode("This is added using create element and create text node property");
newItem.appendChild(newText)
document.querySelector("ul").appendChild(newItem);