function getWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("good")
          },100)
        setTimeout(()=>{
          reject("404")
        },100)
    })
}
function onSuccess(data){
    console.log(data)
}
function onError(err){
    console.log(`error: ${err}`)
}
getWeather()
.then(onSuccess)
.catch(onError)
.finally(()=>{
    console.log("finally")
})