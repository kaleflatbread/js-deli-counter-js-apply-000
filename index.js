// takeNumber(katzDelinLine) => 'Welcome. You're number 1.'
// takeANumber(katzDeliLine) => 'Welcome. You're number 2.'
// nowServing(katzDeliLine) => 'Currently serving #1'
// takeANumber(katzDeliLine) => 'Welcome. You're number 3.'
var number = 1
function takeANumber(katzDeliLine){
  katzDeliLine.push(number);
  return `Welcome. You're number ${number++}`;
}

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }else{
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
  var line = [];
  for(var i = 0;i<katzDeliLine.length;i++){
    line.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently: " + line.join(", ");
  }
}