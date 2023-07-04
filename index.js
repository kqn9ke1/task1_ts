//! 1)
var num = 1;
var str = "str";
var Isbool = true;
//! 2)
var calculateArea = function (a) {
    var area = Math.PI * Math.pow(a, 2);
    return area;
};
console.log(calculateArea(5));
var calculateDensity = function (b, c) {
    var density = b / c;
    return density;
};
console.log(calculateDensity(4, 6));
var arr = [
    {
        id: 1,
        title: "hello",
        description: "world",
        price: 10,
        colors: ["purple", "green"],
    },
    {
        id: 2,
        title: "hello",
        description: "world",
        price: 20,
        colors: ["blue", "black"],
    },
];
