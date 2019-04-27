# ObjectToNode
These functionalities should make it easier to insert multi layered nodes into elements

## The basic idea
Our target is to add multi layered child-nodes to an element without having to type much.
Basically these two functions allow you to append/insert childnodes to your parent by passing an object as an argument.

## Examples
Let's say we we have a parent Element in our HTML-Document. In this case it's a green box.
```HTML
<div id="parentElement"></div>
```
![parentElement](https://www.bilder-upload.eu/upload/dcaaff-1556387770.png)

If we want to append a div with the class "childBox" and the id "firstChild" (a smaller box with a blue border) to our parent when it's clicked, we use the `appendFromObject()` function.
