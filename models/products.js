class Product {
    constructor(id, categoryId,ownerId,name, price, description,imageurl){
        this.id = id;
        
        this.ownerId = ownerId;
        this.name = name;
        this.price= price;
        this.description= description;
        this.imageurl = imageurl;
        this.categoryId = categoryId;

    }
}

export default Product;