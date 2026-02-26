// console.log('i am from script.js')
// document.getElementById('interview-btn').addEventListener('click',function(){
//     console.log('interview btn clicked')
//         const interviewCount = document.getElementById('interview-count');
//     const getApplied = document.getElementById('applied');
//     let newInterviewCount= Number(interviewCount.innerText);
//     let totalInterviewCount = newInterviewCount+1;
//     console.log(totalInterviewCount)
//     interviewCount.innerText=totalInterviewCount;
//     let appliedText = getApplied.innerText;
//     console.log(appliedText)
//     getApplied.innerHTML=` <button id="applied" class="bg-[#69e1b9] text-[#002C5C] px-5 py-2 rounded-lg font-bold">Applied</button>`
// })

// const { createElement } = require("react");

// function getInterview(id){
//     // let interview = document.getElementById('interview-btn');
//     const interviewCount = document.getElementById('interview-count');
//     const getApplied = document.getElementById('applied');
//     let newInterviewCount= Number(interviewCount.innerText);
//     let totalInterviewCount = newInterviewCount+1;
//     console.log(totalInterviewCount)
//     interviewCount.innerText=totalInterviewCount;
//     let appliedText = getApplied.innerText;
//     console.log(appliedText)
//     getApplied.innerHTML=` <button id="applied" class="bg-[#69e1b9] text-[#002C5C] px-5 py-2 rounded-lg font-bold">Applied</button>`
     
    
// }
let  totalInterviewed = [];
let totalRejected =[];
const interviewCard = document.getElementById('all-card');
let totalCount = document.getElementById('total');
let interviewBox = document.getElementById('interview-count');
let rejectBox = document.getElementById('reject-count');
const mainContainer = document.querySelector('main');
const filterAppliedInterview = document.getElementById('filtered-applied-interview');
const filterRejectedInterview = document.getElementById('filtered-rejected-interview');
const mainCardContainer = document.getElementById('all-card');


function calculateTotalCount(){
    totalCount.innerText= interviewCard.children.length;
    interviewBox.innerText=totalInterviewed.length;
    rejectBox.innerText=totalRejected.length

}
calculateTotalCount();

const allBtn = document.getElementById('all');
const interviewBtn = document.getElementById('interview');
const rejectBtn = document.getElementById('reject');

function btnToggling(id){

    allBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectBtn.classList.add('bg-white', 'text-[#64748B]');


    allBtn.classList.remove('text-white', 'bg-blue-800');
    interviewBtn.classList.remove('text-white', 'bg-blue-800');
    rejectBtn.classList.remove('text-white', 'bg-blue-800');


    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('text-white', 'bg-blue-800');
    
    if(id=='interview'){
      mainCardContainer.classList.add('hidden');
      filterAppliedInterview.classList.remove('hidden')
    }
    else if(id=='all'){
        filterAppliedInterview.classList.add('hidden');
        mainCardContainer.classList.remove('hidden')
    }
    else if(id=='reject'){
         mainCardContainer.classList.add('hidden');
         filterRejectedInterview.classList.remove('hidden');
    }
}

document.getElementById('all-card').addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode);
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode
    const companyName = parentNode.querySelector('.company').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const status = parentNode.querySelector('.inner-status').innerText;
    const pera = parentNode.querySelector('.pera').innerText;
    // console.log(companyName,jobTitle,salary,status,pera);
    parentNode.querySelector('.inner-status').innerHTML=`
    <button  class="inner-status bg-[#52b69a] text-white font-bold rounded-lg px-5 py-2"> Applied</button>
    `
    const jobInfo={
        companyName,
        jobTitle,
        salary,
        status:'Applied',
        pera
    }
    const interviewApplied = totalInterviewed.find(item=> item.companyName == jobInfo.companyName);
    
    if(!interviewApplied){
        totalInterviewed.push(jobInfo);
    }
    totalRejected = totalRejected.filter(item=>item.companyName != jobInfo.companyName)
    console.log(totalInterviewed);
    calculateTotalCount();
    showInterviewApplied();
    }

    // reject interview section 
     else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        console.log(parentNode)
    const companyName = parentNode.querySelector('.company').innerText;
    const jobTitle = parentNode.querySelector('.job-title').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const status = parentNode.querySelector('.inner-status').innerText;
    const pera = parentNode.querySelector('.pera').innerText;
    // console.log(companyName,jobTitle,salary,status,pera);
    parentNode.querySelector('.inner-status').innerHTML=`
    <button  class="inner-status bg-[#a4461a] text-white font-bold rounded-lg px-5 py-2"> Rejected</button>
    `
    const jobInfo={
        companyName,
        jobTitle,
        salary,
        status:'Rejected',
        pera
    }
    const interviewRejected = totalRejected.find(item=> item.companyName == jobInfo.companyName);
    
    if(!interviewRejected){
        totalRejected.push(jobInfo);
    }
    totalInterviewed = totalInterviewed.filter(item=>item.companyName !=jobInfo.companyName)
    console.log(totalRejected);
    calculateTotalCount();
    showInterviewRejected()
    }
    
    
})

 function showInterviewApplied(){
     filterAppliedInterview.innerHTML =''
     for(let applied of totalInterviewed){
        let div = document.createElement('div');
        console.log(applied);
        div.className ='bg-base-100 p-10 rounded-xl flex justify-between';
        div.innerHTML=`
           <div class="space-y-4 ">
            <h2 class="company text-lg font-semibold text-[#002C5C]">${applied.companyName}</h2>
            <p class="job-title text-[#64748B]">${applied.jobTitle}</p>
            <p class="salary text-xs text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
             <button class="inner-status bg-[#EEF4FF] text-[#002C5C] font-medium px-5 py-2">${applied.status}</button>
            <p class="pera text-xs text-[#323B49]">${applied.pera}</p>
            <div class="flex md:flex-none gap-4 ">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                <button  class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        <div >
            <button id="delete-btn" class="md:border md:p-2 md:rounded-full md:border-gray-500 cursor-pointer md:hover:bg-red-600 hover:text-white"><i class="fa-solid fa-trash-can text-2xl "></i></button>
        </div>
        `
        filterAppliedInterview.appendChild(div);
     }
}

// show rejected interview
 function showInterviewRejected(){
     filterRejectedInterview.innerHTML =''
     for(let applied of totalRejected){
        let div = document.createElement('div');
        console.log(applied);
        div.className ='bg-base-100 p-10 rounded-xl flex justify-between';
        div.innerHTML=`
           <div class="space-y-4 ">
            <h2 class="company text-lg font-semibold text-[#002C5C]">${applied.companyName}</h2>
            <p class="job-title text-[#64748B]">${applied.jobTitle}</p>
            <p class="salary text-xs text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
             <button class="inner-status bg-[#EEF4FF] text-[#002C5C] font-medium px-5 py-2">${applied.status}</button>
            <p class="pera text-xs text-[#323B49]">${applied.pera}</p>
            <div class="flex md:flex-none gap-4 ">
                <button class="interview-btn btn btn-outline btn-success">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        <div >
            <button id="delete-btn" class="md:border md:p-2 md:rounded-full md:border-gray-500 cursor-pointer md:hover:bg-red-600 hover:text-white"><i class="fa-solid fa-trash-can text-2xl "></i></button>
        </div>
        `
        filterRejectedInterview.appendChild(div);
     }
}