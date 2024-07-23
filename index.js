const img_div=document.querySelector('div')

const left_arrow=document.querySelectorAll('button')[0]
const right_arrow=document.querySelectorAll('button')[1]
let activeimgs=[0,1,2]
const imgsreload=(activeimgs)=>{
    img_div.innerHTML=`
        <img src="./img/img (${activeimgs[0]}).png">
        <img src="./img/img (${activeimgs[1]}).png">
        <img src="./img/img (${activeimgs[2]}).png">`
    const imgs=img_div.querySelectorAll('img')
}
const previmgs=()=>{
    if(activeimgs[2]==0){
        activeimgs[0]-=1
        activeimgs[1]-=1
        activeimgs[2]=8
    }
    else if(activeimgs[1]==0){
        activeimgs[0]-=1
        activeimgs[1]=8
        activeimgs[2]-=1
    }
    else if(activeimgs[0]==0){
        activeimgs[0]=8
        activeimgs[1]-=1
        activeimgs[2]-=1
    }
    else{
        activeimgs[0]-=1
        activeimgs[1]-=1
        activeimgs[2]-=1
    }
    console.log(activeimgs);
    imgsreload(activeimgs)
}
const nextimgs=()=>{
    if(activeimgs[2]==8){
        activeimgs[0]+=1
        activeimgs[1]+=1
        activeimgs[2]=0
    }
    else if(activeimgs[1]==8){
        activeimgs[0]+=1
        activeimgs[1]=0
        activeimgs[2]+=1
    }
    else if(activeimgs[0]==8){
        activeimgs[0]=0
        activeimgs[1]+=1
        activeimgs[2]+=1
    }
    else{
        activeimgs[0]+=1
        activeimgs[1]+=1
        activeimgs[2]+=1
    }
    console.log(activeimgs);
    imgsreload(activeimgs)
}

imgsreload(activeimgs)
right_arrow.addEventListener('click',nextimgs)
left_arrow.addEventListener('click',previmgs)
// setInterval(nextimgs,2000)

let startX = 0, endX = 0;

const handleTouchStart = (e) => {
    startX = e.touches ? e.touches[0].clientX : e.clientX;
}

const handleTouchMove = (e) => {
    endX = e.touches ? e.touches[0].clientX : e.clientX;
}

const handleTouchEnd = () => {
    if (startX > endX) {
        nextimgs();
    } else if (startX < endX) {
        previmgs();
    }
}

img_div.addEventListener('touchstart', handleTouchStart);
img_div.addEventListener('touchmove', handleTouchMove);
img_div.addEventListener('touchend', handleTouchEnd);
img_div.addEventListener('mousedown', handleTouchStart);
img_div.addEventListener('mousemove', handleTouchMove);
img_div.addEventListener('mouseup', handleTouchEnd);