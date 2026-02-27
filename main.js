function bigyanDiskawnt() {
    let laptopPrice = Number(document.getElementById("budgetInput").value);
    let discountedPriceParaKayBossing = laptopPrice - Number((laptopPrice * 0.2).toFixed(2));
    // document.getElementById("discountedPrice").value = discountedPriceParaKayBossing;

document.getElementById("brands").innerHTML = `
        <div class="discount text-center mt-5 p-5 bg-primary rounded ">
        <h2 class="text-white">Recommended Brands:</h2>
            <button type="button" class="btn btn-outline-warning">HP</button>
            <button type="button" class="btn btn-outline-warning">Acer</button>
            <button type="button" class="btn btn-outline-warning">Dell</button>
        <h3 class="text-white">Eligible Discount<span class="badge bg-warning">${discountedPriceParaKayBossing}</span></h3>
 </div>
`;
}

function Locations() {
document.getElementById("storeLocations").innerHTML = `
    <div class="discount text-center mt-5 p-5 bg-primary rounded ">
        <h2 class="text-white">Store Locations</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCpRDqv2Lk0zMbohEuCSePuCTOVMfYhVFkw&s" alt="Avatar Logo" style="width:40px;" class="rounded-pill">
        <p class="text-white">Find the nearest CD-R King store near you!</p>
        <p class="text-white">Manila: Paterno Street, Quiapo (First Branch); 826 Salazar Street.</p>
        <p class="text-white">Quezon City: SM City Annex 1, North Avenue; 2/F, Waltermart Center, North Edsa; Ever Gotesco, Commonwealth Ave.</p>
        <p class="text-white">Makati: EDSA Corner Guadalupe; 3/F, Waltermart Chino Roces Avenue.</p>
        <p class="text-white">San Juan: 3/F, Shoppesville, Greenhills Shopping Center.</p>
        <p class="text-white">Pasay: 4/F, Metro Point Mall, EDSA Corner Taft Avenue.</p>
        <p class="text-white">Muntinlupa: National Road; 3/F, Alabang Town Center.</p>
        <p class="text-white">Caloocan/Malabon: Rizal Avenue; 5 Gov. Pascual Ave, Malabon.</p>
    </div>
`;
}
