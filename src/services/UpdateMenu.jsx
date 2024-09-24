async function updateMenu(id, updatedItem) {
    try {
        const response = await fetch(`http://localhost:3008/menu/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        });

        const data = await response.json();
        console.log("Plato actualizado:", data);
        return data;

    } catch (error) {
        console.error('Error updating menu item:', error);
        throw error;
    }
}

export { updateMenu };
