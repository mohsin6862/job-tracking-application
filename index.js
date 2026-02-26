// console.log('i am from index.js files')
let currentBtn = "all";
const btnActive = ["text-white", "bg-blue-800"];
const btnInactive = ["bg-white", "text-[#64748B]"];

const allJobs = document.getElementById("all-card");
const interviewSection = document.getElementById("filtered-applied-interview");
const rejectedSection = document.getElementById("filtered-rejected-interview");
const noJobsAvailableSection = document.getElementById("no-jobs");
const interviewStat = document.getElementById("interview-count");
const rejectStat = document.getElementById("reject-count");
const totalStat = document.getElementById("total");
const availableJobs = document.getElementById("available-jobs");

function btnToggling(id) {
  // console.log(id);
  const allBtn = ["all", "interview", "reject"];
  currentBtn=id;
  for (const btn of allBtn) {
    const btnName = document.getElementById(btn);
    if (btn === id) {
      // console.log(btnName)
      btnName.classList.remove(...btnInactive);
      btnName.classList.add(...btnActive);
    } else {
      btnName.classList.add(...btnInactive);
      btnName.classList.remove(...btnActive);
    }
  }
  const allSection = [allJobs, interviewSection, rejectedSection];
  for (const sec of allSection) {
    if (sec) {
      sec.classList.add("hidden");
    }
    noJobsAvailableSection.classList.add("hidden");

    if (id === "all") {
      allJobs.classList.remove("hidden");
      if (allJobs.children.length < 1) {
        noJobsAvailableSection.classList.remove("hidden");
      }
    }
    if (id === "interview") {
      interviewSection.classList.remove("hidden");
      if (interviewSection.children.length < 1) {
        noJobsAvailableSection.classList.remove("hidden");
      }
    } else if (id === "reject") {
      rejectedSection.classList.remove("hidden");
      if (rejectedSection.children.length < 1) {
        noJobsAvailableSection.classList.remove("hidden");
      }
    }
  }
  countStat();
}

document.querySelector("main").addEventListener("click", function (event) {
  // console.log(event.target);
  const clickedElement = event.target;
  const singleCard = clickedElement.closest(".single-card");
  // console.log(singleCard);
  const status = singleCard.querySelector(".inner-status");
  // console.log(status);
  if (clickedElement.classList.contains("interview-btn")) {
    interviewSection.append(singleCard);
    status.innerHTML = `
        <button class="inner-status bg-[#31dcb1] text-[#002C5C] font-bold px-5 py-2"> Applied</button>
        `;
    //  status.innerText="Applied";
    // countStat();
  }
  if (clickedElement.classList.contains("rejected-btn")) {
    rejectedSection.appendChild(singleCard);
    status.innerHTML = `
        <button class="inner-status bg-[#ca4a05] text-white font-bold px-5 py-2"> Rejected</button>
        `;
    // countStat();
  }

  if (clickedElement.closest(".delete-btn")) {
    singleCard.remove();
}
countStat();
});

function countStat() {
//   totalStat.innerText = allJobs.children.length;
//   interviewStat.innerText = interviewSection.children.length;
//   rejectStat.innerText = rejectedSection.children.length;
const counts ={
    all:allJobs.children.length,
    interview : interviewSection.children.length,
    reject : rejectedSection.children.length
}
 totalStat.innerText=counts["all"];
 interviewStat.innerText=counts["interview"];
 rejectStat.innerText=counts["reject"];
 availableJobs.innerText=counts[currentBtn];
 if(counts[currentBtn]<1){
    noJobsAvailableSection.classList.remove("hidden");
 }
 else{
    noJobsAvailableSection.classList.add("hidden");
 }

}
countStat();
