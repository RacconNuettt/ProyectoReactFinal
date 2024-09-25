// PutOrder.js
const putOrder = async (orderId, updatedOrder) => {
    try {
        const response = await fetch(`http://localhost:3008/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedOrder),
        });
        if (!response.ok) {
            throw new Error('Error updating order');
        }
        const updated = await response.json();
        return updated;
    } catch (error) {
        console.error('Error:', error);
    }
};

export default putOrder;
