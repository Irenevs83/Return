// Checking if a number is big.

const Old = function (nummer) {
    if (nummer > 100) {
        return "true";
    }
    return "false";
}
const jijBentOud = Old(99);
console.log(jijBentOud);

// Dit is een produce functie.

// Bouncer at a club

const Bouncer = function (max, age) {
    if (max >= 100) {
        return ("it's to busy now, come back later")
    }
    if (age >= 18) {
        return ("Come in");
    }
    if (age <= 18) {
        return ("This club is for adults")
    }
}
const BrendaSays = Bouncer(90, 30);
console.log(BrendaSays);

// Dit is een do functie.

// Calculating the average.

const average = function ([num1, num2, num3, num4, num5]) {
    const som = ((num1 + num2 + num3 + num4 + num5) / 5);
    return som;
};
const result = average([10, 10, 9, 5, 3]);
console.log(result);
console.log("Afgerond: " + Math.round(result));

// Dit is een produce functie.