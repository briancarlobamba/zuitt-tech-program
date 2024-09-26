// Aggregate

db.fruits.insertMany([
	{
        name : "Apple",
        color : "Red",
        stock : 20,
        price: 40,
        supplier_id : 1,
        onSale : true,
        origin: [ "Philippines", "US" ]
    },
	{
        name : "Banana",
        color : "Yellow",
        stock : 15,
        price: 20,
        supplier_id : 2,
        onSale : true,
        origin: [ "Philippines", "Ecuador" ]
    },
	{
        name : "Kiwi",
        color : "Green",
        stock : 25,
        price: 50,
        supplier_id : 1,
        onSale : true,
        origin: [ "US", "China" ]
    },
	{
        name : "Mango",
        color : "Yellow",
        stock : 10,
        price: 120,
        supplier_id : 2,
        onSale : false,
        origin: [ "Philippines", "India" ]
    }
	])


// MongoDB Aggregation

		/*
			- used to generate manipulated data and perform operations to create filtered results that helps in analyzing
		*/

	// $match operator

		/*
			Syntax:
				{$match: {field: value}}
		*/

	// $group operator

		/*
			Syntax:
				{$group: {_id: "value", fieldResult: "valueResult"}}
		*/

// to use them both is to aggregate

		/*
			Syntax:
				db.collectionName.aggregate([{$match: {fieldA: valueA}, {$group: {_id: $fieldB}}, {result: {operation}}}])
		*/

	// $sum operator

		db.fruits.aggregate([
			{$match: {onSale: true}},
			{$group: {_id: "$supplier_id", total: {$sum: "$stock"}}}
			])

	// $project

		db.fruits.aggregate([
			{$match: {onSale: true}},
			{$group: {_id: "$supplier_id", total: {$sum: "$stock"}}},
			{$project: {_id: 0}}
			])

	// $sort

		// 1 || -1 (reversed)

		db.fruits.aggregate([
			{$match: {onSale: true}},
			{$group: {_id: "$supplier_id", total: {$sum: "$stock"}}},
			{$sort: {total: -1}}
			])

	// aggregating results based on array fields

		// $unwind - deconstructs an array

		db.fruits.aggregate([
			{$unwind: "$origin"}
		])

		db.fruits.aggregate([
			{$unwind: "$origin"},
			{$group: {_id: "$origin", kinds: {$sum: 1}}}
		])
