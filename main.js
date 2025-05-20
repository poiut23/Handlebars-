// Get the Handlebars template source from the HTML element with id 'greet'
const source = document.getElementById('greet').innerHTML;

// Compile the Handlebars template source into a template function. what does compile mean?
// The compile function takes a string of Handlebars template and returns a function that can be called with a context object.
const template = Handlebars.compile(source);

// Define the context object with data to inject into the template
const context = {
  greeting: 'Hello World!'
}

// Generate the final HTML by applying the context to the compiled template
const compiledHtml = template(context);

// Get the target HTML element with id 'hello' to display the rendered template
const fill = document.getElementById('hello');

// Insert the compiled HTML into the target element
fill.innerHTML = compiledHtml;