const deleteOrder = async (orderId) => {
    try {
        const response = await fetch(`http://localhost:3008/orders/${orderId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting order');
        }
        return true; 
    } catch (error) {
        console.error('Error:', error);
        return false; 
    }
};

export default deleteOrder;
