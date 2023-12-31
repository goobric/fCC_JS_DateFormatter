## fCC-JS-DateFormatter

This project will cover concepts such as the <code>getDate()</code>, <code>getMonth()</code>, and <code>getFullYear()</code> methods.

In JavaScript, the <code>textContent</code> property is used to both get and set the text of a node.

For example, here's how you can get the text content from a paragraph element with the id <code>example-paragraph</code>, and set its text content to a new value:

`<p id="example-paragraph">Example Text</p>`

```const exampleParagraph = document.getElementById("example-paragraph");
console.log(exampleParagraph.textContent); // "Example Text"
exampleParagraph.textContent = "New Text";
console.log(exampleParagraph.textContent); // "New Text"
```

In JavaScript, the <code>change</code> event is used to detect when the value of an HTML element has changed:

```
element.addEventListener("change", () => {

});
```

A <code>switch</code> statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.

For example, here's how to compare the expression <code>dayOfWeek</code> against possible values:

```
switch (dayOfWeek) {
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  // ...cases for other workdays
  default:
    console.log("It's the weekend!");
}
```
