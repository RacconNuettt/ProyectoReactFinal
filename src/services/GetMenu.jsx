async function getMenu() {
    try {
        const response = await fetch("http://localhost:3008/menu");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
}

export { getMenu };

