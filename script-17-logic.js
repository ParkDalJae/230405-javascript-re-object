

const nameValue = {
  name:"parkdaljae",
  age:20,
  email:"parkdaljae@gmail.com"
}
let oppend = ["parkdaljae",20,"parkdaljae@gmail.com"]
let target = []

function isNameCheck(key,value){
  if(key===value){
    return  true;
  }else{
    return false
  }
}

for(let key in nameValue){
  target.push(nameValue[key])
}

oppend.forEach((Element,index)=>{
  if(target[index]){
    console.log(isNameCheck(Element,target[index]))
  }else{
    console.error("not found")
  }
})


