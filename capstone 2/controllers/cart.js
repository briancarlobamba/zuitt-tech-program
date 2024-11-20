const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { errorHandler } = require("../auth");


// retrieve user cart
/*module.exports.retrieveUserCart = (req, res) => {
    return Cart.find({userId : req.user.id})
        .then(Cart => {
            if (Cart.length > 0) {
                return res.status(200).send(Cart);
            }
            return res.status(404).send({
                message: 'No cart found'
            });
        })
        .catch(error => errorHandler(error, req, res));
};
*/

/*module.exports.retrieveUserCart = (req, res) => {
    return Cart.findOne({ userId: req.user.id })  // Use findOne for a single cart object
        .then(cart => {
            if (cart) {
                return res.status(200).send({
                    cart: {  // Wrapping the response data in an object with 'cart' property
                        userId: cart.userId,
                        cartItems: cart.cartItems,
                        totalPrice: cart.totalPrice
                    }
                });
            }
            return res.status(404).send({
                message: 'No cart found'
            });
        })
        .catch(error => errorHandler(error, req, res));
};
*/

/*module.exports.retrieveUserCart = (req, res) => {
    return Cart.findOne({ userId: req.user.id })
        .populate({
            path: 'cartItems.productId',
            select: 'name' // Specify the fields you want to include from the Product schema
        })
        .then(cart => {
            if (cart) {
                // Modify cartItems to include productName
                const cartWithProductNames = cart.cartItems.map(item => ({
                    ...item.toObject(),
                    productName: item.productId.name // Add the productName to the cartItem
                }));

                return res.status(200).send({
                    cart: {
                        userId: cart.userId,
                        cartItems: cartWithProductNames,
                        totalPrice: cart.totalPrice
                    }
                });
            }
            return res.status(404).send({
                message: 'No cart found'
            });
        })
        .catch(error => errorHandler(error, req, res));
};
*/

module.exports.retrieveUserCart = (req, res) => {
    return Cart.findOne({ userId: req.user.id })
        .populate('cartItems.productId', 'name price') 
        .then(cart => {
            if (cart) {
                return res.status(200).send({
                    cart: {  
                        userId: cart.userId,
                        cartItems: cart.cartItems.map(item => ({
                            productId: item.productId._id,  
                            productName: item.productId.name,
                            price: item.productId.price,  // Add price
                            quantity: item.quantity,
                            subtotal: item.subtotal,
                            _id: item._id
                        })),
                        totalPrice: cart.totalPrice
                    }
                });
            }
            return res.status(404).send({
                message: 'No cart found'
            });
        })
        .catch(error => errorHandler(error, req, res));
};


// Add to cart


exports.addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId, quantity, subtotal } = req.body;

        // Fetch product details
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        if (!product.isActive) {
            return res.status(400).json({
                success: false,
                message: 'Product is not available'
            });
        }

        const productName = product.name.trim(); // Trim whitespace
        const price = product.price;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                cartItems: [{
                    productId,
                    productName,
                    price,
                    quantity,
                    subtotal
                }],
                totalPrice: subtotal
            });
        } else {
            const existingItemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId);

            if (existingItemIndex >= 0) {
                cart.cartItems[existingItemIndex].quantity += quantity;
                cart.cartItems[existingItemIndex].subtotal += subtotal;
            } else {
                cart.cartItems.push({
                    productId,
                    productName,
                    price,
                    quantity,
                    subtotal
                });
            }

            cart.totalPrice += subtotal;
        }

        await cart.save();

        res.status(200).json({
            message: 'Item added to cart successfully',
            cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while adding to the cart',
            error: error.message
        });
    }
};


// update-cart-quantity

// 9-16-24 1st update:

/*module.exports.updateCartQuantity = (req, res) => {
    const { productId, newQuantity } = req.body;
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                const cartItem = cart.cartItems[itemIndex];
                cartItem.quantity = newQuantity;

                return Product.findById(cartItem.productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cartItem.subtotal = product.price * newQuantity;
                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    console.log("Cart Item _id:", cartItem._id);

                    return cart.save().then(() => {
                        res.status(200).send({
                            message: 'Item quantity updated successfully',
                            updatedItem: {
                                productId: cartItem.productId,
                                productName: product.name, 
                                price: product.price, 
                                quantity: cartItem.quantity,
                                subtotal: cartItem.subtotal,
                                _id: cartItem._id || 'N/A'  
                            }
                        });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};*/


// 9-16-24 2nd update:

/*module.exports.updateCartQuantity = (req, res) => {
    const { productId, newQuantity } = req.body;
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                const cartItem = cart.cartItems[itemIndex];
                cartItem.quantity = newQuantity;

                return Product.findById(cartItem.productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cartItem.subtotal = product.price * newQuantity;
                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    return cart.save().then(() => {
                        
                        return Cart.findOne({ userId })
                            .populate('cartItems.productId', 'name price') 
                            .then(updatedCart => {
                                res.status(200).send({
                                    message: 'Item quantity updated successfully',
                                    updatedCart: {
                                        _id: updatedCart._id,  
                                        userId: updatedCart.userId,
                                        cartItems: updatedCart.cartItems.map(item => ({  
                                            productId: item.productId._id,  
                                            productName: item.productId.name,
                                            price: item.productId.price,  // Add price  
                                            quantity: item.quantity,
                                            subtotal: item.subtotal,
                                            _id: item._id
                                        })),
                                        totalPrice: updatedCart.totalPrice,
                                        __v: updatedCart.__v 
                                    }
                                });
                            });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};*/

// 09-16-24 3rd update:

module.exports.updateCartQuantity = (req, res) => {
    const { productId, newQuantity } = req.body;
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                const cartItem = cart.cartItems[itemIndex];
                cartItem.quantity = newQuantity;

                return Product.findById(cartItem.productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cartItem.subtotal = product.price * newQuantity;
                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    return cart.save().then(() => {
                        // Re-fetch cart with populated productId fields
                        return Cart.findOne({ userId })
                            .populate('cartItems.productId', 'name price') 
                            .then(updatedCart => {
                                if (!updatedCart) {
                                    return res.status(404).send({ error: 'Updated cart not found' });
                                }

                                res.status(200).send({
                                    message: 'Item quantity updated successfully',
                                    updatedCart: {
                                        _id: updatedCart._id,  
                                        userId: updatedCart.userId,
                                        cartItems: updatedCart.cartItems.map(item => {
                                            // Ensure productId is populated and accessible
                                            if (!item.productId || !item.productId._id) {
                                                return res.status(500).send({ error: 'Product details missing in cart' });
                                            }

                                            return {
                                                productId: item.productId._id,  
                                                productName: item.productId.name,
                                                price: item.productId.price,  
                                                quantity: item.quantity,
                                                subtotal: item.subtotal,
                                                _id: item._id
                                            };
                                        }),
                                        totalPrice: updatedCart.totalPrice,
                                        __v: updatedCart.__v 
                                    }
                                });
                            });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};


// commented out on september 16, 2024:
/*module.exports.updateCartQuantity = (req, res) => {
    const { productId, newQuantity } = req.body;
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                cart.cartItems[itemIndex].quantity = newQuantity;
                return Product.findById(cart.cartItems[itemIndex].productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cart.cartItems[itemIndex].subtotal = product.price * newQuantity;
                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    return cart.save().then(() => {
                        res.status(200).send({
                            message: 'Item quantity updated successfully',
                            updatedItem: {
                                productId: cart.cartItems[itemIndex].productId,
                                productName: product.name, 
                                price: product.price, 
                                quantity: cart.cartItems[itemIndex].quantity,
                                subtotal: cart.cartItems[itemIndex].subtotal,
                                _id: cart.cartItems[itemIndex]._id
                            }
                        });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};*/

/*module.exports.updateCartQuantity = (req, res) => {
    const { productId, newQuantity } = req.body;
    const userId = req.user.id;

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                cart.cartItems[itemIndex].quantity = newQuantity;
                return Product.findById(cart.cartItems[itemIndex].productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cart.cartItems[itemIndex].subtotal = product.price * newQuantity;
                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    return cart.save().then(() => {
                        res.status(200).send({
                            message: 'Item quantity updated successfully',
                            updatedItem: {
                                productId: cart.cartItems[itemIndex].productId,
                                productName: product.name, // Include the product name
                                price: product.price,
                                quantity: cart.cartItems[itemIndex].quantity,
                                subtotal: cart.cartItems[itemIndex].subtotal,
                                _id: cart.cartItems[itemIndex]._id
                            }
                        });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};*/



// remove cart

module.exports.removeFromCart = (req, res) => {
    const { productId } = req.params;  
    const userId = req.user.id;       

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex !== -1) {

                const removedItem = cart.cartItems.splice(itemIndex, 1);


                cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);


                return cart.save().then(updatedCart => {
                    res.status(200).send({
                        message: 'Item removed from cart successfully',
                        updatedCart: {
                            _id: updatedCart._id,
                            userId: updatedCart.userId,
                            cartItems: updatedCart.cartItems,
                            totalPrice: updatedCart.totalPrice,
                            __v: updatedCart.__v
                        }
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};
/*module.exports.removeFromCart = (req, res) => {
    const { productId } = req.params;  
    const userId = req.user.id;       

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(404).send({ error: 'Cart not found' });
            }

            const itemIndex = cart.cartItems.findIndex(item => item.productId.toString() === productId.toString());

            if (itemIndex !== -1) {
                const removedItem = cart.cartItems.splice(itemIndex, 1);

                // Find product details for removed item
                return Product.findById(removedItem[0].productId).then(product => {
                    if (!product) {
                        return res.status(404).send({ error: 'Product not found' });
                    }

                    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal, 0);

                    return cart.save().then(updatedCart => {
                        res.status(200).send({
                            message: 'Item removed from cart successfully',
                            removedItem: {
                                productId: removedItem[0].productId,
                                productName: product.name, // Include the product name
                                price: product.price,
                                quantity: removedItem[0].quantity,
                                subtotal: removedItem[0].subtotal
                            },
                            updatedCart: {
                                _id: updatedCart._id,
                                userId: updatedCart.userId,
                                cartItems: updatedCart.cartItems,
                                totalPrice: updatedCart.totalPrice,
                                __v: updatedCart.__v
                            }
                        });
                    });
                });
            } else {
                return res.status(404).send({ error: 'Item not found in cart' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};*/


// clear cart
module.exports.clearCart = (req, res) => {
    const userId = req.user.id; 

    Cart.findOne({ userId })
        .then(cart => {
            if (!cart) {
                return res.status(400).send({ error: 'Cart not found' });
            }

            cart.cartItems = [];
            cart.totalPrice = 0;

            return cart.save().then(updatedCart => {
                res.status(200).send({
                    message: 'Cart cleared successfully',
                    updatedCart: {
                        _id: updatedCart._id,
                        userId: updatedCart.userId,
                        cartItems: updatedCart.cartItems,
                        totalPrice: updatedCart.totalPrice,
                        __v: updatedCart.__v
                    }
                });
            });
        })
        .catch(error => errorHandler(error, req, res));
};