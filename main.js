function bigyanYanNgDiskawnt() {
    let laptopPrice = Number(document.getElementById("budgetInput").value);
    let discountedPriceParaKayBossing = laptopPrice - Number((laptopPrice * 0.2).toFixed(2));
    document.getElementById("discountedPrice").value = discountedPriceParaKayBossing;

document.getElementById("brands").innerHTML = `
        <div class="discount text-center mt-5 p-5 bg-danger rounded ">
        <h2 class="text-white">Recommended Brands:</h2>
            <button type="button" class="btn btn-outline-warning">HP</button>
            <button type="button" class="btn btn-outline-warning">Acer</button>
            <button type="button" class="btn btn-outline-warning">Dell</button>
        <h3 class="text-white">Eligible Discount<span class="badge bg-warning">${discountedPriceParaKayBossing}</span></h3>
 </div>
`;
}