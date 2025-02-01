# DOM: Document Object

## Element Fatching

- ```getElementById```

```javascript
document.getElementById("id")
```

- ```getElementByClassName```

```javascript
document.getElementByClassName("className")
```

- ```getElementByTagName```

```javascript
document.getElementByTagName("tag")
```

- ```querySelector```

```javascript
document.querySelector("cssSelector")
```

 **Note:** This Selector only select first Elements, if there more than Elements this will select first element only.

- ```querySelectorAll```

```javascript
document.querySelectorAll("cssSelector")
```

## Update Existing ```HTML```

- ```innerHTML```

**Description:** innerHTML gets or sets the HTML content inside an element, including all HTML tags.

Use Case: It's useful when you want to retrieve or modify the HTML structure within an element, including nested elements, text, and other HTML tags.

Example:

```javascript
<div id="example">
  <p>Hello <strong>world</strong></p>
</div>

<script>
  var element = document.getElementById("example");
  console.log(element.innerHTML);  // Output: <p>Hello <strong>world</strong></p>
</script>
```
When you use ```innerHTML```, you can also modify the contents by setting it:

```javascript
element.innerHTML = "<p>New content <em>with HTML</em></p>";
```

- ```innerText```

**Description:** innerText gets or sets the "visible" text content of an element, without any HTML tags. It returns the text exactly as rendered on the page, ignoring any HTML tags.

Use Case: It's useful when you want to work only with the plain text inside an element, and you don't care about the HTML tags or structure.

Example:

```javascript
<div id="example">
  <p>Hello <strong>world</strong></p>
</div>

<script>
  var element = document.getElementById("example");
  console.log(element.innerText);  // Output: Hello world
</script>
```
- ```innerContent```

**What it does:** Gets or sets the text content of an element, similar to innerText, but without any consideration of CSS styling (like hidden text) and without breaking on line breaks or white spaces. It retrieves the text as it appears in the HTML code, not the way it's rendered in the browser.

**Use Case:** Often used when you want the raw text content (even if the text is hidden with CSS) without considering CSS styles.

```javascript
<div id="example">
  <p>Hello <strong>world</strong></p>
</div>

<script>
  var element = document.getElementById("example");
  console.log(element.textContent);  // Output: Hello world
</script>
```
## Create Element and Insert

**Creating and Adding a ```div``` Element**

Here's a simple example where we create a ```div``` element and append it to the body of the ```HTML``` document:

```javascript
// Create a div element
const div = document.createElement('div');

// Add some content (text or HTML)
div.innerHTML = 'This is a dynamically created div!';

// Optionally, add some styles
div.style.backgroundColor = 'lightblue';
div.style.padding = '20px';
div.style.margin = '10px';

// Append the new div to the body
document.body.appendChild(div);

// Remove the new div from body
document.body.removeChild(div);
```
**Adding Element on desired place using ```insertAdjacentElement()```**

The ```insertAdjacentElement()``` method allows you to insert a new element relative to a reference element. It has the following positions: ```beforebegin```, ```afterbegin```, ```beforeend```, ```afterend```.

 **Syntax**

```javascript
referenceElement.insertAdjacentElement(position, newElement);
```
- position: Can be "beforebegin", "afterbegin", "beforeend", or "afterend".

- newElement: The new DOM element you want to add.

**Example**
```javascript
<div id="parent">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<script>
  const parent = document.getElementById("parent");
  const newElement = document.createElement("div");
  newElement.textContent = "New Item";

  // Insert the new element after the first item
  parent.children[0].insertAdjacentElement("afterend", newElement);
</script>
```





