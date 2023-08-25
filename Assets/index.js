// // function createCheckDigit(membershipId) {
// //    var acc=0;
// //         for(let i=0;i<membershipId.length;i++){
// //             acc+=Number(membershipId[i])
// //         }
// //     return acc<10?acc:createCheckDigit(acc.toString()); 
// //   }
// // function createCheckDigit(membershipId) {
// //     let acc = 0;
// //     for (let i = 0; i < membershipId.length; i++) {
// //       const charCode = membershipId.charCodeAt(i);
// //       if (charCode >= 48 && charCode <= 57) { // Check if character is a digit
// //         acc += Number(membershipId[i]);
// //       }
// //     }
// //     return acc < 10 ? acc : createCheckDigit(acc.toString());
// //   }
  
//   // console.log(createCheckDigit("55555"));
// //   console.log(createCheckDigit("55555"));
// function setup() {
//   let buttons=document.query  SelectorAll('.remove');
//   buttons[0].addEventListener('click',()=>{
//     buttons[0].parentElement.remove();
//   })
//   buttons[1].addEventListener('click',()=>{
//     buttons[1].parentElement.remove();
//   })
  
// }

// // Example case. 
// document.body.innerHTML = `
// <div class="image">
//   <img src="https://bit.ly/3lmYVna" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://bit.ly/3flyaMj" alt="Second">
//   <button class="remove">X</button>
// </div>`;

// setup();

// // document.getElementsByClassName("remove")[0].click();
// console.log(document.body.innerHTML);
// function createCheckDigit(membershipId) {
//   // Write the code that goes here.
//   let acc=0;
//   if(membershipId>10){
//   for(let i=0;i<membershipId.length;i++){
//    acc+=Number(membershipId[i]); 
//   }
//   createCheckDigit(acc.toString());
//   }
  
//     return acc;
  
  
// }

// console.log(createCheckDigit("55555"));
let str='    Krishnan    ';
let str2=' kangaraj'
// let len=10;

console.log(str.trim()+(str2.trim()))