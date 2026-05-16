import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

// Fake product list for testing
let products = [
  { id: 1, name: "Latte", price: 5 },
  { id: 2, name: "Mocha", price: 6 },
];

// Fake CRUD functions (mirroring your real logic)
const addProduct = (newProduct) => {
  const created = { id: Date.now(), ...newProduct };
  products.push(created);
  return created;
};

const updateProduct = (id, updates) => {
  products = products.map((p) => (p.id === id ? { ...p, ...updates } : p));
  return products.find((p) => p.id === id);
};

const deleteProduct = (id) => {
  products = products.filter((p) => p.id !== id);
  return products;
};

describe("CRUD functionality", () => {
  it("creates a new product", () => {
    const created = addProduct({ name: "Espresso", price: 4 });
    expect(created).toHaveProperty("id");
    expect(created.name).toBe("Espresso");
    expect(products.length).toBe(3);
  });

  it("updates an existing product", () => {
    const updated = updateProduct(1, { price: 10 });
    expect(updated.price).toBe(10);
  });

  it("deletes a product", () => {
    const result = deleteProduct(2);
    expect(result.find((p) => p.id === 2)).toBeUndefined();
  });
});
