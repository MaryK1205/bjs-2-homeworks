class PrintEditionItem {
    name;
    releaseDate;
    pagesCount;
    state = 100;
    type = null;
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }
    fix() {
        return state = this.state * 1.5;

    }
    set(newState) {
        if (newState < 0) {
            this.state = 0;
        }
        else if (newState > 100) {
            this.state = 100;
        }
        else {
            (this.state = newState);
        }
    }
    get() {
        return this.state;
    }
}
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type) {
        super(name, releaseDate, pagesCount, type)
        this.type = 'magazine'

    }
}
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type, author) {
        super(name, releaseDate, pagesCount, type)
        this.type = 'book'
        this.author = author;

    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, type, author) {
        super(name, releaseDate, pagesCount, type, author);
        this.type = 'novel';
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, type, author) {
        super(name, releaseDate, pagesCount, type, author);
        this.type = 'fantastic';
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, type, author) {
        super(name, releaseDate, pagesCount, type, author)
        this.type = 'detective';
    }
}

