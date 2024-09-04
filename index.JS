const que= [
    {
    que:"1 Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a"
  },
  {
    que:"2 What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  },
  {
    que:"3 What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b"
  },
{
    que :"4 Pakistan became independent on ",
a:"13 august 1947",
b: "14 august 1947",
c: "15 august 1947",
d:  "12 august 1948",
correct: "b"
},
{
    que:"5 Where is residency of Qaud E Azam in Pakistan ",
a: "Ziarat",
b: "Islamabad",
c: "Rawalpindi",
d: "Lahore",
correct : "a"
},
{
que:" 6 Which of the following is the national animal of Pakistan ?",
a:"lion" ,
b : "goat",
c: "markhor",
d: "cow",
correct : "c"
},
{
que : "7 Which of the following is national animal of Pakistan ?",
a:"Dove",
b: "peacock",
c: "parrot" ,
d:"Chakor",
correct : "d",
},
{
que: "8 Which of the following  national tree of Pakistan ?",
a:"deodar" ,
b: "bedmushk",
c: "Peepal",
d:"Kikar",
correct :"a",
},
{
que:"9 which of the following national juice of the Pakistan",
a:" Mango Juice",
b:" Suger Can",
c:"Papya Juice ",
d: "Banan Juice",
correct:"b"
},
{
que : "10 which of the following is the national juice in the summer ?",
a:"Mango ",
b:"banan" ,
c:"akhrot ",
d:"Watermelon",
correct : "a"
}

]

let index = 0

let correct=0
//let right=0
let  wrong =0
 let total = que.length
const ques = document.getElementById("ques_box");
const optionIn = document.querySelectorAll('.option');

const loadQue = ()=>{
  
  if(index>=total){
    return endQuaiz();
  }
  reset();
  
  const data = que[index];
 
  ques.innerText =`${index+1}) ${data.que}`;
optionIn[0].nextElementSibling.innerText = data.a;
optionIn[1].nextElementSibling.innerText =data.b;
optionIn[2].nextElementSibling.innerText = data.c;
optionIn[3].nextElementSibling.innerText = data.d;
  };


const submitQuaiz = ()=>{
  if(index>=total){
    return endQuaiz();
  }
  const data = que[index];
  const ans = getAns();
 
  if(ans === data.correct){
    correct++;
  }else{
    wrong++;
  }
index++;
loadQue();



};
const getAns = ()=>{
  let ans;
  
  optionIn.forEach(
    (input)=>{
      if(input.checked){
        
        ans = input.value
       
      }
  })
  return ans;

}
const reset = ()=>{
  optionIn.forEach( 
    (input)=>{
      input.checked = false;
  })
}

const endQuaiz = ()=>{
  document.getElementById("box").innerHTML =`
  <div style="text-align:center">
    <h2> quiz end right answer${correct} and wrong answer ${wrong}</h2>
    <h3>your score is ${correct}/${total}
  </div>
  `
}

loadQue();


