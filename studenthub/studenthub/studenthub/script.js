/* =====================================================
   STUDENTHUB
   JavaScript
   Class 5 - 12
   ASIM TECH
===================================================== */


/* ================= CLASS SELECTION ================= */

const classCards = document.querySelectorAll(".class-card");

classCards.forEach(card => {

    card.addEventListener("click", function () {

        classCards.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        const selectedClass = this.dataset.class;

        localStorage.setItem(
            "studenthub_class",
            selectedClass
        );

        alert(
            "Class " +
            selectedClass +
            " selected! 🎓"
        );

    });

});


/* ================= LOAD SAVED CLASS ================= */

const savedClass =
    localStorage.getItem("studenthub_class");

if (savedClass) {

    classCards.forEach(card => {

        if (
            card.dataset.class === savedClass
        ) {
            card.classList.add("active");
        }

    });

}


/* ================= GOOGLE / YOUTUBE / WIKIPEDIA SEARCH ================= */

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchEngine =
    document.getElementById("searchEngine");


if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const query =
                searchInput.value.trim();

            if (!query) {

                alert(
                    "Please enter something to search."
                );

                return;
            }


            const engine =
                searchEngine.value;


            let searchURL = "";


            if (engine === "google") {

                searchURL =
                    "https://www.google.com/search?q=" +
                    encodeURIComponent(query);

            }


            else if (engine === "youtube") {

                searchURL =
                    "https://www.youtube.com/results?search_query=" +
                    encodeURIComponent(query);

            }


            else if (engine === "wikipedia") {

                searchURL =
                    "https://en.wikipedia.org/wiki/Special:Search?search=" +
                    encodeURIComponent(query);

            }


            window.open(
                searchURL,
                "_blank"
            );

        }
    );

}


/* ================= DARK MODE ================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");


function updateDarkModeIcon() {

    if (
        document.body.classList.contains("dark")
    ) {

        darkModeBtn.textContent = "☀️";

    }

    else {

        darkModeBtn.textContent = "🌙";

    }

}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const darkMode =
                document.body.classList.contains(
                    "dark"
                );


            localStorage.setItem(
                "studenthub_dark_mode",
                darkMode
            );


            updateDarkModeIcon();

        }
    );

}


/* ================= LOAD DARK MODE ================= */

const savedDarkMode =
    localStorage.getItem(
        "studenthub_dark_mode"
    );


if (savedDarkMode === "true") {

    document.body.classList.add(
        "dark"
    );

}


updateDarkModeIcon();


/* ================= TOOL BUTTONS ================= */

const toolCards =
    document.querySelectorAll(".tool-card");


toolCards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            const title =
                this.querySelector(
                    "strong"
                ).textContent;


            if (title === "Quiz") {

                document.querySelector(
                    ".quote-section"
                ).scrollIntoView({
                    behavior: "smooth"
                });

                alert(
                    "📝 Quiz section will be added next."
                );

            }


            else if (
                title === "My Notes"
            ) {

                alert(
                    "📖 My Notes feature will be added next."
                );

            }


            else if (
                title === "Study Planner"
            ) {

                document.querySelector(
                    ".study-plan"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }


            else if (
                title === "Study Timer"
            ) {

                alert(
                    "⏱️ Study Timer will be added next."
                );

            }


            else if (
                title === "Calculator"
            ) {

                alert(
                    "🧮 Calculator will be added next."
                );

            }


            else if (
                title === "My Progress"
            ) {

                alert(
                    "📊 Progress system will be added next."
                );

            }

        }
    );

});


/* ================= SUBJECT BUTTONS ================= */

const subjectCards =
    document.querySelectorAll(
        ".subject-card"
    );


subjectCards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            const subject =
                this.querySelector(
                    "span"
                ).textContent;


            alert(
                "📚 " +
                subject +
                " materials will be available here."
            );

        }
    );

});


/* ================= STUDY PLANNER ================= */

const planningButton =
    document.querySelector(
        ".primary-btn"
    );


if (planningButton) {

    planningButton.addEventListener(
        "click",
        function () {

            const task =
                prompt(
                    "What do you want to study today?"
                );


            if (
                task &&
                task.trim() !== ""
            ) {

                localStorage.setItem(
                    "studenthub_today_task",
                    task.trim()
                );


                alert(
                    "✅ Your study plan has been saved!"
                );

            }

        }
    );

}


/* ================= WELCOME MESSAGE ================= */

console.log(
    "🎓 StudentHub loaded successfully!"
);

console.log(
    "ASIM TECH • Class 5 - 12"
);
