export const products = [
  
  {
      name:'Pantalla LCD',
      price:9000,
      description:'lorem lorem lorem',
      stock:5,
      category:'ofertas',
      img:'../pantalla.png'
  },
  {
      name:'Pantalón de Algodón',
      price:3800,
      description:'lorem lorem lorem',
      stock:25,
      category:'mas vendidos',
      img:'../pantalon.png'
  },
  {
      name:'Disco SSD',
      price:8000,
      description:'lorem lorem lorem',
      stock:5,
      category:'nuevos',
      img:'../ssd.png'
  },
  {
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