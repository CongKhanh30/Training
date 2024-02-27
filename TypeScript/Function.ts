//Khong can chi dinh kieu du lieu tra ve cho 1 function ngay khi khai bao

// 1 so cách khai bao function khac:
var z = function(x: number, y: string) : string {
    return `Chao ${y}, nam nay ban ${x} tuoi phai khong?`;
}

console.log(z(18, 'ahihi'));

var g: (x: number, y: string) => string = function(x, y) { // Khai bao truoc sau do moi dinh nghia
    return `Chao ${y}, nam nay ban ${x} tuoi phai khong?`;
}

console.log(g(18, 'ahihi'));

var h = (x: number) : number => {
    return x + 9;
}

console.log(h(10));
