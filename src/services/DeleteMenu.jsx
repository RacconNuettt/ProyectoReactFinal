async function deleteMenu(id) {
    try {
        const response = await fetch(`http://localhost:3008/menu/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log("Plato eliminado");
        } else {
            console.error("Error eliminando el plato");
        }
    } catch (error) {
        console.error('Error deleting menu item:', error);
        throw error;
    }
}

export { deleteMenu };
