var ip=document.querySelectorAll('.i1');
var btn=document.querySelector('.checktriangle');
var op=document.querySelector('.output');
console.log(ip[0].value)
btn.addEventListener('click',function(){
const sum=totalsquare(Number(ip[0].value),Number(ip[1].value));
const sq=Math.sqrt(sum);


    op.innerText="The value of Hypotenous is "+sq;


})
function totalsquare(angle1,angle2){
    const totol=angle1*angle1+angle2*angle2;

return totol;
}