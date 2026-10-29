document.addEventListener("DOMContentLoaded", () => {
    // 1. Load saved students from browser storage, or use default ones if none exist
    let newStudents = JSON.parse(localStorage.getItem("mtumishiStudents")) || [
        { name: "Amina Otieno", class: "Form 1", stream: "North" },
        { name: "Kenji Sato", class: "Form 2", stream: "East" },
        { name: "Grace Wanjiru", class: "Form 3", stream: "West" },
        { name: "Liam Mwangi", class: "Form 4", stream: "South" }
    ];
     // I have the main container and form elements using the exact HTML IDs
    const studentSection = document.getElementById("students") || document.querySelector(".student-register-section");
    const studentForm = document.getElementById("studentForm");
    const nameInput = document.getElementById("studentName");
    const classInput = document.getElementById("studentClass");
    const streamInput = document.getElementById("classStream");

    // Function to render the student list on the webpage and log output to the terminal/console
    function renderStudents() {
        // Output to the browser Terminal)
        console.clear();
        console.log("=== NEW STUDENTS IN MTUMISHI SCHOOL ===");
        newStudents.forEach((student, index) => {
            console.log(`${index + 1}. Name: ${student.name} | Class: ${student.class} | Stream: ${student.stream}`);
        });

        // Remove old container if it exists to avoid duplicate lists...so it looks smarttt
        const existingList = document.getElementById("dynamic-student-list");
        if (existingList) {
            existingList.remove();
        }

          // Render the list onto the webpage
        if (studentSection) {
            const container = document.createElement("div");
            container.id = "dynamic-student-list";
            container.style.marginTop = "25px";
            container.style.padding = "20px";
            container.style.borderRadius = "8px";
            container.style.backgroundColor = "rgba(255, 255, 255, 0.1)";

             const titleHeading = document.createElement("h3");
            titleHeading.textContent = "New students in Mtumishi school";
            titleHeading.style.marginBottom = "15px";
            container.appendChild(titleHeading);

             const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.style.padding = "0";

             newStudents.forEach(student => {
                const li = document.createElement("li");
                li.style.padding = "8px 0";
                li.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
                li.innerHTML = `<strong>${student.name}</strong> — ${student.class} (${student.stream})`;
                ul.appendChild(li);
            });

              container.appendChild(ul);
            studentSection.appendChild(container);
        }
    }

     // Initial render when the page loads
    renderStudents();

      //  Listen for form submission
    if (studentForm) {
        studentForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevents page reload on submit

            const nameValue = nameInput.value.trim();
            const classValue = classInput.value.trim();
            const streamValue = streamInput.value;
