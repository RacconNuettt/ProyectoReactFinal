async function postMenu(name, price, category, description, image) {
    try {
        const menuItem = { 
            name, 
            price, 
            category, 
            description, 
            image
        };

        const response = await fetch("http://localhost:3008/menu", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(menuItem)
        });

        const data = await response.json();
        console.log("Plato agregado:", data);
        return data;

    } catch (error) {
        console.error('Error posting menu item:', error);
        throw error;
    }
}

export { postMenu };
