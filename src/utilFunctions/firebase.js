import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs, getDoc, doc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-otero.firebaseapp.com",
  projectId: "react-34755-2022-otero",
  storageBucket: "react-34755-2022-otero.appspot.com",
  messagingSenderId: "670035738663",
  appId: "1:670035738663:web:f8378fa2bb04169b4ace02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const loadDataBase = async() => {
  const promise = await fetch("./json/products.json")
  const products = await promise.json()
  products.forEach( async(product) => {
    await addDoc(collection(db, "productos"), {
      categoryId: product.categoryId,
      product: product.product,
      model: product.model,
      img: product.img,
      value: product.value,
      stock: product.stock,
      firstFeature: product.firstFeature,
      secondFeature: product.secondFeature,
      thirdFeature: product.thirdFeature,
      fourthFeature: product.fourthFeature,
      fifthFeature: product.fifthFeature,
      sixthFeature: product.sixthFeature,
      seventhFeature: product.seventhFeature,
      eigthFeature: product.eigthFeature,
      ninethFeature: product.ninethFeature,
      tenthFeature: product.tenthFeature,
    })
  })
}


const getProduct = async(id) => {
  const product = await getDoc(doc(db, "productos", id))
  const prod = [product.id, product.data()]
  return prod
}

const getProducts = async() => {
  const products = await getDocs(collection(db, "productos"))
  const items = products.docs.map(producto => [producto.id, producto.data()])
  return items
}

export {loadDataBase, getProducts, getProduct}