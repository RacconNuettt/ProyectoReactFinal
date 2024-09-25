export const getMenu = async () => {
    try {
        const response = await fetch('http://localhost:3008/menu');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener el menú:', error);
    }
};
