//Задание №1

function parseCount(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        throw new Error('Невалидное значение');
    }
    return parseFloat(r);
}

function validateCount(num) {
    try {
        console.log('внутри блока try');
        return parseCount(num);
    }
    catch (error) {
        console.log('внутри блока catch');
        return error;
        console.log(error);
    }
    finally {
        console.log('внутри блока finally')

    }
}
validateCount(20);

// Задание №2
class Triangle {
    constructor(s1, s2, s3) {
        if (s1 + s2 < s3 || s3 + s2 < s1 || s1 + s3 < s2) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        else {
            this.s1 = s1;
            this.s2 = s2;
            this.s3 = s3;
        }

    }

    get perimeter() {
        let perimetet = this.s1 + this.s2 + this.s3;
        return Number(perimetet);
    }

    get area() {
        let p = (this.s1 + this.s2 + this.s3) / 2;
        let s = Math.sqrt(p * (p - this.s1) * (p - this.s2) * (p - this.s3));
        return Number(s.toFixed(3));

    }

}

function getTriangle(s1, s2, s3) {
    try {
        return new Triangle(s1, s2, s3);

    }
    catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }


    }

}


let tr = new Triangle(10, 15, 20);
//let tr = new Triangle(1, 3, 3000);
//console.log(tr.perimeter);
console.log(tr);
//console.log(tr);
