let array = [
"https://images.pexels.com/photos/639119/pexels-photo-639119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
"https://images.pexels.com/photos/1303090/pexels-photo-1303090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126",
"https://images.pexels.com/photos/383646/pexels-photo-383646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.pexels.com/photos/40541/christmas-snow-snowman-decoration-40541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.pexels.com/photos/1684236/pexels-photo-1684236.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", 
"https://images.pexels.com/photos/177555/pexels-photo-177555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
"https://images.pexels.com/photos/814266/pexels-photo-814266.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",

];

let js = document.getElementById("js")

for (let i = 0; i < array.length; i++) {
js.innerHTML += '<img src=' + array[i] + ' class="img' + [i] + '"/>';
}