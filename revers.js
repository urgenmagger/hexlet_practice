const length = (str) => str.length;
const substr = (str, ffset, length) => str.substr(ffset, length);




const reverse = (str) => {
  let len = str.length;
  let res = '';
  res  =  substr(str, 0,len-1);
  let ves = res[res.length-1]; 
  let one = str[0];
  let newStr = str[len - 1];
 if(res.length ===0){
   return newStr; 
 }
  //console.log(res[res.length-1]);
  return newStr + reverse(res);

}
console.log(reverse("hexlet"));
//res[res.length-1]
