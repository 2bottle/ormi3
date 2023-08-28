console.log("js연결");

// const data = {
//     "id": 1,
//     "productName": "버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링",
//     "price": 12500,
//     "stockCount": 100,
//     "thumbnailImg": "asset/img/1/thumbnailImg.jpg",
//     "option": [],
//     "discountRate": 0,
//     "shippingFee": 1500,
//     "detailInfoImage": [
//     "asset/detail/2/detail1.png",
//     "asset/detail/2/detail2.png"
//     ],
//     "viewCount": 0,
//     "pubDate": "2022-02-28",
//     "modDate": "2022-02-28"
// }

const baseUrl = "http://test.api.weniv.co.kr/";
const mainConatainer = document.getElementById("main");

function createProductCard(productName, price, onclick){
    const $productCard = document.createElement("div");
    // const $thumbnailImg = document.createElement("img");
    const $productName = document.createElement("strong");
    const $price = document.createElement("span");
    
    // $thumbnailImg.src = imgUrl;
    $productName.innerText = productName;
    $price.innerText = price + "원";
    // $productCard.append($thumbnailImg, $productName, $price)
    $productCard.append($productName, $price);
    $productCard.addEventListener("click",onclick);

    return $productCard;
}

function createProductDetail(imgUrl) {
    const $productDetail = document.createElement("img");
    $productDetail.src = imgUrl;
    return $productDetail;
}

function main(){
    const productContainer = document.createElement("div")
    productContainer.id = "product";
    const detailContainer = document.createElement("div")
    detailContainer.id = "detail"
    const products = fetch(baseUrl + "mall").then((res) => {
        return res.json();
    }).then((json) =>{
            json.forEach(data => {
                // const productImgUrl = baseUrl + data.thumbnailImg;
                const productId = data.id;
                const productName = data.productName;
                const price = data.price;
                const onclick = async (e) => {
                    // productContainer = "";
                    const res = await fetch(baseUrl + "mall/" + productId);
                    const json = await res.json;
                    json.detailInfoImage.forEach(imgUrl => {
                        const detailImgUrl = baseUrl + imgUrl;
                        const $productDetail = createProductDetail(detailImgUrl);
                        detailContainer.appendChild($productDetail);
                    })
                }
                const $productCard = createProductCard(productName, price, onclick);
                mainConatainer.appendChild($productCard);
            });
        }   
    );
}

main();