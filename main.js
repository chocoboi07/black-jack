let cards = document.getElementById("card").innerHTML;
let sum = document.getElementById("sum").innerHTML;
let inst = document.getElementById("ins").innerHTML;
let m = document.getElementById("money").innerHTML;
let money = m.slice(1);

let v = parseInt(money);

let a = Math.floor(Math.random()* 10)
let b = Math.floor(Math.random()* 10)

document.getElementById("card").innerHTML = cards +" "+a+","+b;

var lcards = [a,b];
cd = a + b 
	document.getElementById("sum").innerHTML = sum +" "+cd

function sumarray(array) {
	let sum = 0;
	 for(let i=0;i< lcards.length;i+=1){
	 	sum += lcards[i];
	 }
	return sum;
}

function newcard() {
	lcards.push( Math.floor(Math.random()* 10));
	document.getElementById("card").innerHTML = cards +" "+ lcards;
	var lsum = sumarray(lcards)
	document.getElementById("sum").innerHTML = sum +" "+ lsum;

	if (lsum==21 ) {
		document.getElementById("ins").innerHTML = '" '+"BLACK JACK"+' "'
		document.getElementById("btn").disabled = true;
		document.getElementById("btn2").disabled = false;
		money = v + 100
		document.getElementById("money").innerHTML = "$ "+money
	}

	else if (lsum>21) {
		document.getElementById("ins").innerHTML = '" '+"GAME OVER"+' "'
		document.getElementById("btn").disabled = true;
		document.getElementById("btn2").disabled = false;
		money = v - 100
		document.getElementById("money").innerHTML = "$ "+money
	}

	else{
		document.getElementById("ins").innerHTML = '" '+"GET NEW NUMBER"+' "'
		document.getElementById("btn2").disabled = true;
	}
}

function con() {
	window.location.reload();
}