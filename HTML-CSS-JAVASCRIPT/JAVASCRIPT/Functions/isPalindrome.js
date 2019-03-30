function isPalindrome(word) {
    var wordArray = word.split('');
    var reverseWordArray = wordArray.reverse();
    var compareString = reverseWordArray.join('');
    console.log(word.toUpperCase() === compareString.toUpperCase());
    return word.toUpperCase() === compareString.toUpperCase();
 }
 isPalindrome('MAdam');
 
 a = ['a', 'b', 'c'];
 console.log(a.reverse())
 
 var url = 'https://www.google.com'
 var formatUrl = url.split("://")[1]
 console.log(formatUrl);