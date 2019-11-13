
// user can do= click on rock paper or scissors
// user can expect= rock>scissor, rock<paper, paper<scissor
// user can see= the score if they win it goes up, if lose then bot score goes up




let btn = document.querySelectorAll("button")
let yourScore = document.querySelector("#yourScore")
let botScore = document.querySelector("#botScore")
let choices = ['Rock', 'Paper', 'Scissor','Spock','Lizard']
let rock = document.querySelector('#Rock')
let paper = document.querySelector('#Paper')
let scissor = document.querySelector('#scissor')
let tie=document.querySelector('h4')
let botcount = ""
let yourcount=""


btn.forEach(el => {
  el.addEventListener('click', () => {

    let input = event.target.id
    console.log(input)

    logic(input)
  })
})

function logic(click) {
  let ran = Math.floor(Math.random() * choices.length)
  console.log(choices[ran])
  console.log(ran)

  if (click === choices[ran]) {

    tie.innerHTML = "tie"

  } else if (click === "Rock" && choices[ran] === 'Scissor') {
    yourScore.innerHTML = ++yourcount


  } else if (click === "Paper" && choices[ran] === 'Scissor') {
    botScore.innerHTML = ++botcount


  } else if (click === 'Scissor' && choices[ran] === 'Rock') {
    botScore.innerHTML = ++botcount


  }else if(click === "Rock" && choices[ran] === 'Paper'){
    botScore.innerHTML=++botcount


  } else if(click === 'Scissor' && choices[ran] === 'Paper'){
    yourScore.innerHTML=++yourcount


  } else if(click==='Paper'&& choices[ran]==="Rock"){
    yourScore.innerHTML=++yourcount


  }else if(click==="Spock"&& choices[ran]==="Scissor"){
    yourScore.innerHTML=++yourcount
  } else if(click==='Lizard'&& choices[ran]==="Spock"){
    yourScore.innerHTML=++yourcount
  }else if(click==="Rock"&& choices[ran]==="Lizard"){
      yourScore.innerHTML=++yourcount
  } else{
      yourScore.innerHTML=++yourcount
  }

}


//
// function logic(click){
// if(click===choices[0]&& click!==choices[1]&&click !==choices[2]){
//   yourScore.html="tie"
// }else if(click===choices[1]&& click!==choices[0]&&click !==choices[2]){
//   yourScore.html="tie"
// } else if(click===choices[2]&& click!==choices[1]&&click !==choices[0]){
//
// }else if(click===choices[0]){
//
// }
//
// }
