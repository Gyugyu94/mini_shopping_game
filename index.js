"use strict";
class clothe {
    constructor(kind, gender, color, size) {
        this.kind = kind;
        this.gender = gender;
        this.color = color;
        this.size = size;
        this.makeImgPath();
    }
    makeImgPath() {
        const firstSpellingOfKind = this.kind.slice(0, 1);
        this.img = `./imgs/${this.color}_${firstSpellingOfKind}.png`;
    }
}

const clothesList = [
    new clothe("skirt", "female", "blue", "large"),
    new clothe("pants", "male", "pink", "small"),
    new clothe("pants", "female", "yellow", "medium"),
    new clothe("skirt", "female", "pink", "small"),
    new clothe("pants", "male", "blue", "large"),
    new clothe("tshirt", "female", "yellow", "large"),
    new clothe("tshirt", "female", "blue", "medium"),
    new clothe("pants", "female", "blue", "large"),
    new clothe("tshirt", "male", "pink", "large"),
    new clothe("tshirt", "female", "blue", "small"),
    new clothe("pants", "female", "blue", "large"),
    new clothe("tshirt", "male", "pink", "small"),
    new clothe("skirt", "female", "blue", "medium"),
];

const makeItemList = (list) => {
    const items = document.getElementsByClassName("items")[0];
    items.innerHTML = "";
    list.forEach((data) => {
        const item = document.createElement("div");
        item.className = "item";
        const img = document.createElement("img");
        img.className = "item-clothe clothes";
        img.src = data.img;
        item.appendChild(img);
        const span = document.createElement("span");
        span.className = "item-info";
        span.innerText = `${data.gender}, ${data.size} size`;
        item.appendChild(span);
        items.appendChild(item);
    });
};

const items = document.getElementsByClassName("items")[0];

makeItemList(clothesList);

const registerEvent = (filters, option) => {
    for (let index = 0; index < filters.length; index++) {
        const filter = filters[index];
        filter.addEventListener("click", function () {
            const filterOption = this.getAttribute("option");
            const rusult = clothesList.filter((list) => list[option] === filterOption);
            makeItemList(rusult);
        });
    }
};

const clothefilters = document.getElementsByClassName("filter clothes");
registerEvent(clothefilters, "kind");

const colorFilter = document.getElementsByClassName("filter color-picker");
registerEvent(colorFilter, "color");
