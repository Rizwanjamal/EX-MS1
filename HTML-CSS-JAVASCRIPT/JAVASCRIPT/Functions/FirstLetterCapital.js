function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  newArray = array1.map(function (val) {
    return val.charAt(0).toUpperCase()+val.slice(1)
  })

  //for(var i=0;i<array1.length;i++){
  //   newArray.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1))
  //}
  return newArray.join(' ');
}