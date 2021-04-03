//2
// document.write("<table border='1px'>");

// for(var i = 1; i < 10; i++) {

// 	document.write("<tr style='height:30px;'>");

//     for(var j = 1; j < 10; j++) {

// 		document.write("<td style='width:30px';>" + i*j + "</td>");
//     }
    
// 	document.write("</tr>");
// }

// document.write("</table>");


//3
shape = {
    type: 'shape',
    getType: function (){
        return this.type;
        }
}

function triangle( a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triangle';
}
  
triangle.prototype = shape;

triangle.prototype.constructor = triangle;

triangle.prototype.getPerimeter = function (){
    console.log('get perimeter');
    var ans = this.a + this.b + this.c;
    return ans;
}

// testing 3
var t = new triangle(2,3,6);
console.log(t.constructor === triangle);
console.log(shape.isPrototypeOf(t));      
console.log(t.getPerimeter());            
console.log(t.getType()); 

// 3.c (ზუსტად ვერ მივხვდი და თვითონ t-ს მნიშვნელობები დავლუპე)
const values = Object.values(t)
for (const values of values) {
  console.log(value)
}

// last exercise (3.d)
Array.prototype.shuffle = function() {
    var i = this.length, j, t;
    if ( i == 0 ) return this;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       t = this[i];
       this[i] = this[j];
       this[j] = t;
    }
    return this;
  }

var v = [1,2,3,4,5];
var m = v.shuffle();
console.log(m);