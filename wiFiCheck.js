function ver() {
    if (navigator.onLine) {
        console.log("on")
    } else {
        console.log("off")
    }
setTimeout(()=>{ver()},2000)
}

ver()