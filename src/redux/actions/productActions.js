import * as actionTypes from "./ActionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || "")/*id varsa onu koy,yoksa boş geç */ , {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" }, // api header istiyorsa girilecektir
    body: JSON.stringify(product), // post,put işlemlerinde body gönderilen datadır. json'dan stringe çevirerek gönderiyoruz
  })
    .then(handleResponse) //işlem başarılı olursa
    .catch(handleError); //işlemde hata olursa
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product).then((savedProduct) => { //apiye işlemlerin yapılması
      product.id  //id varsa güncelleme, yoksa ekleme işlemi yapıyoruz anlamı taşır
        ? dispatch(updateProductSuccess(savedProduct))   //reducerlardaki statelerin güncellenmesi
        : dispatch(createProductSuccess(savedProduct));  //reducerlardaki statelerin güncellenmesi
    }).catch(error => {throw error} );
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu.")
  throw error;
}

export function getProducts(categoryId) {
  return function (dispatch) {
    //action'ımızın devreye girmesini sağlar
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
