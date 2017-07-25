'use strict';

// set initial data
(function main(){
    class Tab {
        constructor(width,name,content) {
            this.width = width;
            this.name = name;
            this.content = content;
        }
        getWidth(){
            return this.width;
        }
        setWidth(width){
            this.width = width;
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
    }
    const add = document.querySelector("#addtab");
    const initialTab = new Tab(100,"New tab","Content of tab");
    const containerTabs = document.querySelector(".tabs");
    const containerContent = document.querySelector(".conttab");

    add.addEventListener("click", function(){
        let divTab = document.createElement("div");
        divTab.classList.toggle("customtab");
        divTab.innerHTML = initialTab.getName();
        let tabContent = document.createElement("div");
        tabContent.classList.toggle("content");
        tabContent.innerHTML = initialTab.getContent();
        containerTabs.appendChild(divTab);
        containerContent.appendChild(tabContent);
    });
})(window,document);
