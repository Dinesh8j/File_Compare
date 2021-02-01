const { Console } = require('console');
const { promises: fs } = require('fs');
const path = require('path');
var flag=0;
exports.compare =async (folder1, folder2) => {
    console.log("\n"+path.join(__dirname, folder1)+"\n");
   const folderArray1 = await fs.readdir(path.join(__dirname, folder1))
   const folderArray2 = await fs.readdir(path.join(__dirname, folder2))
    //const folderArray1 = fs.readdir(path.join(__dirname, folder1))
    //const folderArray2 = fs.readdir(path.join(__dirname, folder2))
    const difference1 = findDifference1(folderArray1, folderArray2);
    const difference2 = findDifference2(folderArray2, folderArray1);
    //console.log([...folderArray1]);

}
const findDifference1 = (folder1, folder2) => {
   // let tempDifference = [];
   console.log("\n")
   console.log("FOLDER 1")
   console.log("\n")
    for (let files in folder1) {
        if (!folder2.includes(folder1[files])) {
           // tempDifference.push(folder1[files]);
         
            console.log(folder1[files]+" is an Extra file in folder 1");
            flag=1;       
        }
    }
}
const findDifference2 = (folder2, folder1) => {
   // let tempDifference = [];
   console.log("\n")
   console.log("FOLDER 2")
   console.log("\n")
    for (let files in folder2) {
        if (!folder1.includes(folder2[files])) {
           // tempDifference.push(folder2[files]);
            console.log(folder2[files]+" is an Extra File in folder 2");
            flag=1;
        }
    }
   // return tempDifference;
   if(flag==0){
       console.log("Both folders looks same");
   }
   }
   