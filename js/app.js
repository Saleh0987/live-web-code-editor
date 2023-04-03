const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");

// Load saved code from localStorage on page load
window.addEventListener("load", () => {
  const savedHtmlCode = localStorage.getItem("htmlCode");
  const savedCssCode = localStorage.getItem("cssCode");
  const savedJsCode = localStorage.getItem("jsCode");

  if (savedHtmlCode) {
    htmlCode.value = savedHtmlCode;
  }

  if (savedCssCode) {
    cssCode.value = savedCssCode;
  }

  if (savedJsCode) {
    jsCode.value = savedJsCode;
  }

  // Show preview of saved code
  showPreview();
});

// Save code to localStorage whenever the user changes the inputs
htmlCode.addEventListener("input", saveCode);
cssCode.addEventListener("input", saveCode);
jsCode.addEventListener("input", saveCode);

function saveCode() {
  localStorage.setItem("htmlCode", htmlCode.value);
  localStorage.setItem("cssCode", cssCode.value);
  localStorage.setItem("jsCode", jsCode.value);
}

// Show preview of code
function showPreview() {
  const htmlCodeValue = htmlCode.value;
  const cssCodeValue = `<style>${cssCode.value}</style>`;
  const jsCodeValue = `<script>${jsCode.value}</script>`;
  const frame =
    document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCodeValue + cssCodeValue + jsCodeValue);
  frame.close();
}

// Show selected code input section
function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

// Show all code input sections on large screens, or only HTML on small screens
function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
