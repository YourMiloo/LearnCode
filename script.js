
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function() {
        document.getElementById("courses").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const htmlCode = document.getElementById("htmlCode");
const runCode = document.getElementById("runCode");
const resetCode = document.getElementById("resetCode");
const preview = document.getElementById("preview");

if (htmlCode && runCode && preview) {
    const starterCode = htmlCode.value;

    function updatePreview() {
        preview.srcdoc = htmlCode.value;
    }

    runCode.addEventListener("click", updatePreview);

    resetCode.addEventListener("click", function() {
        htmlCode.value = starterCode;
        updatePreview();
    });

    htmlCode.addEventListener("input", updatePreview);  
}

const cssCode = document.getElementById("cssCode");
const runCSS = document.getElementById("runCSS");
const resetCSS = document.getElementById("resetCSS");
const cssPreview = document.getElementById("cssPreview");

if (cssCode && runCSS && resetCSS && cssPreview) {
    const starterCSS = cssCode.value;

    function updateCSSPreview() {
        cssPreview.srcdoc = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    ${cssCode.value}
                </style>
            </head>
            <body>
                <h1>Welcome to My Website!</h1>
                <p>This is a sample paragraph.</p>

                <div class="card">
                    <h2>My First Card</h2>
                    <p>I'm practicing CSS on Learn Code.</p>
                </div>
            </body>
            </html>
        `;
    }

    runCSS.addEventListener("click", updateCSSPreview);

    resetCSS.addEventListener("click", function() {
        cssCode.value = starterCSS;
        updateCSSPreview();
    });

    cssCode.addEventListener("input", updateCSSPreview);

    updateCSSPreview();
}


const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const runBoth = document.getElementById("runBoth");
const resetBoth = document.getElementById("resetBoth");
const combinedPreview = document.getElementById("combinedPreview");

if (htmlEditor && cssEditor && runBoth && resetBoth && combinedPreview) {
    const starterHTML = htmlEditor.value;
    const starterCSS = cssEditor.value;

    function updateCombinedPreview() {
        const html = htmlEditor.value;
        const css = cssEditor.value;

        const previewHTML = html.replace(
            "</head>",
            `<style>${css}</style></head>`
        );

        combinedPreview.srcdoc = previewHTML;
    }

    runBoth.addEventListener("click", updateCombinedPreview);

    resetBoth.addEventListener("click", function() {
        htmlEditor.value = starterHTML;
        cssEditor.value = starterCSS;
        updateCombinedPreview();
    });

    htmlEditor.addEventListener("input", updateCombinedPreview);
    cssEditor.addEventListener("input", updateCombinedPreview);

    updateCombinedPreview();
}
