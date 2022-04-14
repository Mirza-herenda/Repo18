
let myArr=[];
function *multiplication(x) 
{
 for(let i =1;i<x;i++)   
 {
     x=x*2;
     yield x;
     myArr.push(x);
 }
}
const num=multiplication(3);

for(let i =0;i<num;i++)
{
    console.log(num);
  
}
console.log(num.next());
console.log(num.next());
console.log(num.next());





