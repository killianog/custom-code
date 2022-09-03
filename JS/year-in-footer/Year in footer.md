# Updating Year In Footer Automatically 
## Inside `<head>` tag

```jsx
https://cdn.jsdelivr.net/gh/killianog/custom-code@561f4a6ef4b5b80d25dbba1599b8bb7b9b9d9e17/JS/year-in-footer/year-in-footer.js
```
# Inside `<head>` tag

```jsx
<script>
// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
  // get the the span element
  const yrSpan = document.querySelector('.footeryear');
  // get the current year
  const currentYr = new Date().getFullYear();
  // set the year span element's text to the current year
  yrSpan.textContent = currentYr;
});
</script>
```
### Demo

<iframe
  src="https://codepen.io/killianog/pen/bGMNGgv"
  style="width:100%; height:300px;"
></iframe>


