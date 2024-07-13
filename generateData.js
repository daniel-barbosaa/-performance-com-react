const fs = require('fs');

module.exports = () => {
    const data = {
        products: []
    }

    for (let i = 0; i < 1000; i++) {
        data.products.push({
            id: i + 1,
            price: 80,
            title: `Camiseta ${i + 1}`
        })
    }

    return data;
}

const data = module.exports();
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
