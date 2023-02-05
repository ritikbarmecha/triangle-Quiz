var ip=document.querySelectorAll('.i1');
var btn=document.querySelector('.checktriangle');
var op=document.querySelector('.output');
console.log(ip[0].value)
btn.addEventListener('click',function(){
const sum=totalsquare(Number(ip[0].value),Number(ip[1].value));



    op.innerText="The Area of Triangle is "+sum;


})
function totalsquare(angle1,angle2){
    const totol=(angle1*angle2)/2;

return totol;
}