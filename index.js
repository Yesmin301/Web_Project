async function main() {
    const uri = "mongodb+srv://reneyesmin:cataloge@cluster0.om1k6fb.mongodb.net?retryWrites=true&w=majority&appName=Cluster0";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
        
        // Create an instance of the Cart class
        const cart = new Cart(client, 'Catalog', 'Adidas');

        // Example usage
        await cart.addItem("user123", "product123", 1, 100); // Add 1 product with ID "product123" for user "user123" with price 100
        const userCart = await cart.getCart("user123");
        console.log('User Cart:', userCart);
        const totalValue = await cart.getTotalRetailValue("user123");
        console.log('Total Retail Value:', totalValue);

    } catch (e) {
        console.error(e);
    } finally { 
        await client.close();
    }

}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => { 
        console.log(`- ${db.name}`);
    });
}
class Cart {
    constructor(client, dbName, collectionName) {
        this.client = client;
        this.collection = this.client.db(dbName).collection(collectionName);
    }

    // Add item to cart
    async addItem(userId, productId, quantity, price) {
        const filter = { userId: userId, 'items.productId': productId };
        const update = {
            $set: { userId: userId },
            $push: {
                items: {
                    productId: productId,
                    quantity: quantity,
                    price: price
                }
            }
        };
        const options = { upsert: true };

        await this.collection.updateOne(filter, update, options);
    }

    // Retrieve user's cart
    async getCart(userId) {
        const cart = await this.collection.findOne({ userId: userId });
        return cart ? cart.items : [];
    }

    // Calculate total retail value of the cart
    async getTotalRetailValue(userId) {
        const cart = await this.collection.findOne({ userId: userId });
        if (!cart || !cart.items) return 0;

        return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
