// Hàm tính bình phương
function square(x) {
  return x * x;
}

// Dùng để cộng dồn bình phương của 1 triệu số
function sumOfSquares(arr) {
  return arr.reduce((acc, val) => acc + square(val), 0);
}

const numbers = Array.from({ length: 1_000_000 }, (_, i) => i);
console.time("Nhiều abstraction");
console.log(sumOfSquares(numbers));
console.timeEnd("Nhiều abstraction");
// Kết quả: chậm

// Giảm abstraction để tăng tốc
function sumOfSquaresFast(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * arr[i]; // inline thay vì gọi square()
  }
  return total;
}

console.time("Giảm abstraction");
console.log(sumOfSquaresFast(numbers));
console.timeEnd("Giảm abstraction");
