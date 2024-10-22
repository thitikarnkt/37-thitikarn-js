const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productImgUrl = document.getElementById("product-img");
const addProductBtn = document.getElementById("add-product-btn");
const productItems = document.getElementById("product-item");

const addToCartBtn = document.getElementById("add-cart-btn");
const productCartItem = document.getElementById("product-cart-items")

let items = [];

addProductBtn.addEventListener("click", () => {
    const productNameText = productName.value.trim();
    const productPriceNum = productPrice.value.trim();
    const productUrl = productImgUrl.value.trim();
    if (productNameText && productPriceNum && productUrl) { // ถ้า user เว้นช่องว่างไว้ช่องใดช่องหนึ่ง ข้อมูลจะไม่สามารถป้อนเข้าไปได้
        const pdInfo = {
            id: Date.now(),
            name: productNameText,
            price: productPriceNum,
            url: productUrl,
        };
        items.push(pdInfo);
        // console.log(items);
        renderItems(items)
        productName.value = "";
        productPrice.value = null
        productImgUrl.value = "";
    }
    console.log(items)
});


function renderItems(itemToRender) {
    productItems.innerHTML = "";
    itemToRender.forEach((items) => {
        //สร้าง li เป็นที่เก็บของ product แต่ละอัน /มี tags ลูก 3 ตัว /แสดงผลเป็น flex เพื่อให้ลูกเรียงต่อกันในแนวนอน
        const productItem = document.createElement("li");
        // productItem.className = "product-item"
        productItem.style.display = "flex";
        productItem.style.listStyleType = "none";


        //สร้าง tag ลูกตัวที่ 1 สำหรับทำ checkbox
        const productSelection = document.createElement("input");
        productSelection.setAttribute("type", "checkbox");
        productSelection.setAttribute("id", `item_${items.id}`);
        // productSelection.setAttribute("value", items.id) //เพิ่ม value เป็น id ของ product นั้น
        productItem.appendChild(productSelection);
        
        //สร้าง tag ลูกตัวที่ 2 สำหรับแสดงรูปภาพ
        // const productImg = document.createElement("div");
        // productImg.innerHTML = `<img src="${items.url}" width="204" height="204">`
        const productImg = document.createElement("img");
        productImg.setAttribute("src", items.url)
        productImg.setAttribute("width", "204")
        productImg.setAttribute("height", "204")
        productImg.style.marginLeft = "48px";
        productItem.appendChild(productImg);

        //สร้าง div ลูกตัวที่ 3 สำหรับแสดง ชื่อโปรดักซ์กับราคา
        const productInfo = document.createElement("div");
        productInfo.style.marginLeft = "24px";

        //สร้าง div หลานตัวที่ 1 แสดง ชื่อโปรดักซ์
        const productName = document.createElement("h1");
        productName.innerHTML = `${items.name}`;
        productInfo.appendChild(productName);

        //สร้าง div หลานตัวทีื 2 แสดง ราคาโปรดักซ์
        const productPrice = document.createElement("h3");
        productPrice.innerHTML = `฿ ${items.price}`;
        productInfo.appendChild(productPrice);

        productItem.appendChild(productInfo);
        productItems.appendChild(productItem);
    });
}

addToCartBtn.addEventListener("click", () => {
    let selectedItems = [];
    items.forEach((item) => {  //วนลูปตรวจสอบ checkbox ของสินค้าทั้งหมด
        const selectedProduct = document.getElementById(`item_${item.id}`);
        console.log(selectedProduct)
       
        if (selectedProduct.checked) {
            selectedItems.push(item); //ถ้าถูกเลือก เพิ่มโปรดักเข้าไปในรายการที่เลือก
        }
    });
    // console.log(selectedItems); //แสดงรายการสินค้าที่ถูกเลือก
});
  
// function renderAddToCart(itemAddToCart) {
//     productCartItem.innerHTML = ""

// }


