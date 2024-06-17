function toCase(text) {
  // write your code here
	let ans =""
ans += text.toLowerCase();
ans += "-"
ans +=text.toUpperCase();
return ans;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
