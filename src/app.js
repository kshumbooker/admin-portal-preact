const templates = {};

let uri = location.hash.slice(1)

let mockData = data.pages;
let pageData = [...mockData].filter(data => data.uri === uri)[0].content[0];

// Function to fetch and compile a Handlebars template
async function loadTemplate(name) {
      if (templates[name]) {
          return templates[name]; // Return cached template if already loaded
      }
      try {
          const response = await fetch(`templates/${name}.hbs`); // Fetch template file
          const templateText = await response.text(); // Get template content
          templates[name] = Handlebars.compile(templateText); // Compile and store
          return templates[name];
      } catch (error) {
          console.error(`Error loading template ${name}:`, error);
          return null;
      }
  }
  
  // Function to render the page dynamically
  async function renderPage() {
      const hash = location.hash.slice(1) || "login"; // Default to 'home'
      const template = await loadTemplate(hash) || await loadTemplate("login"); // Load template
      document.getElementById("app").innerHTML = template(pageData); // Render page
  }
  
  // Listen for hash changes and load the appropriate page
  window.addEventListener("hashchange", renderPage);
  window.addEventListener("DOMContentLoaded", renderPage);
