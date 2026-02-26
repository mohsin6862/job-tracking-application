
// State

let totalInterviewed = [];
let totalRejected = [];

const interviewCard = document.getElementById('all-card');
const totalCount = document.getElementById('total');
const interviewBox = document.getElementById('interview-count');
const rejectBox = document.getElementById('reject-count');

const filterAppliedInterview = document.getElementById('filtered-applied-interview');
const mainCardContainer = document.getElementById('all-card');

const allBtn = document.getElementById('all');
const interviewBtn = document.getElementById('interview');
const rejectBtn = document.getElementById('reject');

// Count Calculation

function calculateTotalInterview() {
  totalCount.innerText = interviewCard.children.length;
  interviewBox.innerText = totalInterviewed.length;
  rejectBox.innerText = totalRejected.length;
}

calculateTotalInterview();


function btnToggling(id) {
  allBtn.classList.remove('text-white', 'bg-blue-800');
  interviewBtn.classList.remove('text-white', 'bg-blue-800');
  rejectBtn.classList.remove('text-white', 'bg-blue-800');

  allBtn.classList.add('bg-white', 'text-[#64748B]');
  interviewBtn.classList.add('bg-white', 'text-[#64748B]');
  rejectBtn.classList.add('bg-white', 'text-[#64748B]');

  const selected = document.getElementById(id);
  selected.classList.add('text-white', 'bg-blue-800');
  selected.classList.remove('bg-white', 'text-[#64748B]');

  if (id === 'interview') {
    mainCardContainer.classList.add('hidden');
    filterAppliedInterview.classList.remove('hidden');
  } else {
    filterAppliedInterview.classList.add('hidden');
    mainCardContainer.classList.remove('hidden');
  }
}


interviewCard.addEventListener('click', function (event) {

  if (event.target.classList.contains('interview-btn')) {

    const parentNode = event.target.closest('.bg-base-100');

    if (!parentNode) {
      console.error('Job card container not found');
      return;
    }

    const jobInfo = {
      companyName: parentNode.querySelector('.company').innerText,
      jobTitle: parentNode.querySelector('.job-title').innerText,
      salary: parentNode.querySelector('.salary').innerText,
      pera: parentNode.querySelector('.pera').innerText
    };

    const exists = totalInterviewed.find(
      item => item.companyName === jobInfo.companyName
    );

    if (!exists) {
      totalInterviewed.push(jobInfo);
    }

    parentNode.querySelector('.inner-status').innerHTML =
      `<span class="bg-[#52b69a] text-white px-5 py-2 rounded-lg">Applied</span>`;

    calculateTotalInterview();
    showInterviewApplied();
  }
});


function showInterviewApplied() {
  filterAppliedInterview.innerHTML = '';

  totalInterviewed.forEach(applied => {
    const div = document.createElement('div');
    div.className = 'bg-base-100 p-10 rounded-xl flex justify-between';

    div.innerHTML = `
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-[#002C5C]">${applied.companyName}</h2>
        <p class="text-[#64748B]">${applied.jobTitle}</p>
        <p class="text-xs text-[#64748B]">${applied.salary}</p>
        <span class="bg-[#52b69a] text-white px-5 py-2 rounded-lg">Applied</span>
        <p class="text-xs text-[#323B49]">${applied.pera}</p>
      </div>
    `;

    filterAppliedInterview.appendChild(div);
  });
}
