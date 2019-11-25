



let x1 = 5, y1 = 1,
	x2 = 5, y2 = 5,
	a = x1-x2,
	b = y1-y2;

let angle = Math.atan2(a, b); // get the angle
let h = Math.hypot(a, b); // get the length

console.log( 
	Math.round(Math.sin(angle)*h) , Math.round(Math.cos(angle)*h)
)// sine of angle = a/c 
