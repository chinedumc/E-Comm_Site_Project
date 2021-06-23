// Calling Up Our Modal
let modal = document.querySelector(".modal");
const showModal = document.querySelector("#uploadbtn");
const hideModal = document.querySelector(".hide");

showModal.addEventListener('click', function() {
    ShowModal()});

function ShowModal(){
    modal.style.bottom = "20px";
};

hideModal.addEventListener('click', function() {
    HideModal()});

function HideModal(){
    modal.style.bottom = "-300px"
};

// How we get our Product Name from the Modal
function ProdName(){
    let productName = document.querySelector('#productName');
    prodName = productName.value;
    return prodName;
}

// How we get our Product Details from the Modal
function ProdDetails() {
    let productDesc = document.querySelector('#productDesc');
    prodDesc = productDesc.value;
    return prodDesc;
}

// How we get Product Price from the Modal
function ProdPrice() {
    let productPrice = document.querySelector('#productPrice');
    prodPrice = productPrice.value;
    return prodPrice;
}
// How we get our Image Src value
function ImgSrc() {
    let productUrl = document.querySelector('#productUrl');
    imgSrc = productUrl.value
    return imgSrc
    
};


// How we get our Image Alt tag
function ImgAlt() {
    imgName = ImgSrc().substr(ImgSrc().indexOf("/")+1);
    imgAlt = `${imgName.slice(0, -4)}_image`
    return imgAlt
};

// Creating The 4th Product in the Last Row Class
let clickUpload = document.querySelector('#confirm-upload');
clickUpload.addEventListener('click', function() {
    newProdDiv();
    ImgSrc();
    ProdName();
    ProdPrice();
    HideModal();
});

function newProdDiv() {
    const rowDiv = document.querySelector('.row.display.stock')
    const prodDiv = document.createElement('div');
    prodDiv.classList.add('col-4')
    const prodElement = ` <img src= ${ImgSrc()} alt= ${ImgAlt()}>
<h4>${ProdName()}</h4>
<p>${ProdDetails()}</p>
<h4>${ProdPrice()}</h4>`;
    prodDiv.insertAdjacentHTML('beforeend', prodElement);
    rowDiv.appendChild(prodDiv); 
}
