let a = prompt("Nhập số nguyên dương a:");
let b = prompt("Nhập số nguyên dương b:");
let mangKetQua = [];
for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
        mangKetQua.push(i);
    }
}
for (let i = 1; i <= b; i++) {
    if (i % a === 0 && !mangKetQua.includes(i)) {
        mangKetQua.push(i);
    }
}
console.log("Các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia hết cho a trong khoảng từ 1 đến b là:");
console.log(mangKetQua);
