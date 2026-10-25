
const quizButtons = document.querySelectorAll(".start-quiz");
const main = document.querySelector("main");

const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Machine Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which tag creates the largest standard heading?",
            options: ["<h6>", "<head>", "<h1>", "<heading>"],
            answer: 2
        },
        {
            question: "Which tag creates a paragraph?",
            options: ["<p>", "<para>", "<text>", "<paragraph>"],
            answer: 0
        },
        {
            question: "Which tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1
        },
        {
            question: "Which attribute specifies an image's file path?",
            options: ["src", "href", "alt", "path"],
            answer: 0
        },
        {
            question: "Which tag creates an unordered list?",
            options: ["<ol>", "<li>", "<ul>", "<list>"],
            answer: 2
        },
        {
            question: "Which tag creates a line break?",
            options: ["<break>", "<lb>", "<br>", "<newline>"],
            answer: 2
        },
        {
            question: "Which attribute provides alternative text for an image?",
            options: ["title", "alt", "name", "text"],
            answer: 1
        },
        {
            question: "Which tag creates a table row?",
            options: ["<td>", "<th>", "<table>", "<tr>"],
            answer: 3
        },
        {
            question: "Where does the page title shown in the browser tab belong?",
            options: ["<body>", "<footer>", "<title>", "<main>"],
            answer: 2
        }
    ],

    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style System",
                "Cascading Style Sheets",
                "Creative Styling Software",
                "Colorful Style Syntax"
            ],
            answer: 1
        },
        {
            question: "Which property changes text color?",
            options: ["font-color", "text-style", "color", "background"],
            answer: 2
        },
        {
            question: "Which property changes an element's background color?",
            options: ["background-color", "color", "fill", "element-color"],
            answer: 0
        },
        {
            question: "Which symbol selects an element by ID?",
            options: [".", "#", "*", "&"],
            answer: 1
        },
        {
            question: "Which symbol selects elements by class?",
            options: ["#", ".", "@", "$"],
            answer: 1
        },
        {
            question: "Which property changes the size of text?",
            options: ["text-size", "font-style", "font-size", "size"],
            answer: 2
        },
        {
            question: "Which property adds space inside an element's border?",
            options: ["margin", "padding", "outline", "gap"],
            answer: 1
        },
        {
            question: "Which property adds space outside an element's border?",
            options: ["padding", "border-spacing", "margin", "line-height"],
            answer: 2
        },
        {
            question: "Which value makes a flex container arrange items in a row by default?",
            options: [
                "display: block",
                "display: grid",
                "display: flex",
                "position: row"
            ],
            answer: 2
        },
        {
            question: "Which CSS property rounds an element's corners?",
            options: ["corner-style", "border-radius", "round-border", "border-shape"],
            answer: 1
        }
    ],

    javascript: [
        {
            question: "Which keyword declares a variable that can be reassigned?",
            options: ["const", "let", "fixed", "static"],
            answer: 1
        },
        {
            question: "Which keyword declares a variable that cannot be reassigned?",
            options: ["const", "let", "var", "change"],
            answer: 0
        },
        {
            question: "Which symbol is commonly used for a single-line comment?",
            options: ["<!-- -->", "##", "//", "**"],
            answer: 2
        },
        {
            question: "Which method displays a message in the browser console?",
            options: ["console.show()", "console.log()", "print.console()", "message()"],
            answer: 1
        },
        {
            question: "Which operator checks strict equality?",
            options: ["=", "==", "===", "!="],
            answer: 2
        },
        {
            question: "Which array index refers to the first item?",
            options: ["0", "1", "-1", "first"],
            answer: 0
        },
        {
            question: "Which keyword defines a function?",
            options: ["make", "method", "function", "define"],
            answer: 2
        },
        {
            question: "Which method selects an element by its ID?",
            options: [
                "document.queryID()",
                "document.getElementById()",
                "document.findId()",
                "document.getId()"
            ],
            answer: 1
        },
        {
            question: "Which event happens when a user clicks an element?",
            options: ["hover", "changeText", "press", "click"],
            answer: 3
        },
        {
            question: "What does 5 + 3 evaluate to in JavaScript?",
            options: ["53", "8", "2", "15"],
            answer: 1
        }
    ],

    python: [
        {
            question: "Which function displays output in Python?",
            options: ["echo()", "console.log()", "print()", "display.text()"],
            answer: 2
        },
        {
            question: "Which character starts a single-line comment in Python?",
            options: ["//", "#", "<!--", "/*"],
            answer: 1
        },
        {
            question: "Which keyword defines a function in Python?",
            options: ["function", "fun", "define", "def"],
            answer: 3
        },
        {
            question: "Which data type stores True or False?",
            options: ["str", "bool", "int", "list"],
            answer: 1
        },
        {
            question: "What is the result of 4 + 3?",
            options: ["43", "1", "7", "12"],
            answer: 2
        },
        {
            question: "Which brackets create a list?",
            options: ["()", "{}", "[]", "<>"],
            answer: 2
        },
        {
            question: "Which keyword begins a conditional statement?",
            options: ["when", "if", "check", "condition"],
            answer: 1
        },
        {
            question: "Which loop is commonly used to iterate over a sequence?",
            options: ["repeat", "loop", "for", "iterate"],
            answer: 2
        },
        {
            question: "Which operator checks whether two values are equal?",
            options: ["=", "==", "===", ":="],
            answer: 1
        },
        {
            question: "What is the result of len('Hello')?",
            options: ["4", "6", "Hello", "5"],
            answer: 3
        }
    ]
};

quizButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        startQuiz(button.dataset.quiz);
    });
});

function startQuiz(quizName) {
    const questions = quizData[quizName];

    if (!questions) {
        return;
    }

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const question = questions[currentQuestion];

        main.innerHTML = `
            <section class="quiz-courses">
                <h2>${quizName.toUpperCase()} Quiz</h2>
                <p>Question ${currentQuestion + 1} of ${questions.length}</p>

                <h3>${escapeHTML(question.question)}</h3>

                <div class="quiz-options">
                    ${question.options.map(function(option, index) {
                        return `
                            <button class="quiz-option" data-index="${index}">
                                ${escapeHTML(option)}
                            </button>
                        `;
                    }).join("")}
                </div>

                <p id="quizFeedback" aria-live="polite"></p>

                <button id="nextQuestion" hidden>
                    ${currentQuestion === questions.length - 1
                        ? "See Results"
                        : "Next Question"}
                </button>
            </section>
        `;

        const optionButtons = document.querySelectorAll(".quiz-option");
        const feedback = document.getElementById("quizFeedback");
        const nextButton = document.getElementById("nextQuestion");

        optionButtons.forEach(function(optionButton) {
            optionButton.addEventListener("click", function() {
                const selectedAnswer = Number(optionButton.dataset.index);
                const correct = selectedAnswer === question.answer;

                if (correct) {
                    score++;
                    feedback.textContent = "Correct! Great job.";
                } else {
                    feedback.textContent =
                        "Not quite. The correct answer is: " +
                        question.options[question.answer];
                }

                optionButtons.forEach(function(option) {
                    option.disabled = true;
                });

                nextButton.hidden = false;
            });
        });

        nextButton.addEventListener("click", function() {
            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        });
    }

    function showResults() {
        const percentage = Math.round((score / questions.length) * 100);

        main.innerHTML = `
            <section class="quiz-courses">
                <h2>Quiz Complete!</h2>
                <p>You scored ${score} out of ${questions.length}.</p>
                <p>Score: ${percentage}%</p>

                <button id="tryAgain">Try Again</button>
                <button id="backToQuizzes">Back to Quizzes</button>
            </section>
        `;

        document.getElementById("tryAgain").addEventListener("click", function() {
            startQuiz(quizName);
        });

        document.getElementById("backToQuizzes").addEventListener("click", function() {
            location.reload();
        });
    }

    showQuestion();
}

function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, function(character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}
