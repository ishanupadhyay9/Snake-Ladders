const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const one = document.querySelectorAll('.c1');
const two = document.querySelectorAll('.c2');
const three = document.querySelectorAll('.c3');
const four = document.querySelectorAll('.c4');
const five = document.querySelectorAll('.c5');
const six = document.querySelectorAll('.c6');
const m = document.querySelector('.thebut');
const dice =document.querySelector('.val');
const win = document.querySelector('.winner');
const wint = document.querySelector('.wit');
const winbut = document.querySelector('.winbut');
const dis= document.querySelector('.tg');
const head= document.querySelector('.req');
const wrap2= document.querySelector('.wrap2');
const wrapper= document.querySelector('.wrapper');
const play= document.querySelector('.pl');
const homebut = document.querySelector('.homebut');
var droll = new Audio('dice-142528.mp3');
var sweep =new Audio('sweep4.wav');
wrapper.style.scale=0;

homebut.addEventListener('click',()=>{wrapper.style.scale=0; wrap2.style.scale=1;})
play.addEventListener('click',()=>{wrap2.style.scale=0; wrapper.style.scale=1;});
  dis.textContent="RED";
  head.style.scale=1;
  three.forEach((el)=>{el.style.opacity=1;});
wrapper.style.background='linear-gradient(130deg, rgba(219, 119, 127, 1) 0%, rgba(240, 4, 73, 1) 46%, rgba(80, 1, 18, 1) 100%)';
let t2 = true;
let psize =60;
  let rx =25;
  let ry=10;
  let bx=15;
  let by=30;
  let s1=1;
  let s2=1;
  let chance = 1; 
  let dval =0;
dis.innertext='p1';
  let arri=[
    [-1],

    [0,0],
    [1,0],
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0],
    [7,0],
    [8,0],
    [9,0],

    [9,1],
    [8,1],
    [7,1],
    [6,1],
    [5,1],
    [4,1],
    [3,1],
    [2,1],
    [1,1],
    [0,1],

    [0,2],
    [1,2],
    [2,2],
    [3,2],
    [4,2],
    [5,2],
    [6,2],
    [7,2],
    [8,2],
    [9,2],

    [9,3],
    [8,3],
    [7,3],
    [6,3],
    [5,3],
    [4,3],
    [3,3],
    [2,3],
    [1,3],
    [0,3],

    [0,4],
    [1,4],
    [2,4],
    [3,4],
    [4,4],
    [5,4],
    [6,4],
    [7,4],
    [8,4],
    [9,4],

    [9,5],
    [8,5],
    [7,5],
    [6,5],
    [5,5],
    [4,5],
    [3,5],
    [2,5],
    [1,5],
    [0,5],

    [0,6],
    [1,6],
    [2,6],
    [3,6],
    [4,6],
    [5,6],
    [6,6],
    [7,6],
    [8,6],
    [9,6],

    [9,7],
    [8,7],
    [7,7],
    [6,7],
    [5,7],
    [4,7],
    [3,7],
    [2,7],
    [1,7],
    [0,7],
    
    [0,8],
    [1,8],
    [2,8],
    [3,8],
    [4,8],
    [5,8],
    [6,8],
    [7,8],
    [8,8],
    [9,8],

    [9,9],
    [8,9],
    [7,9],
    [6,9],
    [5,9],
    [4,9],
    [3,9],
    [2,9],
    [1,9],
    [0,9],
  ]
  winbut.addEventListener('click',()=>{    win.style.opacity=0;
    head.style.scale=1;
    dice.style.scale=1;
    m.style.scale=1;
  chance=1;
    move(p1,1);
    chance=2;
    move(p2,1);
    s1=1;
    s2=1;
  chance=1;
  t2=true;
  dis.textContent="Red";
  document.querySelector('body').style.background='linear-gradient(170deg, rgba(36, 162, 234, 1) 0%, rgba(164, 4, 240, 1) 46%, rgba(209, 2, 47, 1) 100%)';

});

m.addEventListener('click',()=>{
  if(!t2){return;}
  t2=false;
 dice.classList.add('danim');
droll.play();
 let x = Math.floor(Math.random()*6)+1;
 dval=x;
 let arrt=[];
 if(x==1){arrt=one;}
 if(x==2){arrt=two;}
 if(x==3){arrt=three;}
 if(x==4){arrt=four;}
 if(x==5){arrt=five;}
 if(x==6){arrt=six;}
 one.forEach((el)=>{el.style.opacity=0;});
 two.forEach((el)=>{el.style.opacity=0;});
 three.forEach((el)=>{el.style.opacity=0;});
 four.forEach((el)=>{el.style.opacity=0;});
 five.forEach((el)=>{el.style.opacity=0;});
 six.forEach((el)=>{el.style.opacity=0;});
 arrt.forEach((el)=>{el.style.opacity=1;});

 if(chance==2){setTimeout(()=>{ dice.classList.remove('danim'); move2(p2,s2+dval);},1000);
}
if(chance==1){setTimeout(()=>{ dice.classList.remove('danim'); move2(p1,s1+dval);},1000);}});
 



async function move(j,nind)
{if(nind>100){return;}
  sweep.play();
  if(chance==1){s1=nind; }
  if(chance==2){s2=nind; }
 let z =j;
 let xdiff=bx;
 let ydiff=by;
 if(chance==1){xdiff=rx ; ydiff=ry;}
            let b = arri[nind];
            let newy= b[1];
            let newx = b[0];
         
        z.style.transition=`2s`;
         z.style.bottom=`${(newy*psize)+xdiff}px`;
         z.style.left=`${(newx*psize)+ydiff}px`;
   
      
         
   
}

async function move2(j,nind)
{ 
  if(chance==1){ 
     
    if(s1%10==0){
     await move(j,s1+1);
     setTimeout(()=>{if(s1!=nind)move(j,nind)},1500);
    }
    
   else if(s1<10 && nind>10)
    {
     await move(j,10);
     setTimeout(()=>{move(j,11)},2000);
      setTimeout(()=>{move(j,nind)},3000);
    }
    else  if(s1<20 && nind>20)
      {
        await move(j,20);
        setTimeout(()=>{move(j,21)},2000);
        setTimeout(()=>{move(j,nind)},3000);
      }
     else if(s1<30 && nind>30)
        {
          await move(j,30);
          setTimeout(()=>{move(j,31)},2000);
          setTimeout(()=>{move(j,nind)},3000);
        }
      else   if(s1<40 && nind>40)
          {
            await move(j,40);
            setTimeout(()=>{move(j,41)},2000);
            setTimeout(()=>{move(j,nind)},3000);
          }
       else   if(s1<50 && nind>50)
            {
              await move(j,50);
              setTimeout(()=>{move(j,51)},2000);
              setTimeout(()=>{move(j,nind)},3000);
            }
            else   if(s1<60 && nind>60)
              {
                await  move(j,60);
                setTimeout(()=>{move(j,61)},2000);
                setTimeout(()=>{move(j,nind)},3000);
              }
           else   if(s1<70 && nind>70)
                {
                  await  move(j,70);
                  setTimeout(()=>{move(j,71)},2000);
                  setTimeout(()=>{move(j,nind)},3000);
                }
              else  if(s1<80 && nind>80)
                  {
                    await   move(j,80);
                    setTimeout(()=>{move(j,81)},2000);
                    setTimeout(()=>{move(j,nind)},3000);
                  }
                else  if(s1<90 && nind>90)
                    {
                      await  move(j,90);
                      setTimeout(()=>{move(j,91)},2000);
                    setTimeout(()=>{move(j,nind)},3000);
                    }
                    else{
                      move(j,nind);
                      if(nind!=5 && nind!=13 && nind!=18 && nind!=37 &&nind!=48 &&nind!=60 && nind!=65 && nind!=23 && nind!=33 && nind!=44 && nind!=68 && nind!=77  && nind!=94 && nind!=97 && nind!=100)
                        {change()}
                     else {  setTimeout(()=>{check(nind);},1500);}
                     return;
                    }
       }
  else if(chance==2){ 
     
      if(s2%10==0){
       await move(j,s2+1);
       setTimeout(()=>{if(s2!=nind)move(j,nind)},1500);
      }

   else if(s2<10 && nind>10)
      {
       await move(j,10);
       setTimeout(()=>{move(j,11)},2000);
        setTimeout(()=>{move(j,nind)},3000);
      }
      else  if(s2<20 && nind>20)
        {
          await move(j,20);
          setTimeout(()=>{move(j,21)},2000);
          setTimeout(()=>{move(j,nind)},3000);
        }
       else if(s2<30 && nind>30)
          {
            await move(j,30);
            setTimeout(()=>{move(j,31)},2000);
            setTimeout(()=>{move(j,nind)},3000);
          }
        else   if(s2<40 && nind>40)
            {
              await move(j,40);
              setTimeout(()=>{move(j,41)},2000);
              setTimeout(()=>{move(j,nind)},3000);
            }
         else   if(s2<50 && nind>50)
              {
                await move(j,50);
                setTimeout(()=>{move(j,51)},2000);
                setTimeout(()=>{move(j,nind)},3000);
              }
              else   if(s2<60 && nind>60)
                {
                  await  move(j,60);
                  setTimeout(()=>{move(j,61)},2000);
                  setTimeout(()=>{move(j,nind)},3000);
                }
             else   if(s2<70 && nind>70)
                  {
                    await  move(j,70);
                    setTimeout(()=>{move(j,71)},2000);
                    setTimeout(()=>{move(j,nind)},3000);
                  }
                else  if(s2<80 && nind>80)
                    {
                      await   move(j,80);
                      setTimeout(()=>{move(j,81)},2000);
                      setTimeout(()=>{move(j,nind)},3000);
                    }
                  else  if(s2<90 && nind>90)
                      {
                        await  move(j,90);
                        setTimeout(()=>{move(j,91)},2000);
                      setTimeout(()=>{move(j,nind)},3000);
                      }
                      else{
                        move(j,nind);
                        if(nind!=5 && nind!=13 && nind!=18 && nind!=37 &&nind!=48 &&nind!=60 && nind!=65 && nind!=23 && nind!=33 && nind!=44 && nind!=68 && nind!=77  && nind!=94 && nind!=97 && nind!=100)
                          {change()}
                       else {  setTimeout(()=>{check(nind);},1500);}
                       return;
                      }
  }
 
          
  if(nind!=5 && nind!=13 && nind!=18 && nind!=37 &&nind!=48 &&nind!=60 && nind!=65 && nind!=23 && nind!=33 && nind!=44 && nind!=68 && nind!=77  && nind!=94 && nind!=97 && nind!=100)
    {setTimeout(()=>{change();},4000);}
 else {  setTimeout(()=>{check(nind);},4000);}
   
}


 function check(nind){
  console.log(nind+"check");
  let j = p1;
  if(chance==2){j=p2;}
  if(nind==5)
  {
    move(j,26);

  }
  else if(nind==13)
    {
      move(j,46);
    }
  else  if(nind==18)
      {
        move(j,39);
      }
   else if(nind==37)
        {
          move(j,62);
        }
   else  if(nind==48)
          {
            move(j,72);
          }
    else  if(nind==60)
            {
              move(j,82);
            }
      else  if(nind==65)
              {
                move(j,95);
              }

 else  if(nind==23)
  {
    move(j,7);
  }

  else if(nind==33)
    {
      move(j,9);
    }
 else   if(nind==44)
      {
        move(j,14);
      }
  else    if(nind==68)
        {
          move(j,25);
        }
   else    if(nind==77)
          {
            move(j,41);
          }
   else      if(nind==94)
            {
              move(j,70);
            }
      else  if(nind==97)
              {
                move(j,66);
              }

else if(nind==100)
{ win.style.scale=1;
  head.style.scale=0;
  dice.style.scale=0;
  m.style.scale=0;
  if(chance==1)
  wint.textContent = `RED - won the game!!`;
else
wint.textContent = `RED - won the game!!`;
  return;
}

change();
}
function change(){
  if(dval==6)
    { dis.innertext=`${chance}`;
    t2 =true;
    console.log('s1= '+s1 + ' s2= '+s2 +" chance of "+chance); return;}
  if(chance==1){chance=2; dis.textContent="BLUE"; wrapper.style.background=' linear-gradient(130deg, rgba(0, 198, 255, 1) 0%, rgba(4, 169, 225, 1) 46%, rgba(1, 48, 167, 1) 100%)';}
  else {chance=1;dis.textContent="RED"; wrapper.style.background='linear-gradient(130deg, rgba(219, 119, 127, 1) 0%, rgba(240, 4, 73, 1) 46%, rgba(80, 1, 18, 1) 100%)';}
  
  t2 =true;
  console.log('s1= '+s1 + ' s2= '+s2 +" chance of "+chance);
}

