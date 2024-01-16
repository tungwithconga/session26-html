let soNguyen = [1,2,3,1,4,2,3,4,1,5,7];
let soCanTim = prompt("Hay nhap so can tim");
let dem = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] === soCanTim) {
        dem++;
    }
}
console.log(`Số ${soCanTim} xuất hiện ${dem} lần trong mảng.`);
