'use strict';

// set initial data
(function main(){
    'use strict';
    class Tab {
        constructor(name,content,visible) {
            this.name = name;
            this.content = content;
            this.visible = visible;
        }
        getName(){
            return this.name;
        }
        setName(name){
            this.name = name;
        }
        getContent(){
            return this.content;
        }
        setContent(content){
            this.content = content;
        }
        getVisible(){
            return this.visible;
        }
        setVisible(name){
            this.visible = visible;
        }
    }
    const add = document.querySelector("#addtab");
    const tabLinks = document.getElementsByClassName("customtab");
    const tabContents = document.getElementsByClassName("content");
    const containerTabs = document.querySelector(".tabs");
    const containerContent = document.querySelector(".conttab");

    const tab1 = new Tab("Prismatic","http://getprismatic.com/",false);
    const tab2 = new Tab("Gizmodo","http://gizmodo.com/",false);
    const tab3 = new Tab("LifeHacker","http://lifehacker.com/",false);
    const tab4 = new Tab("Costaline","https://costaline.com.mx/",false);
    const tabs = Array.of(tab1,tab2,tab3,tab4);


    for(let i of tabs){
        let tabDiv = document.createElement("div");
        tabDiv.classList.toggle("customtab");
        tabDiv.innerHTML = i.getName();

        let tabContent = document.createElement("div");
        tabContent.classList.toggle("content");
        tabContent.innerHTML = i.getContent();
        tabContent.style.display = (i.getVisible()==false) ? "none" : "block";

        containerTabs.appendChild(tabDiv);
        containerContent.appendChild(tabContent);
    }

    add.addEventListener("click", function(){
        const newTab = new Tab("New tab","New empty tab",false);
        let tabDiv = document.createElement("div");
        tabDiv.classList.toggle("customtab");
        tabDiv.innerHTML = newTab.getName();
        tabDiv.classList.toggle("active");

        let tabContent = document.createElement("div");
        tabContent.classList.toggle("content");
        tabContent.innerHTML = newTab.getContent();
        tabContent.style.display = "block";

        tabs.push(newTab);
        cleanDivs();
        containerTabs.appendChild(tabDiv);
        containerContent.appendChild(tabContent);
        console.log(tabLinks);
    });

    for(let i of tabLinks) {
        i.addEventListener("click", function(evt){
            cleanDivs();
            for(let t of tabs) {
                console.log(t);
                if(i.innerHTML == t.name){
                    for(let c of tabContents) {
                        console.log(c.innerHTML);
                        if( t.content != c.innerHTML ){
                            c.style.display = "none";
                        } else {
                            c.style.display = "block";
                        }
                    }
                }
            }
            i.classList.toggle("active");
        });
    }

    function cleanDivs(){
        for(let c of tabContents){
            c.style.display = "none";
        }
        for(let t of tabLinks) {
            t.classList.remove("active");
        }
    }
})(window,document);
