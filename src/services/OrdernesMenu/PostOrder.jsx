const postOrder = async (order) => {
    try {
        const response = await fetch('http://localhost:3008/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        if (!response.ok) {
            throw new Error('Error posting order');
        }
        const newOrder = await response.json();
        return newOrder;
    } catch (error) {
        console.error('Error:', error);
    }
};

export default postOrder;
