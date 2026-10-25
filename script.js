
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function() {
        const courses = document.getElementById("courses");

        if (courses) {
            courses.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// VS Code-style playground
const codeEditor = document.getElementById("codeEditor");
const runProject = document.getElementById("runProject");
const resetProject = document.getElementById("resetProject");
const projectPreview = document.getElementById("projectPreview");
const editorTabs = document.querySelectorAll(".editor-tab");

if (codeEditor && runProject && resetProject && projectPreview && editorTabs.length > 0) {

    const starterFiles = {
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>I'm learning web development on Learn Code.</p>

    <button id="myButton">Click Me!</button>
    <p id="message"></p>

</body>
</html>`,

        css: `body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f4f4f4;
}

h1 {
    color: #7c3aed;
}

button {
    padding: 10px 16px;
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}`,

        js: `const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {
    button.addEventListener("click", function() {
        message.textContent = "You clicked the button!";
    });
}`
    };

    const files = { ...starterFiles };
    let activeFile = "html";

    codeEditor.value = files[activeFile];

    function saveCurrentFile() {
        files[activeFile] = codeEditor.value;
    }

    function updatePreview() {
        saveCurrentFile();

        const html = files.html;
        const css = files.css.replace(/<\/style/gi, "<\\/style");
        const js = files.js.replace(/<\/script/gi, "<\\/script");

        let previewHTML = html;

        const styleTag = `<style>${css}</style>`;
        const scriptTag = `<script>${js}<\/script>`;

        if (/<\/head>/i.test(previewHTML)) {
            previewHTML = previewHTML.replace(/<\/head>/i, `${styleTag}</head>`);
        } else {
            previewHTML = styleTag + previewHTML;
        }

        if (/<\/body>/i.test(previewHTML)) {
            previewHTML = previewHTML.replace(/<\/body>/i, `${scriptTag}</body>`);
        } else {
            previewHTML += scriptTag;
        }

        projectPreview.srcdoc = previewHTML;
    }

    editorTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            saveCurrentFile();

            activeFile = tab.dataset.file;

            codeEditor.value = files[activeFile];

            editorTabs.forEach(function(otherTab) {
                otherTab.classList.remove("active");
            });

            tab.classList.add("active");
        });
    });

    runProject.addEventListener("click", updatePreview);

    resetProject.addEventListener("click", function() {
        Object.assign(files, starterFiles);

        activeFile = "html";
        codeEditor.value = files.html;

        editorTabs.forEach(function(tab) {
            tab.classList.toggle("active", tab.dataset.file === "html");
        });

        updatePreview();
    });

    updatePreview();
}
