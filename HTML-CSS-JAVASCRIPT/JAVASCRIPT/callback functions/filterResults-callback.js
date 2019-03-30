var studentResults = [
{
	name: 'Sylvester',
	html: 90,
	css: 80,
	javascript: 60
},
{
	name: 'Talha',
	html: 90,
	css: 80,
	javascript: 2
}
];
function passedStudents(record) {
	return record.javascript > 50
}
studentResults.filter(passedStudents)