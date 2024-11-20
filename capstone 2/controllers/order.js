const Cart = require("../models/Cart");
const Order = require("../models/Order");
const { errorHandler } = require("../auth");


// create order

/*module.exports.createOrder = async (req, res) => {
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(400).json({ error: "No Items to Checkout" });
            }

            if (cart.cartItems.length === 0) {
                return res.status(400).json({ error: "No Items to Checkout" });
            }

            const order = new Order({
                userId,
                productsOrdered: cart.cartItems,
                totalPrice: cart.totalPrice
            });

            return order.save()
                .then(() => Cart.deleteOne({ userId }))
                .then(() => res.status(201).json({ message: "Ordered Successfully" }));
        })
        .catch(error => errorHandler(error, req, res));
};*/

module.exports.createOrder = async (req, res) => {
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart || cart.cartItems.length === 0) {
                return res.status(400).json({ error: "No Items to Checkout" });
            }

            const order = new Order({
                userId,
                productsOrdered: cart.cartItems,
                totalPrice: cart.totalPrice
            });

            return order.save()
                .then(savedOrder => {  // Save the order and return the saved order object
                    return Cart.deleteOne({ userId })
                        .then(() => res.status(201).json({ 
                            message: "Ordered Successfully", 
                            orderId: savedOrder._id // Return the orderId in the response
                        }));
                });
        })
        .catch(error => errorHandler(error, req, res));
};


// retrieve users order

/*module.exports.retrieveUserOrders = (req, res) => {
    const userId = req.user.id;

    Order.find({ userId })
        .then(orders => {
            if (orders.length === 0) {
                return res.status(404).json({ message: "Cart is Empty" });
            }

            const ordersTotalPrice = orders.reduce((total, order) => total + order.totalPrice, 0);

            return res.status(200).json({
                orders,
                ordersTotalPrice
            });
        })
        .catch(error => errorHandler(error, req, res));
};*/

/*module.exports.retrieveUserOrders = (req, res) => {
    const userId = req.user.id;

    Order.find({ userId })
        .then(orders => {
            if (orders.length === 0) {
                return res.status(404).json({ message: "No orders found" });
            }

            return res.status(200).json({
                orders
            });
        })
        .catch(error => errorHandler(error, req, res));
};
*/

module.exports.retrieveUserOrders = (req, res) => {
    const userId = req.user.id;

    Order.find({ userId })
        .populate('productsOrdered.productId', 'name') // Populate the productId field with the product name
        .then(orders => {
            if (orders.length === 0) {
                return res.status(404).json({ message: "No orders found" });
            }

            // Format the response to include product names
            const formattedOrders = orders.map(order => ({
                _id: order._id,
                totalPrice: order.totalPrice,
                orderedOn: order.orderedOn,
                status: order.status,
                productsOrdered: order.productsOrdered.map(item => ({
                    productId: item.productId._id,
                    productName: item.productId.name, // Include product name
                    quantity: item.quantity,
                    subtotal: item.subtotal
                }))
            }));

            return res.status(200).json({ orders: formattedOrders });
        })
        .catch(error => errorHandler(error, req, res));
};

// as admin, retrieve all orders

module.exports.retrieveAllOrders = (req, res) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: "Access denied. Admins only." });
    }

    Order.find({})
        .then(orders => {
            return res.status(200).json({ orders });
        })
        .catch(error => errorHandler(error, req, res));
};