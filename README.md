# 🛒 Redux Shopping Cart

A fully functional shopping cart application built with **Next.js**, **Redux Toolkit**, and **Material UI** — demonstrating modern state management patterns with persistent cart functionality.

---

## 📌 Overview

This project implements Redux Toolkit for scalable, predictable state management in a shopping cart experience. It covers the full lifecycle of cart interactions — from adding and updating items to persisting state across sessions.

---

## 🎯 Objectives

- Configure a Redux store using Redux Toolkit
- Build a `cartSlice` with scoped reducers and actions
- Implement add, remove, and update cart operations
- Connect React components to the Redux store via hooks
- Persist cart state across page reloads

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework with SSR/SSG support |
| [React](https://react.dev/) | UI component library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Simplified Redux state management |
| [Material UI](https://mui.com/) | Component library for consistent UI |

---

## ✨ Features

- ➕ **Add items** to the cart from a product listing
- 🔢 **Update item quantity** with increment/decrement controls
- ❌ **Remove items** individually from the cart
- 💰 **Total price calculation** updated reactively on every cart change
- 💾 **Persistent cart state** — cart data survives page refreshes

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/redux-shopping-cart.git
cd redux-shopping-cart
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 State Management Design

The cart state is managed through a single Redux slice (`cartSlice`):
```js
{
  items: [
    {
      id: string,
      name: string,
      price: number,
      quantity: number,
      image: string
    }
  ],
  totalQuantity: number,
  totalPrice: number
}
```

### Key Reducers

| Action | Description |
|---|---|
| `addToCart` | Adds a new item or increments quantity if it exists |
| `removeFromCart` | Removes an item by ID |
| `updateQuantity` | Sets quantity to a specific value |
| `clearCart` | Resets the entire cart |

---

## 💾 Persistence

Cart state is synced to `localStorage` on every update via a Redux middleware subscription. On app load, the store is hydrated from `localStorage` if data is available.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using Next.js + Redux Toolkit
