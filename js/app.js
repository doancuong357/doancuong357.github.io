import express from "express";

const app = express();

// ================== CACHE ==================
const cache = new Map();

const setCache = (key, value, ttl = 10000) => {
  cache.set(key, { value, expire: Date.now() + ttl });
};
const getCache = (key) => {
  const data = cache.get(key);
  if (!data) return null;
  if (Date.now() > data.expire) {
    cache.delete(key);
    return null;
  }
  return data.value;
};

// ================== FAKE DB ==================
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];
const fakeDBQuery = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 1000));

// ================== SERVICE ==================
const fetchProducts = async () => {
  const cacheKey = "products";
  const cached = getCache(cacheKey);
  if (cached) {
    console.log("⚡ Lấy từ cache");
    return cached;
  }
  console.log("⏳ Query DB");
  const data = await fakeDBQuery();
  setCache(cacheKey, data, 5000); // cache 5s
  return data;
};

// ================== ROUTE ==================
app.get("/products", async (req, res) => {
  const data = await fetchProducts();
  res.json(data);
});

// ================== SERVER ==================
app.listen(3000, () => console.log("🚀 http://localhost:3000"));
