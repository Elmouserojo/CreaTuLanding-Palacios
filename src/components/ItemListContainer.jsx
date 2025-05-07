import {getProducts, products} from '../mock/AsyncService'
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponents'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const { categoryId } = useParams()
  console.log(categoryId)

  // Conexión a Firebase
  useEffect(() => {
    setLoader(true)
    // Conectamos con nuestra colección
    const productsCollection = categoryId ? 
      query(collection(db, "productos"), where("category", "==", categoryId)) 
      : collection(db, "productos")

    // Pedir los documentos
    getDocs(productsCollection)
      .then((res) => {
        // Limpiamos los datos para poder utilizarlos
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }, [categoryId])


  return (
    <div>
      {
        loader ? <LoaderComponent />
          : <div>
              <h1>{greeting} {categoryId && <span style={{ textTransform: 'capitalize' }}>{categoryId}</span>}</h1>
              <ItemList data={data} />
            </div>
      }
    </div>
  )
}

export default ItemListContainer
