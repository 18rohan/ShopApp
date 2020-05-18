class Product {
    constructor(id, categoryId,ownerId,name, price, description,imageurl){
        this.id = id;
        this.categoryId = categoryId;
        this.ownerId = ownerId;
        this.name = name;
        this.price= price;
        this.description= description;
        this.imageurl = imageurl;

    }
}

export default Product;