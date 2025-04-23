const products = [
  {
      id:'01',
      name:'Cadena de Oro',
      price:10000,
      description:'lorem lorem lorem',
      stock:15,
      category:'nuevos',
      img:'/cadenaDeOro.png'
  },
  {
      id:'02',
      name:'Pantalla LCD',
      price:9000,
      description:'lorem lorem lorem',
      stock:5,
      category:'ofertas',
      img:'../pantalla.png'
  },
  {
      id:'03',
      name:'Pantalón de Algodón',
      price:3800,
      description:'lorem lorem lorem',
      stock:25,
      category:'mas vendidos',
      img:'../pantalon.png'
  },
  {
      id:'04',
      name:'Disco SSD',
      price:8000,
      description:'lorem lorem lorem',
      stock:5,
      category:'nuevos',
      img:'../ssd.png'
  },
  {
      id:'05',
      name:'Remera de Algodón',
      price:2000,
      description:'lorem lorem lorem',
      stock:5,
      category:'nuevos',
      img:'../remera.png'
  }

]

//Promesa
//devuelve todos los productos
export const getProducts = () => {
  return new Promise((resolve, reject)=>{
      let error= false
      setTimeout(()=>{
          if(error){
              reject('No hay data ')
          }else{
              resolve(products)
          }
      },3000)
  })
}

//devuelva 1 solo producto

export const getOneProduct = (id)=>{
  return new Promise((resolve)=>{
      let productFound= products.find((prod)=> prod.id === id)
      setTimeout(()=>{
          // resolve(products[0])
          resolve(productFound)
      },1500)
  })
}