const products = [{
        id: 1,
        name: 'Kui Ye Chen’s AirPods',
        price: 250,
        condition: 'New: A brand-new, unused, unopened and undamaged item in original retail packaging (where packaging is applicable). If the item comes direct from a manufacturer, it may be delivered in non-retail packaging, such as a plain or unprinted box or plastic bag. See the seller\'s listing for full details.',
        image: '/img/product-1.jpg',
        quantity: 12,
        category: 'electronics',
        longDescription: 'Apple’s Air Pods are wireless in-ear headphones designed in white color. They enable you to listen effortlessly to all of your devices, connecting automatically when taken out of their case. Optical sensors and motion accelerometers recognize when you speak and automatically set the integrated microphone to focus on your voice filtering out background noise or pause when you take them out of your ears. A W1 chip manages battery life and a fast connection.',
        reviews: [{
            reviewer: 'Zafar',
            review: 'Very good product. Battery lasts more than 4 hours.',
            rating: 4
        }]
    },
    {
        id: 2,
        name: 'Air Jordan 12 gym red',
        price: 300,
        condition: 'New: A brand-new, unused, unopened and undamaged item in original retail packaging (where packaging is applicable). If the item comes direct from a manufacturer, it may be delivered in non-retail packaging, such as a plain or unprinted box or plastic bag. See the seller\'s listing for full details.',
        image: '/img/product-2.jpg',
        quantity: 10,
        category: 'Lifestyle',
        longDescription: 'The Air Jordan 12 Retro ‘Gym Red’ presents a monochromatic take on Tinker Hatfield’s 1996 design. The entirety of the mid-top silhouette is dipped in red, including the rubber tooling and herringbone tread outsole. Contrasting hits of black are used throughout the shoe’s branding elements and sockliner. While the all-red finish presents a radical new look for the vintage silhouette, the performance benefits remain unchanged, highlighted by full-length Zoom Air that extends from heel to toe.',
        reviews: [{
            reviewer: 'Shahid',
            review: 'Received earlier than expected. Shoes were exactly what I ordered and 100% authentic. Very pleased with this purchase.',
            rating: 5
        }, {
            reviewer: 'Zahid',
            review: 'Normal Delivery. Shoes are good quality. Very happy with new shoes.',
            rating: 4
        }]
    }
];
module.exports = products;





// name: { type: String, required: true },
// price: { type: Number, required: true },
// shortDescription: { type: String, required: true },
// quantity: { type: String, required: true },
// category: { type: String, required: true },
// longDescription: { type: String, required: true },
// reviews: