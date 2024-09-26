const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:3008/users');
        if (!response.ok) {
            throw new Error('Error fetching orders');
        }
        const orders = await response.json();
        return orders;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export { getUsers }; 
