let array = [1,3,1,2,5,6,7,3,1,1,3,5,6,3];
let data = {}
for (let i = 0; i < array.length; i++) {
   if(data[array[i]] === undefined){
        data[array[i]] = 1;
   }else{
       data[array[i]] += 1;
   }
}
console.log(data);

let variable1 = alert("Hai");