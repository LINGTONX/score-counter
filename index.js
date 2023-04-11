let homeScore = document.getElementById("home-scorebox")
let guestScore = document.getElementById("guest-scorebox")
let scorehome = 0
let scoreguest = 0

function add1Score(){
    scorehome += 1
    homeScore.textContent = scorehome
}
function add2Score(){
    scorehome += 2
    homeScore.textContent = scorehome
}
function add3Score(){
    scorehome += 3
    homeScore.textContent = scorehome
}

function add1Scores(){
    scoreguest += 1
    guestScore.textContent = scoreguest
}
function add2Scores(){
    scoreguest += 2
    guestScore.textContent = scoreguest
}
function add3Scores(){
    scoreguest += 3
    guestScore.textContent = scoreguest
}

function reset(){
    guestScore.textContent = 0
    homeScore.textContent = 0
    scorehome = 0
    scoreguest = 0
}