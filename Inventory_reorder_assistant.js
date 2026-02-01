let itemName = "Artbook";
let unitCost = 15;
let currentStock = 40;
let reorderLevel = 5;
let targetStock = 50;
let weeklyDemand = 7;
let supplierLeadTimeWeeks = 1.5;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log(` - Inventory Report - `);
console.log(`Item Name: ${itemName}`);
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now? ${reorderNow}`);
console.log(`Recommended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);