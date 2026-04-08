const regionalData = {
    rajasthan: [
        { name: "Dal Bati Churma", desc: "Authentic, rich, and traditionally baked wheat spheres served with spiced lentils.", img: "images/dal_bati_churma_1775595302058.png", price: "₹450" },
        { name: "Gatte ki Sabzi", desc: "Gram flour roundels immersed in an elegant curd-based spicy gravy.", img: "images/gatte_ki_sabzi_1775595319426.png", price: "₹380" },
        { name: "Mirchi Bada", desc: "Golden fried chili fritters stuffed with seasoned potato hash.", img: "images/mirchi_bada_1775595333858.png", price: "₹150" }
    ],
    punjab: [
        { name: "Makki Roti & Sarson Saag", desc: "A robust combination of mustard greens paired with rustic cornmeal flatbread.", img: "images/makki_roti_1775595360305.png", price: "₹420" },
        { name: "Butter Chicken", desc: "Tender tandoori chicken simmered in an indulgent tomato and butter sauce.", img: "images/butter_chicken_1775595375741.png", price: "₹550" },
        { name: "Chole Bhature", desc: "Signature spiced chickpeas served alongside freshly puffed leavened bread.", img: "images/chole_bhature_1775595390679.png", price: "₹280" }
    ],
    bihar: [
        { name: "Litti Chokha", desc: "Roasted rustic wheat balls accompanied by fire-roasted mashed harvest vegetables.", img: "images/litti_chokha_1775595411327.png", price: "₹250" },
        { name: "Sattu Paratha", desc: "Nutrient-rich roasted gram flour stuffed whole wheat flatbreads.", img: "images/sattu_paratha_1775595428243.png", price: "₹180" },
        { name: "Malpua", desc: "A decadently sweet and fennel-scented fried pancake dessert.", img: "images/malpua_1775595442184.png", price: "₹200" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state-select');
    const foodGrid = document.getElementById('food-grid');

    const renderDishes = (state) => {
        const dishes = regionalData[state];
        if (!dishes) return;

        foodGrid.innerHTML = dishes.map(dish => `
            <div class="food-card">
                <img src="${dish.img}" alt="${dish.name}" loading="lazy">
                <h3>${dish.name}</h3>
                <p>${dish.desc}</p>
                <div class="price-tag">${dish.price}</div>
            </div>
        `).join('');
    };

    renderDishes('rajasthan');

    stateSelect.addEventListener('change', (e) => {
        renderDishes(e.target.value);
    });
});
