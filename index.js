let startDate = new Date('2021-03-21')


function getTimeRemaning() {
    let now = new Date()
    const t = Date.parse(startDate) - Date.parse(now);
    const days = Math.floor(t/(1000 * 60 * 60 * 24))
    const hours = Math.floor((t % (1000 * 60 * 60 * 24))  / (1000 *60 * 60))
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60) )
    const seconds = Math.floor((t % (1000 * 60)) / 1000 )
    
    function getZero(n) {
        if (n < 10) {
            return `0${n}`
        } else {
            return n
        }
    }
    const time = `${getZero(days)}d : ${getZero(hours)}h : ${getZero(minutes)}m : ${getZero(seconds)}s`
    return time
}

const timer = setInterval(setTime, 1000)
function setTime(startTime) {
    const t = getTimeRemaning(startTime)
    document.querySelector('.countdown').innerText = t
}
setTime(startDate)