const Item = require("../models/Item");

module.exports.addItem = (req,res) => {

	let newItem = new Item({
		name : req.body.name,
		quantity : req.body.quantity
	});

	newItem.save()
	.then(savedItem => res.status(201).send(savedItem))
	.catch(saveErr => {

		console.error("Error in saving the item: ", saveErr)
		return res.status(500).send({ error: 'Failed to save the item' });
	})

};

module.exports.getAllItems = (req, res) => {

	Item.find({})
	.then(items => {

	    if (items.length > 0){
	        return res.status(200).send({ items });
	    }
	    else {

	        return res.status(200).send({ message: 'No items found.' })
	    }

	}).catch(err => res.status(500).send({ error: 'Error finding items.' }));

};


