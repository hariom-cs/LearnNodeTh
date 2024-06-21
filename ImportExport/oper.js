const sub=(a,b)=>{
    return a-b;
}
const add=(a,b)=>{
    return a+b;
}
const mult = (a,b)=>{
    return a*b;
}
const name ="Hariom";

// module.exports.name=name;
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;

//above 4 line is equivalent to below 1 line.

module.exports ={add, sub, mult,name}

