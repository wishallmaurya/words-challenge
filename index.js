//! Reading the input file -----> and storing in an array.

const fs = require("fs");

time1=Date.now()
let input = [];
fs.readFile("./find_words.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  input.push(data.split("\n"));
  //! All the Words are stored in the array named words
  words = input[0];
  //! Finding Words List in csv file
  var csv = require("csvtojson");

  // Convert a csv file with csvtojson
  csv()
    .fromFile("./french_dictionary.csv")
    .then(function (jsonArrayObj) {
      for (i = 0; i < words.length; i++) {
        let finding = words[i];
        for (j = 0; j < jsonArrayObj.length; j++) {
          if (finding == jsonArrayObj[j].English) {
            aa=jsonArrayObj[j].English
            bb=jsonArrayObj[j].French
 
            fs.readFile("./t8.shakespeare.txt", "utf8", (err, output) => {
              if (err) {
                console.error(err);
                return;
              }
        
              const replaced = output.replace(aa,bb);

              fs.writeFile('./output.txt', replaced, 'utf-8', function (err) {
                console.log(err);
              });

                
            });

          }
          
        }
      }
      time2=Date.now()
    const used = process.memoryUsage().heapUsed
    console.log(`total time taken${time2-time1}ms`)
    console.log(`Used memory${used}`)
    console.log(`Times Replaced ${jsonArrayObj.length}`)
    console.log(`List of array which is replaced${input}`)
    });
});

