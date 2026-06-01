function init() {
    renderMenu();
}

function renderMenu() {

    menu.forEach(category => {

        const container = document.getElementById(category.category);

        category.products.forEach(product => {

            if (category.category === "Burger") {
                container.innerHTML += getBurgerTemplates(product);
            }

            if (category.category === "Pizza") {
                container.innerHTML += getPizzaTemplates(product);
            }

            if (category.category === "Salad") {
                container.innerHTML += getSaladTemplates(product);
            }

        });

    });

}