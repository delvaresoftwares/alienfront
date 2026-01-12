// Product Images
import menPhilFront from '../assets/images/products/men/Tee/Phil\'Stone/front.jpg';
import menPhilBack from '../assets/images/products/men/Tee/Phil\'Stone/back.jpg';
import menPhilModel0 from '../assets/images/products/men/Tee/Phil\'Stone/0.png';
import menPhilModel1 from '../assets/images/products/men/Tee/Phil\'Stone/1.png';

import menTropicalFront from '../assets/images/products/men/Tee/Tropical/front.jpg';
import menTropicalBack from '../assets/images/products/men/Tee/Tropical/back.jpg';
import menTropicalModel0 from '../assets/images/products/men/Tee/Tropical/0.png';
import menTropicalModel1 from '../assets/images/products/men/Tee/Tropical/1.png';

import menCoreFront from '../assets/images/products/men/Tee/core collection/front.jpg';
import menCoreBack from '../assets/images/products/men/Tee/core collection/back.jpg';
import menCoreModel0 from '../assets/images/products/men/Tee/core collection/0.png';
import menCoreModel1 from '../assets/images/products/men/Tee/core collection/1.png';

import womenShirtFront from '../assets/images/products/women/front.jpg';
import womenShirtBack from '../assets/images/products/women/back.jpg';
import womenShirtModel0 from '../assets/images/products/women/0.png';
import womenShirtModel1 from '../assets/images/products/women/1.png';

const products = [
    // --- MEN'S COLLECTION ---
    {
        id: "men-philosopher",
        title: "Philosopher's Stone",
        collection: "MEN 01",
        price: 4499.00,
        image: menPhilFront,
        imageBack: menPhilBack,
        gallery: [menPhilModel0, menPhilModel1, menPhilFront, menPhilBack],
        category: 'clothing',
        gender: ['men'],
        description: "Alchemy meets oversize. The signature stone print.",
        specs: { material: "Cotton", fit: "Oversized", origin: "Earth" }
    },
    {
        id: "men-tropical",
        title: "Neon Tropical",
        collection: "MEN 02",
        price: 3999.00,
        image: menTropicalFront,
        imageBack: menTropicalBack,
        gallery: [menTropicalModel0, menTropicalModel1, menTropicalFront, menTropicalBack],
        category: 'clothing',
        gender: ['men'],
        description: "Summer noir aesthetics.",
        specs: { material: "Cotton", fit: "Regular", origin: "Earth" }
    },
    {
        id: "men-core",
        title: "Alienhill Core",
        collection: "MEN 03",
        price: 2999.00,
        image: menCoreFront,
        imageBack: menCoreBack,
        gallery: [menCoreModel0, menCoreModel1, menCoreFront, menCoreBack],
        category: 'clothing',
        gender: ['men'],
        description: "The essential black tee.",
        specs: { material: "Cotton", fit: "Regular", origin: "Mother Ship" }
    },

    // --- WOMEN'S COLLECTION ---
    {
        id: "women-shirt-tropical",
        title: "Tropical Glitch",
        collection: "WOMEN 01",
        price: 3499.00,
        image: womenShirtFront,
        imageBack: womenShirtBack,
        gallery: [womenShirtModel0, womenShirtModel1, womenShirtFront, womenShirtBack],
        category: 'clothing',
        gender: ['women'],
        description: "Vibrant cuts for the digital age.",
        specs: { material: "Cotton Blend", fit: "Crop / Regular", origin: "Earth" }
    }
];

export default products;
