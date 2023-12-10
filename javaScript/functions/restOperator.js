function addTaxToPrice(taxRate , ...itemsBought){
    return itemsBought.map(item => taxRate * item);
}
console.log(addTaxToPrice(1.1 , 4.6 , 89 , 35 , 79));