export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    timeDurationCalc,
    tooltipDate,

}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}


// calculate time between adding post and now to display in  header story and Tooltip as original date
function timeDurationCalc(createdAtTimestamp) {
    var now = Date.now()
    // console.log("now ", now)

    // var tooltipDate = new Date(createdAtTimestamp)
    var timeDifference = now - createdAtTimestamp
    
    // console.log("createdAtTimestamp ", createdAtTimestamp)
    // console.log("tooltipDate ", tooltipDate)
    // console.log("timeDifference ", timeDifference)

    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    var weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor(timeDifference / (1000 * 60));

    // console.log("years", years)
    // console.log("months", months)
    // console.log("weeks", weeks)
    // console.log("days", days)
    // console.log("hours", hours)
    // console.log("minutes", minutes)

    var timeDifference

    if (years > 0) {
        timeDifference = years + "y"
    } else if (months > 0) {
        timeDifference = months + "mo"
    } else if (weeks > 0) {
        timeDifference = weeks + "w"
    } else if (days > 0) {
        timeDifference = days + "d"
    } else if (hours > 0) {
        timeDifference = hours + "h"
    } else {
        timeDifference = minutes + "min"
    }

    // console.log("timeDifference", timeDifference)

    // const tooltipHebDate = tooltipDate.toLocaleDateString("he-IL", { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' })

    // const timePassedSincePosting = { timeDiff: timeDifference, toolTip: tooltipHebDate }

    return (timeDifference)
}

function tooltipDate(createdAtTimestamp) {
    const tooltipDate = new Date(createdAtTimestamp)
    const tooltipEnDate = tooltipDate.toLocaleDateString("en-EN", { year: 'numeric', month: 'short', day: 'numeric' })

    return (tooltipEnDate)
}
//**********************    ////HEBREW DATE
// function tooltipDate(createdAtTimestamp) {
//     const tooltipDate = new Date(createdAtTimestamp)
//     const tooltipHebDate = tooltipDate.toLocaleDateString("he-IL", { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' })

//     return (tooltipHebDate)
// }
// function timeFromAddingPost_back(createdAtTimestamp, tooltipType) {
//     var now = Date.now()
//     console.log("now ", now)

//     var tooltipDate = createdAtTimestamp//new Date(createdAtTimestamp)
//     var timeDifference = now - createdAtTimestamp

//     if (tooltipType === "short") {

//         var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
//         var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
//         var weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
//         var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         var hours = Math.floor(timeDifference / (1000 * 60 * 60));
//         var minutes = Math.floor(timeDifference / (1000 * 60));

//         console.log("years", years)

//         var timeDifferenceTooltip

//         if (years > 0) {
//             timeDifferenceTooltip = years + "years"
//         } else if (months > 0) {
//             timeDifferenceTooltip = months + "months"
//         } else if (weeks > 0) {
//             timeDifferenceTooltip = weeks + "weeeks"
//         } else if (days > 0) {
//             timeDifferenceTooltip = days + "days"
//         } else if (hours > 0) {
//             timeDifferenceTooltip = hours + "hours"
//         } else {
//             timeDifferenceTooltip = minutes + "minutes"
//         }
//         console.log("timeDifferenceTooltip", timeDifferenceTooltip)
//         return (timeDifferenceTooltip)

//     } else if (tooltipType === "hebrew") {

//         const tooltipHebDateText = tooltipDate.toLocaleDateString("he-IL", { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' })

//         return (tooltipHebDateText)
//     } else {
//         return ("no tooltip type was given")
//     }
// }