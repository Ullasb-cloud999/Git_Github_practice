let number=0;
const limit = 10;
const intervaild = setInterval(()=>{
    console.log(number);
    number++;
   if (number===limit){
       clearIntervaild(intervaild);
       console.log("Reached the limit.Stopping the increment.");
   } 
},1000);