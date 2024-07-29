export async function getMenu() {
	const res = await fetch('http://localhost:3000/api/menu');

	if (!res.ok) throw Error('Failed getting menu');

	const data = await res.json();

	return data;
}

export async function createOrder(orderDetails) {
	const res = await fetch('http://localhost:3000/api/order', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(orderDetails),
	});

	if (!res.ok) throw Error('Failed creating order');

	const data = await res.json();

	return data;
}

export async function getOrders() {
	const res = await fetch('http://localhost:3000/api/orders');

	if (!res.ok) throw new Error('Failed getting orders');

	const data = await res.json();

	return data;
}

export async function getOrderById(orderId) {
	const res = await fetch(`http://localhost:3000/api/orders/${orderId}`);

	if (!res.ok) throw new Error('Failed getting order');

	const data = await res.json();

	return data;
}
