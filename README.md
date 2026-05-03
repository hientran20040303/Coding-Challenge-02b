# Inventory Reorder Assistant

## 📌 Project Overview
This project is a JavaScript-based decision-support tool designed to automate inventory replenishment for retail and warehouse operations. It calculates critical supply chain metrics—such as "Weeks of Cover" and "Stock Deficit"—to determine exactly when and how much inventory should be reordered to meet target stock levels without over-purchasing.

The logic is built to be "defensive," preventing common mathematical errors like division-by-zero and ensuring that reorder quantities are always rounded to complete units.

## 🚀 Technologies Used
*   **Language:** JavaScript
*   **Mathematical Methods:** `Math.max()`, `Math.ceil()`, and Ternary Logic.
*   **Concepts:** Conditional logic gates, edge-case handling, and currency formatting.

## ✨ Key Features
*   **Dynamic Reorder Trigger:** Evaluates reorder needs based on two simultaneous conditions: hitting a minimum threshold OR falling below a safe lead-time coverage.
*   **Weeks of Cover Calculation:** Provides an estimate of how long current stock will last based on weekly demand, with built-in protection against zero-demand errors.
*   **Financial Forecasting:** Automatically calculates the estimated cost of the recommended reorder quantity, formatted for business reporting.
*   **Precision Rounding:** Uses `Math.ceil` to ensure order quantities represent whole sellable units and `.toFixed(2)` for financial accuracy.

## 🏃 How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/hientran20040303/inventory-reorder-logic-tool.git
