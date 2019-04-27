



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

