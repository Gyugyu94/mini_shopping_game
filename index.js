class clothe {
    constructor(kind, gender, color, size) {
        this.kind = kind;
        this.gender = gender;
        this.color = color;
        this.size = size;
        this.img = this.makeImgPath();
    }
    makeImgPath = () => {
        const firstSpellingOfKind = this.kind.slice(0, 1);
        return `./imgs/${this.color}_${firstSpellingOfKind}.png`;
    };
}

const clothesList = [
    new clothe("pants", "female", "blue", "large"),
    new clothe("pants", "female", "pink", "small"),
    new clothe("pants", "female", "yellow", "medium"),
    new clothe("pants", "female", "pink", "small"),
    new clothe("pants", "female", "blue", "large"),
];

console.log(clothesList[1].img);
