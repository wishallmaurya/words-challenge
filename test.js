// // let t8=[
// //     { English: 'abide', French: 'respecter' },
// //   { English: 'about', French: 'sur' },
// //   { English: 'above', French: 'au dessus' },
// //   { English: 'abroad', French: "à l'étranger" },
// //   { English: 'absence', French: 'absence' },
// //   { English: 'abuse', French: 'abuser de' },
// //   { English: 'according', French: 'selon' },
// //   { English: 'account', French: 'Compte' },
// //   { English: 'accuse', French: 'accuser' },
// //   { English: 'acquainted', French: 'connaissance' },
// //   { English: 'action', French: 'action' },
// //   { English: 'advantage', French: 'avantage' },
// //   { English: 'advice', French: 'Conseil' },
// //   { English: 'affairs', French: 'affaires' },
// //   { English: 'affection', French: 'affection' },
// //   { English: 'affections', French: 'affections' },
// //   { English: 'afraid', French: 'peur' },
// //   { English: 'after', French: 'après' },
// //   { English: 'afterwards', French: 'ensuite' },
// //   { English: 'again', French: 'encore' },
// //   { English: 'alive', French: 'vivant' },
// //   { English: 'almost', French: 'presque' },
// //   { English: 'alone', French: 'seul' },
// //   { English: 'along', French: 'le long de' },
// //   { English: 'already', French: 'déjà' },
// //   { English: 'although', French: 'bien que' },
// //   { English: 'always', French: 'toujours' },
// //   { English: 'ambition', French: 'ambition' },
// //   { English: 'ancient', French: 'ancien' },
// //   { English: 'angel', French: 'ange' },
// //   { English: 'anger', French: 'colère' },
// //   { English: 'another', French: 'un autre' },
// //   { English: 'answer', French: 'répondre' },
// //   { English: 'anything', French: "n'importe quoi" },
// //   { English: 'apparel', French: 'vêtements' },
// //   { English: 'appear', French: 'apparaître' },
// //   { English: 'appears', French: 'apparaît' },
// //   { English: 'approach', French: 'approche' },
// //   { English: 'argument', French: 'argument' },
// //   { English: 'ariel', French: 'Ariel' },
// //   { English: 'armour', French: 'armure' },
// //   { English: 'aside', French: 'de côté' },
// //   { English: 'asleep', French: 'endormi' },
// //   { English: 'assure', French: 'assurer' },
// //   { English: 'athens', French: 'Athènes' },
// //   { English: 'attend', French: 'assister' },
// //   { English: 'attended', French: 'assisté' },
// //   { English: 'authority', French: 'autorité' },
// //   { English: 'avoid', French: 'éviter' },
// //   { English: 'awake', French: 'éveillé' },
// //   { English: 'awhile', French: 'quelque temps' },
// //   { English: 'banish', French: 'bannir' },
// //   { English: 'barren', French: 'Dénudé' },
// //   { English: 'bassianus', French: 'bassianus' },
// // ]
// // console.log(t8[0].English,t8[0].French)



// // // arr=[1,2,3]
// // // console.log(arr)

// // // time1=Date.now()
// // // for(i=0;i<1000;i++){

// // //     if(x[i]=="dance"){

// // //         console.log(x[i])
// // //     }
// // // }
// // // time2=Date.now()
// // // console.log(time2-time1,"ms time taken to process")

// data=['hello','hey','this','hey','hey']
// // if( >= 0){
//     for(i=0;i<data.length;i++){

//       x= data.indexOf('hey')
//       console.log(x)
//       data[x]='hello'
//     }
//     console.log(data)
// //    }

const fs = require("fs");
const {readFile, writeFile} = require('fs');
let input = [];
fs.readFile("./t8.shakespeare.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // input.push(data.split("\n"))
  // console.log(input)
  const replaced = data.replace("This", 'hey hello its me');
  val=data.indexOf("this")

// console.log(replaced)
writeFile('./example.txt', replaced, 'utf-8', function (err) {
  console.log(err);
});

})


//   console.log(data[2])

//   for(i=0;i<data.length;i++){
//    if(data[i]=='this'){
//     console.log(data[i])
//    }
//   }