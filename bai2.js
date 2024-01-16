
let Array = [10, 20, 30, 40, 50];
let found = prompt("Nhập giá trị cần tìm kiếm:");
let find = false;
for (let i = 0; i < mang.length; i++) {
    if (mang[i] == found) {
        console.log(`Phần tử ${found} được tìm thấy tại vị trí ${i + 1} trong mảng.`);
        find= true;
        break;
    }
}
if (!find) {
    console.log("Phần tử không tồn tại trong mảng.");
}