const img_div=document.querySelector('div')
const imgs=img_div.querySelectorAll('img')
const left_arrow=document.querySelectorAll('button')[0]
const right_arrow=document.querySelectorAll('button')[1]
let activeimgs=[0,1,2]


const imgsreload=(activeimgs)=>{
        img_div.innerHTML=`
            <img src="./img/img (${activeimgs[0]}).png">
            <img src="./img/img (${activeimgs[1]}).png">
            <img src="./img/img (${activeimgs[2]}).png">`
}
imgsreload(activeimgs)
right_arrow.addEventListener('click',()=>{
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
    // for(let j of activeimgs){
        //     imgs[j].style.display="block"
        // }
    console.log(activeimgs);
    imgsreload(activeimgs)
})
left_arrow.addEventListener('click',()=>{
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
    // for(let j of activeimgs){
        //     imgs[j].style.display="block"
        // }
    console.log(activeimgs);
    imgsreload(activeimgs)
})