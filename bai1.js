let mang = [1, 2, 5, 3.35,'abc', 'xyz',  true, false];

let coSoNguyen = false;

for (let i = 0; i < mang.length; i++) {
    if (Number.isInteger(mang[i])) {
        console.log(`Phần tử thứ ${i + 1}: ${mang[i]}`);
        coSoNguyen = true;
    }
}
if (!coSoNguyen) {
    console.log("Trong mảng không tồn tại số nguyên");
}
