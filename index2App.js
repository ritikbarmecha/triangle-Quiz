var Quiz=document.querySelector('.Quiz-form');
var btn1=document.querySelector('#sub')
var op=document.querySelector('#output')
// console.log(Quiz);
// console.log(btn1);
// console.log(op);
btn1.addEventListener('click',function(){
const arr=["180","Right"];
let score=0;
let i=0;
let form=new FormData(Quiz);
for(let value of form.values()){
 if(arr[i]==value){
    score+=1;
 }
 
 i++;
}
op.innerText="Your score is "+score;
    
})