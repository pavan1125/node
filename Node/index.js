const process=require("process")

// console.log(process.argv)

const fs=require("fs")

// fs.writeFile("person.txt","hello World",()=>{console.log("written")})

// fs.writeFileSync("person.txt","hello India",{flag:"a"})

// const name=process.argv[2]
// fs.writeFileSync("person.txt"," hello"+name,{flag:"a"})

// fs.writeFile("file1.txt","file1 text",()=>{console.log("file 1 created")})
// fs.writeFile("file2.txt","file2 text",()=>{console.log("file 2 created")})


// const ReadFun= async()=>{
//      let file1=await(fs.readFile("file1.txt","utf8",(err,data)=>{
//         console.log(data)
//      }))
     
//      let file2=await(fs.readFile("file2.txt","utf8",(err,data)=>{
//         console.log(data)
//      }))
     
//     }
// ReadFun()

// fs.writeFileSync("address.txt","andhraPradesh",()=>{
//      console.log("created")
// })

 
//  let address=fs.readFileSync("address.txt","utf8",(err,data)=>{
//    console.log(data)
//  })

//  console.log(address)
 

//  const cosonantsFun=(val)=>{
//     let vowels=['a','e','i','o','u']
//     let count=0
//     for(let i in val){
//         if(!vowels.includes(val[i])){
//             count++
//         }
//     }
//     return count
//  }
 
//  function add(){
    
//     let address=  (fs.readFileSync("address.txt","utf8",(err,data)=>{
//         console.log(data)
//       }))
//     console.log(address)
 
//    let counts =cosonantsFun(address)
//     console.log( "consonants are" ,counts)
//     }
//  add()

// fs.unlink("person.txt",(err)=>{
//      if(err){console.log(err)};
//      console.log("deleted")
// })

//assignments


// let jsonData=[ 

//     { 

//         "name":"Harshit", 

//         "password":"1234" 

//     }, 

//     { 

//         "name":"Vasu", 

//         "password":"12345" 

//     }, 

//     { 

//         "name":"Zeel", 

//         "password":"987456" 

//     }, 

//     { 

//         "name":"Bhargav", 

//         "password":"748574" 

//     } 

// ] 
// fs.writeFile("userData.json",JSON.stringify(jsonData),()=>{
//      console.log("created")
// })




