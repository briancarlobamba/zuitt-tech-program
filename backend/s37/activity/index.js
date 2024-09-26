/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Create 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */
async function insertSales(db){
    return await (

        db.sales.insertMany([
            {
                product: "Laptop",
                category: "Electronics",
                quantity: 5,
                price: 1200.00
            },
            {
                product: "Smartphone",
                category: "Electronics",
                quantity: 10,
                price: 800.00
            },
            {
                product: "Desk Chair",
                category: "Furniture",
                quantity: 15,
                price: 150.00
            },
            {
                product: "Coffee Maker",
                category: "Appliances",
                quantity: 8,
                price: 100.00
            },
            {
                product: "Running Shoes",
                category: "Apparel",
                quantity: 20,
                price: 75.00
            }
        ])

    )
}
async function insertCustomers(db){
    return await (

        db.customers.insertMany([
            {
                name: "John Doe",
                age: 30,
                gender: "Male",
                region: "North America"
            },
            {
                name: "Jane Smith",
                age: 25,
                gender: "Female",
                region: "Europe"
            },
            {
                name: "Ahmed Khan",
                age: 40,
                gender: "Male",
                region: "Middle East"
            },
            {
                name: "Maria Garcia",
                age: 35,
                gender: "Female",
                region: "South America"
            },
            {
                name: "Li Wei",
                age: 28,
                gender: "Female",
                region: "Asia"
            }
        ])

    )
}

/* 
3. Calculate total sales revenue for each product category using $group and $sum.
*/
async function totalRevenue(db) {
    return await(

        db.sales.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
            }
        ])

    )
}

/* 
4. Identify the regions with most sales revenue using $group, $sum, and $sort.
*/
async function revenuePerRegion(db) {
    return await(

        db.sales.aggregate([
            {
                $group: {
                    _id: "$region",
                    totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
            },
            {
                $sort: { totalRevenue: -1 }
            }
        ])

    )
}

/* 
5. Analyze customer demographics by age group using $match and $group.
*/
async function demographicsByAge(db) {
    return await(

        db.customers.aggregate([
            {
                $match: {
                    age: { $gte: 18 } 
                }
            },
            {
                $group: {
                    _id: {
                        $switch: {
                            branches: [
                                { case: { $lt: ["$age", 30] }, then: "18-29" },
                                { case: { $lt: ["$age", 40] }, then: "30-39" },
                                { case: { $lt: ["$age", 50] }, then: "40-49" }
                            ],
                            default: "50+" 
                        }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 } 
            }
        ])

    )
}

/* 
6. Determine average order value using $group and $avg.
    - Look up the use of $avg operator.
*/
async function orderAverage(db) {
    return await(

        db.sales.aggregate([
            {
                $group: {
                    _id: null,
                    averageOrderValue: {
                        $avg: { $multiply: ["$quantity", "$price"] }
                    }
                }
            }
        ])

    )
}

/* 
7. Explore product popularity trends over time using $project, $group, and $sort.
    - Look up the use of $dateToString operator.
*/
async function productPopularity(db) {
    return await(
        db.sales.aggregate([
            {
                $project: {
                    product: 1,
                    salesDate: { $dateToString: { format: "%Y-%m", date: "$date" } }, 
                    quantity: 1
                }
            },
            {
                $group: {
                    _id: { product: "$product", salesDate: "$salesDate" }, 
                    totalQuantitySold: { $sum: "$quantity" } 
                }
            },
            {
                $sort: { "_id.salesDate": 1 }
            }
        ])
    )
}



/* 
8. Identify outliers in sales data using $project, $match, and $sort.
    - Outliers are data points that are significantly different from the rest of the data.
    - Filter sales with price greater than 1000
*/
async function salesOutlier(db) {
    return await(

        db.sales.aggregate([
    {
        $project: {
            product: 1,
            category: 1,
            quantity: 1,
            price: 1
        }
    },
    {
        $match: {
            price: { $gt: 1000 } 
        }
    },
    {
        $sort: { price: -1 }
    }
])

    )
}

/* 
9. Design a schema for storing shipping address considering 1-1 relationship scenarios for customer and shipping address collections.
    - Insert a document inside customers collection with the following properties:
        - name - string
        - age - number
        - gender - string
        - region - string
    - Insert a document inside shipping address collection with the following properties:
        - _id - ObjectId
        - customerId - the same Id as the customer document
        - street - string
        - city - string
        - state - string
        - postalCode - string
        - country - string
    - if the _id of customer is equal to the cusomerId of the shipping address document, return true, otherwise return false.
*/

async function oneToOneRelationship(db) {
    const customer = await db.customers.findOne({})
    const address = await db.shipping_address.findOne({})

    if (customer && address && customer._id.equals(address.customerId)) {
        return true
    } else {
        return false
    }
}

/* 
10. Design a schema for storing customer feedback and reviews, considering 1-Many relationship scenarios.
    - Insert a document inside customers collection with the following properties:
        - name - string
        - age - number
        - gender - string
        - region - string
    - Insert a document inside feedbacks collection with the following properties:
        - _id - ObjectId
        - customerId - the same Id as the customer document
        - rating - number
        - comment - string
    - if the _id of customer is equal to the cusomerId of the newly created objects in the feedbacks collection, return true, otherwise return false.

*/

async function oneToManyRelationship(db) {

    const newCustomer = await db.customers.insertOne({
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        region: 'North'
    })


    const feedbacks = [
        { rating: 5, comment: 'Excellent service!' },
        { rating: 4, comment: 'Very good, but room for improvement.' }
    ]
    
    const feedbackInserts = feedbacks.map(feedback => {
        return db.feedbacks.insertOne({
            customerId: newCustomer.insertedId,
            ...feedback
        })
    })

    await Promise.all(feedbackInserts)

    const feedbackDocs = await db.feedbacks.find({ customerId: newCustomer.insertedId }).toArray()

    if (feedbackDocs.length === feedbacks.length) {
        return true
    } else {
        return false
    }
}


try{
    module.exports = {
        insertSales,
        insertCustomers,
        totalRevenue,
        revenuePerRegion,
        demographicsByAge,
        orderAverage,
        productPopularity,
        salesOutlier,
        oneToOneRelationship,
        oneToManyRelationship
    };
} catch(err){

};