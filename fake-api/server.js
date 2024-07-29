const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

function getFullDate() {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const today = new Date();
	const day = today.getDate();
	const month = months[today.getMonth()];
	const year = today.getFullYear();
	const hours = today.getHours();
	const minutes = today.getMinutes();

	return `${day} ${month} ${year}, ${hours}:${minutes}`;
}

const menu = [
	{ id: 1, title: 'Margherita Pizza', price: 12.99, preview: '1.png' },
	{ id: 2, title: 'Chicken Caesar Salad', price: 10.49, preview: '2.png' },
	{ id: 3, title: 'Beef Tacos', price: 8.99, preview: '3.png' },
	{ id: 4, title: 'Pad Thai', price: 11.99, preview: '4.png' },
	{ id: 5, title: 'Butter Chicken', price: 13.99, preview: '5.png' },
	{ id: 6, title: 'Sushi Platter', price: 16.99, preview: '6.png' },
	{ id: 7, title: 'Vegetarian Burrito Bowl', price: 9.99, preview: '7.png' },
	{ id: 8, title: 'Spaghetti Carbonara', price: 12.49, preview: '8.png' },
	{ id: 9, title: 'Falafel Wrap', price: 7.99, preview: '9.png' },
	{ id: 10, title: 'BBQ Ribs', price: 14.99, preview: '10.png' },
];

let orders = [];

app.get('/api/menu', (req, res) => {
	res.json(menu);
});

app.post('/api/order', (req, res) => {
	const { cart, username, address, phone, total } = req.body;

	if (!cart || !username || !address || !phone || !total) {
		return res.status(400).json({ error: 'Missing order details' });
	}

	const newOrder = {
		id: orders.length + 1,
		cart,
		username,
		address,
		phone,
		total,
		status: 'Pending',
		date: getFullDate(),
		createdAt: new Date(),
	};

	orders.push(newOrder);

	res.status(201).json(newOrder);
});

app.get('/api/orders', (req, res) => {
	res.json(orders);
});

app.get('/api/orders/:id', (req, res) => {
	const orderId = parseInt(req.params.id, 10);
	const order = orders.find((o) => o.id === orderId);

	if (!order) {
		return res.status(404).json({ error: 'Order not found' });
	}

	res.json(order);
});

app.listen(port, () => {
	console.log(`Fake API server is running at http://localhost:${port}`);
});
