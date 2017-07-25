'use strict';

// set initial data
(function main(){
    class Tab {
        constructor(name,content) {
            this.name = name;
            this.content = content;
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
    const initialTab = new Tab("New tab","Content of tab");
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
