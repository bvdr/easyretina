##jQuery EasyRetina Plugin

This is a simple plugin to display retina version for your images.
It works in two ways:

1. Using `data-retina=""` atribute or
2. It automaticaly swaps for the @2x version if no `data-retina` specified and a @2x version exists

### Syntax:

Using the function with all `img` elements 
```javascript
$('img').retina({
    // Check for data-retina attribute. If exists, swap out image
    // If exists, swap out image from data-retina if false it looks for image with @2x suffic and swaps it.
    dataAttribute: true,
    // Check if image exists before swapping out
    checkImage: true
});
```

### Other Examples:

Using the function with images that have a data-retina attribute 
```javascript
$('img[data-retina]').retina({
    // Check for data-retina attribute. If exists, swap out image
    // If exists, swap out image from data-retina if false it looks for image with @2x suffic and swaps it.
    dataAttribute: true,
    // Check if image exists before swapping out
    checkImage: true
});
```
