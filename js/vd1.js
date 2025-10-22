// Cache dùng object
const cache = {};

// Hàm tính Fibonacci chậm (đệ quy không tối ưu)
function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

// Hàm Fibonacci có cache
function fib(n) {
  if (cache[n]) {
    console.log(`⚡ Lấy từ cache: fib(${n})`);
    return cache[n];
  }
  console.log(`⏳ Tính toán fib(${n})`);
  const result = slowFib(n);
  cache[n] = result; // lưu lại
  return result;
}

// Test
console.time("Lần 1");
console.log("Kết quả lần 1:", fib(40)); // lần đầu: chậm
console.timeEnd("Lần 1");

console.time("Lần 2");
console.log("Kết quả lần 2:", fib(40)); // lần sau: cực nhanh
console.timeEnd("Lần 2");
