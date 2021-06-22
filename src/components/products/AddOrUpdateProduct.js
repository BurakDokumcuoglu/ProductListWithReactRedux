import React,{useEffect, useState} from "react"
// useEffect hook'u life-cycle eventleri yerine kullanılıyor(componentDidMount vs)
//useState hook'u setState yerine kullanılıyor
import {connect} from "react-redux"
import getCategories from "../../redux/actions/categoryActions"
import saveProduct from "../../redux/actions/productActions"


function AddOrUpdateProduct({products,categories,getProducts,getCategories,saveProduct,history,...props}){  //mevcut proplara öncekiler eklenir

    const [product,setProduct] = useState({...props.product})   //product state'ini setProduct ile set edebiliriz anlamındadır

    useEffect(() => {
        if(categories.length === 0){
            getCategories()
        }
        setProduct({...props.product})
    },[props.product]); // props.product dom'a yerleşince useEffect sonlansın. yazılmazsa sonsuz döngüye girecektir

    function handleChange(event){
        const {name,value} = event.target  // event.target içindeki name ve value değerlerini {name,value} değerlerine atar
        setProduct(previousProduct => ({
            ...previousProduct,
            [name] : name==="categoryId"?parseInt(value,10):value // değişecek alan id ise int'e çeviriyoruz, değilse direk atama yapılıyor
        }))
    }

    function handleSave(event){
        event.preventDefault(); // işlem esnasında sayfanın refresh olmasını engelliyoruz
        saveProduct(product).then(()=>{
            history.push("/") //işlemin bitmesinin ardından yönlendirme yapabilmek için
        })
    }

}



const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapDispatchToProps)(AddOrUpdateProduct)