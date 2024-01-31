function delayLog(message, delay){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay)
    })
}

async function printSequence(){
    await delayLog('a',0);
    await delayLog('b',0);
    await delayLog('c',3000);
    await delayLog('d',0);
    await delayLog('e',0);
}
printSequence()