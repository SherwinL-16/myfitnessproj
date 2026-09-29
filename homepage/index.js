
// Listahan ng mga searchable items and para ma access ang mga file sa iba't ibang folder.
const searchableItems = [
    { title: "Weight Management", link: "../wellness/weightma.html" },
    { title: "Nutrition Facts", link: "../wellness/nutrition.html" },
    { title: "Nutrition Basics", link: "../wellness/nutrionbas.html" },
    { title: "Diets", link: "../wellness/diets.html" },
    { title: "Meal Plans", link: "../wellness/mealplans.html" },
    { title: "Weight Loss Calorie Goal", link: "../tools/weightloss.html" },
    { title: "Daily Calorie Burned", link: "../tools/daily.html" },
    { title: "Calorie Burned by Activity", link: "../tools/calorieburned.html" },
    { title: "Pace Calculator", link: "../tools/pace.html" },
    { title: "Exercise Tips for Beginners", link: "../health/begginer.html" },
    { title: "Running Advice", link: "../health/running.html" },
    { title: "Walking Benefits", link: "../health/walking.html" },
    { title: "Strength Training", link: "../fitness/strength.html" },
    { title: "Yoga", link: "../fitness/yoga.html" },
    { title: "Holistic Fitness", link: "../fitness/holistic.html" },
];

// Function para mag-search at magpakita ng results and 
// Kinukuha nito ang laman ng searchInput o ung search bar.
function searchArticle() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsList = document.getElementById("resultsList");

    
    resultsList.innerHTML = "";

    
    const filteredItems = searchableItems.filter(item =>
        item.title.toLowerCase().includes(input)
    );

    // Kapag may results, pinapakita ito bilang listahan (<li>), na may clickable link.
    filteredItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.title;
        li.appendChild(a);
        resultsList.appendChild(li);
    });

    // Kapag walang result at hindi empty ang input, mag lalagay to ng  "No results found."
    if (filteredItems.length === 0 && input.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = "No results found.";
        resultsList.appendChild(li);
    }
}

//  Auto-clear ng list kapag nag-click sa labas
document.addEventListener("click", (event) => {
    const searchBox = document.querySelector(".search-box");
    const resultsList = document.getElementById("resultsList");

    if (!searchBox.contains(event.target)) {
        resultsList.innerHTML = ""; 
    }
});

// Kinukuha ang lahat ng search result items.
document.getElementById("searchInput").addEventListener("keydown", (event) => {
    const resultsList = document.getElementById("resultsList");
    const items = resultsList.querySelectorAll("li a");
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));
    //  lilipat sa susunod na item.
    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (activeIndex < items.length - 1) {
            if (activeIndex >= 0) items[activeIndex].classList.remove("active");
            items[++activeIndex].classList.add("active");
            items[activeIndex].focus();
        }
        //lilipat sa previous na item.
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (activeIndex > 0) {
            items[activeIndex].classList.remove("active");
            items[--activeIndex].classList.add("active");
            items[activeIndex].focus();
        }
        //pupunta sa naka-highlight na link.
    } else if (event.key === "Enter" && activeIndex >= 0) {
        event.preventDefault();
        items[activeIndex].click();
    }
});
 
// Function para sa pag-submit ng email form
function sendEmail() {
    alert("Email Sent Successfully!");
    document.getElementById("myForm").reset();
    
  }




