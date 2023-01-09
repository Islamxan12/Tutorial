"use strict";
const email = document.querySelector(".email"),
      name = document.querySelector(".name")
      // formSubmit = document.querySelector(".form")

      localStorage.setItem('name', 'islam')






















// const arr = ["Bmw", "MERS", "Rang", "Rower"]

//   const car = arr.map( (item) => item.toLocaleUpperCase())

//   console.log(car);

  // const arr = [ "Bmwasd", "MERSasd", "Rang", "Rower"]

  //   const car = arr.filter((item) => item.length < 43)
  //   console.log(car);

  // const numbers = [21,22,34,44]
   
  // const res = numbers.reduce((sum, current) => sum + current)

  // console.log(res);

// const isFrendCome = true;

// const metRequest = new Promise((resolve, reject) => {
//   if (isFrendCome) {  
//     const msg = "i'm here";
//     resolve(msg);
//   } else {
//     const err = "i can't come here";
//     reject(err);
//   }
// });

// metRequest
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
  // .finally(() => console.log("tel ql xoshm"));

// const uzs = document.querySelector("#uzs"),
//       usd = document.querySelector("#usd")

// uzs.addEventListener("input", (e) =>{
//    const request = new XMLHttpRequest()

//    request.open("GET",  "json/current.json")
//    request.setRequestHeader("Content-Type", "application/json; charset=utf-8" )
//    request.send()

//    request.addEventListener("readystatechange", () =>{
//       if(request.readyState == 4 && request.status ==200){
//         console.log(request.response);
//         const data = JSON.parse(request.response)
//         usd.value = +(uzs.value / data.current.usd).toFixed(2)
//       }else{
//         usd.value = "Someting went wrong"
//       }
//    })
// })
