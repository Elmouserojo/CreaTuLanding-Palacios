const products = [
  {
    id: '01',
    name: 'Random 01',
    price: 100,
    description: 'Lorem ipsum.',
    stock: 10,
    category: 'electronica',
    img: '../placeholder.png',
  },
  {
    id: '02',
    name: 'Random 02',
    price: 100,
    description: 'Lorem ipsum.',
    stock: 10,
    category: 'electronica',
    img: '../placeholder.png',
  },
]

//Promesa

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (error) {
          reject('Error al cargar los productos');
        } else {
          resolve(products)       
    }
    },2000); // Simula un retraso de 2 segundos
  });
}