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

## insertBeforeFromObject()
This function is equivalent to the insertBefore() function from javascript.
You pass your object as the first parameter and a child node of the parent as the second.

If our parent looked like this...

```HTML
<div id="parentElement">
    <div class="redBox"></div>
    <div class="redBox"></div>
</div>
```

![redBox](https://www.bilder-upload.eu/upload/f414ad-1556394529.png)

... and we wanted to insert our new childBoxes before the second redBox, the code would look like this:

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            title: "iamChildBox",
            class: "childBox",
            children: {
                div: {
                    class: "smallerChildren"
                }
            }
        }
    }, this.childNodes[2]);

});
```

![redBoxes](https://www.bilder-upload.eu/upload/9890fd-1556395015.gif)

## return values
Both functions return an array in which the top nodes (first layer nodes) are stored.

For example:
```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    var returnValue = this.insertBeforeFromObject({
        div: {
            title: "iamChildBox",
            class: "childBox",
            children: {
                div: {
                    class: "smallerChildren"
                }
            }
        },
        script: {
            id: "iamascript"
        }
    }, this.childNodes[2]);
    console.log(returnValue);
});
```

![LoggingTheReturn](https://www.bilder-upload.eu/upload/84f90f-1556395573.png)

## Adding style
For adding style, you can use the "style" attribute. The value can either be a string or an object.

For example, this...
```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            class: "childBox",
            innerHTML: "Iam a ChildBox",
            style: "color: red",
            children: {
                div: {
                    class: "smallerChildren",
                }
            }
        }
    }, this.childNodes[2]);
});

```

... is the same as:
```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            class: "childBox",
            innerHTML: "Iam a ChildBox",
            style: {
                color:"red"
            },
            children: {
                div: {
                    class: "smallerChildren",
                }
            }
        }
    }, this.childNodes[2]);
});
```
## NOTE
* Your innerHTML-attribute should always be declared BEFORE the children-attribute... Otherwise it will overwrite everything.

* If you want to create multiple children of the same type in one layer, you have to numerate them, because objects shouldn't have two attributes with the same name...

For example, the following code won't function, bacause the object has twi attributes named "div":
```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            class: "childBox"
        },
        div:{
            class: "aSecondDiv"
        }
    }, this.childNodes[2]);
});
```
So accordingly we have to numerate the attributes. If we rename the second div to "div2", both divs will be created and appended. The number is removed through the function:

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            class: "childBox"
        },
        div2:{
            class: "aSecondDiv"
        }
    }, this.childNodes[2]);
});
```
This on the other hand works, because the divs are in different objects...

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    this.insertBeforeFromObject({
        div: {
            class: "childBox",
            children:{
                div:{}
            }
        }
    }, this.childNodes[2]);
});
```
* To create an element with no attributes, we pass an empty object, what can be seen in the example above.


## Creating multiple elements from an array

This function is a just an idea, which has to be improved...
The idea is to create multiple elements through an array.
It returns an object, in which the attributes are numerated.
This object then can be interpreted by the functions above.

```javascript
document.getElementById("parentElement").addEventListener("click", function () {
    var listItems = createMultipleItems("li", ["fistItem","secondItem","thirdItem"]);
    this.insertBeforeFromObject({
        div: {
            class: "childBox",
            children:{
                ul: {
                    children: listItems
                }
            }
        }
    }, this.childNodes[2]);
});
```
![Liste](https://www.bilder-upload.eu/upload/554a8c-1556398186.png)


