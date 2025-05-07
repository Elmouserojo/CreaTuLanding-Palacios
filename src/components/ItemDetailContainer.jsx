import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import ItemDetail from './ItemDetail'
import LoaderComponent from './LoaderComponents'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productCollection = collection(db, "productos")
    const docRef = doc(productCollection, itemId)

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProductDetail({ id: res.id, ...res.data() })
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [itemId])

  if (invalid) {
    return (
      <div>
        <h2>Lo sentimos, ese producto no existe 😱</h2>
        <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      {loading ? <LoaderComponent /> : <ItemDetail productDetail={productDetail} />}
    </div>
  )
}

export default ItemDetailContainer
