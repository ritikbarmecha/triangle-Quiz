var ip=document.querySelectorAll('.i1');
var btn=document.querySelector('.checktriangle');
var op=document.querySelector('.output');
console.log(ip[0].value)
btn.addEventListener('click',function(){
const sum=total(Number(ip[0].value),Number(ip[1].value),Number(ip[2].value));
if(sum==180){
    op.innerText="This is triangle";
}else{
    op.innerText="This is not a triangle";
}

})
function total(angle1,angle2,angle3){
    const totol=angle1+angle2+angle3;
console.log(totol)
return totol;
}