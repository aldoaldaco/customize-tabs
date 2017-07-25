'use strict';

// set initial data
(function main(){
    class Tab {
        constructor(width,name,content,icon) {
            this.width = width;
            this.name = name;
            this.content = content;
            this.icon = icon;
        }
        /*create(width,name,content){
            return new Tab(width,name,content);
        }*/
        show(){
            return `<div class="tab"><img src="${this.icon}" width="20px" height="20px"/>${this.name}</div><div class="content-tab">${this.content}<div>`;
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
        getIcon(){
            return this.Icon;
        }
        setIcon(icon){
            this.icon = icon;
        }
        getContent(){
            return this.content;
        }
        setContent(content){
            this.content = content;
        }
    }
    console.log("Este es mi primer commit");
    const container = document.querySelector(".example");
    const initialTab = new Tab(100,"New tab","Content of tab","http://via.placeholder.com/15x15");
    const newTab = initialTab.show();
    document.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Hello World";
    });
    alert(newTab);
    console.log(newTab);


})(window,document);
