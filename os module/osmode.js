const os = require("os");

// console.log(os.arch());                                      //for checking free memory(RAM)
// console.log(`${os.freemem()/1024/1024/1024}`);               //return the bit value to 2^30*value to get into GB

// const totalMemory= os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());                                        //show the temporary folder where temp file stored 
console.log(os.type());                                          //show the type  of operating system