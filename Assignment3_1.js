//first Question

function getArrLength(...args){
  var length = args.length;
}

console.log(getArrLength(1));

function multiplyByTwo(multiplier, ...args){
  return args.map(function(element){
    return multiplier * element;
  });
}

console.log(multiplyByTwo(2,4,5,7));

function sortRestArgs(...args) {
  var sortedArgs = args.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5,3,7,1));


//Second Question

var apiDetail = {
  baseUrl: 'http://www.google.com',
  methodType: 'POST'
  header: 'header'
};

function makeRequest(user){
  var {url, method, header} = user;
  $.ajax(url,method,header);
}