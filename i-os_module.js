const os=require('os');
const user=os.userInfo();
//console.log(user)
const time=os.uptime()
//console.log(`The system is up for ${time} seconds`)
const currentOs={
    name:os.name,
    release:os.release,
    freemem:os.freemem,
    usedmem:os.usedmem,

}
console.log(currentOs)