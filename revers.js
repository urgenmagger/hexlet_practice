/*Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед используя рекурсию.*/
//Например:
//reverseString('str'); // rts
/*reverseString('hexlet'); // telxeh*/

const length = (str) => str.length;
const substr = (str, ffset, length) => str.substr(ffset, length);




const reverse = (str) => {
  let len = str.length;
  let res = '';
  res  =  substr(str, 0,len-1);
  let newStr = str[len - 1];
 if(res.length === 0){//terminal
   return newStr; 
 }
  return newStr + reverse(res);

}
console.log(reverse("hexlet"));
