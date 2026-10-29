document.addEventListener("DOMContentLoaded", () => {
    // 1. Load saved students from browser storage, or use default ones if none exist
    let newStudents = JSON.parse(localStorage.getItem("mtumishiStudents")) || [
        { name: "Amina Otieno", class: "Form 1", stream: "North" },
        { name: "Kenji Sato", class: "Form 2", stream: "East" },
        { name: "Grace Wanjiru", class: "Form 3", stream: "West" },
        { name: "Liam Mwangi", class: "Form 4", stream: "South" }
    ];
    