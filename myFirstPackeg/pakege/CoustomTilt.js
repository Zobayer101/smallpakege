
let Item=document.querySelector('.item');
let Countner=document.querySelector('.countner')


const GoFun=(e)=>{
    let CX= e.offsetX;
    let CY= e.offsetY;

    //  console.log(`Old X: ${CX} - Old Y: ${CY}`)
    let Width=Item.clientWidth;
    let HelfW=Width/2;
    let Height=Item.clientHeight;
    let HelfH=Height/2;

    //console.log(`Width:${Width} and Height: ${Height}`);
    //-----------------________Applie--____Logic___--**********--------------
   
    var newCY=CX-HelfW;
   
    //var newCX=-CY+HelfH;
 
    var newCX =HelfH-CY;

    let X=newCX/10;
    let Y=newCY/10;

    // Countner.style=`transform-origin: center;
    //  transform: perspective(40em) rotateY(${Y}deg) rotateX(${X}deg);`;
     Item.style=` 
     background:radial-gradient(circle at ${CX}px ${CY}px,#9e3e3e28 3%, transparent 50% );
     transform-origin: center;
     transition: .1s;
     transform: perspective(40em) rotateY(${Y}deg) rotateX(${X}deg);`;
  //  console.log(`New Y axis : ${X}
  //   \n New X axis: ${Y}`)
}
var OutFun=()=>{
  Item.style=`transition: 2.5s; `;
console.log(`I'm outing `);
}
Item.addEventListener('mousemove', GoFun);
Item.addEventListener('mouseout', OutFun);


