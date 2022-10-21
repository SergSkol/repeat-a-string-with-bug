function sum(str, num) {
  let res = "";
  if (num<0) {return ""}
  for (let i=1;i<num;i++) {
    res += str;
  }
  return res;
}

function call(input1, input2) {
  let result = sum(input1, Number(input2));
  document.getElementById('result').innerHTML = input1+" * "+input2+" = "+result;
}