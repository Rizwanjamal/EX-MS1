function reverse_a_number(n)
{
	n = n.toString();
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));