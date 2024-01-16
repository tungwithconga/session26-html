let mang = [3, -2, 7, -5, 1, 8, -4];
let mangSauKhiDiChuyen = [];

for (let i = 0; i < mang.length; i++) {
  if (mang[i] < 0) {
    mangSauKhiDiChuyen.unshift(mang[i]);
  }
}
for (let i = 0; i < mang.length; i++) {
  if (mang[i] >= 0) {
    mangSauKhiDiChuyen.push(mang[i]);
  }
}
console.log("Mảng ban đầu:", mang);
console.log("Mảng sau khi di chuyển:", mangSauKhiDiChuyen);
