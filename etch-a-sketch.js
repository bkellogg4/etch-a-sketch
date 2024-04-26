function initializegame() {
    let container = document.querySelector("#container");
    let div1 = document.createElement('div');
    div1.style.width = "100px";
    div1.style.height = "100px";
    div1.style.border = "5px solid black";
    div1.style.display = "flex";
    container.appendChild(div1);

    let div2 = document.createElement('div');
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.border = "5px solid red";
    div2.style.display = "flex";
    container.appendChild(div2);

    let div3 = document.createElement('div');
    div3.style.width = "100px";
    div3.style.height = "100px";
    div3.style.border = "5px solid orange";
    div3.style.display = "flex";
    container.appendChild(div3);
}

initializegame();