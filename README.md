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

If we want to append a div with the class "childBox" and the title "iamChildBox" (a smaller box with a blue border) to our parent when it's clicked, we use the `appendFromObject()` function.

![childBox](https://www.bilder-upload.eu/upload/e3c1c5-1556388274.png)

The following code will give us the demanded result:

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.appendFromObject({
        div: {
            title: "iamChildBox",
            class: "childBox"
        }
    });
});

```

![creatingChildren](https://www.bilder-upload.eu/upload/3160fd-1556390025.gif)

If we want to add a script-tag along with the chilBoxes, we can just add a new attribute to our object.

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.appendFromObject({
        div: {
            title: "iamChildBox",
            class: "childBox"
        },
        script: {
            src: "example.js",
            type: "text/javascript"
        }
    });
});

```

![Adding Script](https://www.bilder-upload.eu/upload/52fe67-1556392445.gif)

## Multiple layers
By adding a "children" attribute - which itself is an object - to our object, we can achieve multiple layers.
Let's assume we want to have a div inside our childBoxes. In this case it will be a black box with a class of "smallerchildren". We'll just add a children-attribute to our div-object.

```HTML
<div class="smallerChildren">
```
![smallerChildren](https://www.bilder-upload.eu/upload/174306-1556393257.png)

For demonstration purposes, i removed the script-tag. The following code will append a multi layered child to our parent element.

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.appendFromObject({
        div: {
            title: "iamChildBox",
            class: "childBox",
            children: {
                div:{
                    class: "smallerChildren"
                }
            }
        }
    });

});
```

![MultiLayers](https://www.bilder-upload.eu/upload/7834a2-1556393727.gif)


