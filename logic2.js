const console=require("console")
const path = require('path');
const { promises: fs } = require('fs');
const stringSimilarity = require('string-similarity');

exports.filediff =async (folder1, folder2) => {
   const folderArray1 = await fs.readdir(path.join(__dirname, folder1))
   const folderArray2 = await fs.readdir(path.join(__dirname, folder2))
  //var furl=path.join(url,testusr.txt)
  console.log(url)
  // var data = fs.readFileSync('test1.txt', 'utf8');
   // console.log(data);
  var len1=folderArray1.length;
  var len2=folderArray2.length;
   for(var i=0;i<len1;i++){
       for(var j=0;j<len2;j++){
           if(folderArray1[i]==folderArray2[j]){
            var url= path.join(__dirname, folder1+'\\'+folderArray1[i]);
            var url1= path.join(__dirname, folder2+'\\'+folderArray2[j]);

             // console.log(url);
              //console.log(url1) ;
              // let data1 =await fs.readFileSync('test1.txt','utf8');
               //console.log(data1)
               try {
                var data1=await fs.readFile(url, "utf-8");
                var data2=await fs.readFile(url1, "utf-8");

              //  console.info("File Readed successfully!!!");
                //console.log(data1)
                //console.log(data2)
                if(data1==data2){
                    console.log("Content in "+ folderArray1[i]+" is Same as in Both Folder")
                }
                else{
                    console.log("Content in "+ folderArray1[i]+" is Different in Folder 1 and Different in Folder2");
                }

            } catch (error){
                console.error(error);
            }

           }
       }
   }
   
   // for (let files in folder1) {
     //   if (!folder2.includes(folder1[files])) {
           // tempDifference.push(folder1[files]);
       //    continue
        //}

       // let data1 = fs.readFileSync('test1.txt','utf8');
       // let data2 = fs.readFileSync('test2.txt','utf8');
        
       // var similarity = stringSimilarity.compareTwoStrings(data1,data2);
       // console.log(similarity);  
       // }
    }

