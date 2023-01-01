## The DOM

### Document Object Model

**What is this?**

- The DOM is a JavaScript representation of a webpage.
- It's your JS "windows" into the contents of a webpage.
- It's just a bunch of objects that you can interact with via JS.

HTML Structure:

```
<body>
<h1>Hello!</h1>
<ul>
<li>Water plants</li>
<li>Get some sleep</li>
</ul>
</body>
```

Object Structure:

```
DOCUMENT {
body {
h1
ul {
li
li
}
}
}
```

The document object is our entry point into the world of the DOM.
It contains repsentations of all the content on a page, plus tons
of useful methods and properties.

Navigate through any web document object:

> console.dir(document)

List all the HTML elements:

> document.all

List the number 10 element contained in the document object:

> document.all[10]

List the innerText value from the 10th element into the document object:

> document.all[10].innerText

Change the innerText value from the 10th element:

> document.all[10]. innerText = "Something else"
