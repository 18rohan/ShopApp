import Product from '../models/products';
import ProductCategories from '../models/productCategories';

export const PRODUCT_CATEGORIES = [
    
    new ProductCategories('c4','Technology', {uri : 'https://cdn.vox-cdn.com/thumbor/8411pSdy5t2QhxMq2lpvBSrdJEY=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/54830673/20161004-google-family-hero-shot.0.jpg'}),
    new ProductCategories('c6','Food', {uri : 'https://www.rachaelraymag.com/.image/t_share/MTYzOTY0NTAxODQwODk3NzYx/global-grocery-items-counter-ad0653ad.jpg'}),
    new ProductCategories('c1','Groceries',{uri : 'https://thumbs.dreamstime.com/b/young-girl-holds-full-paper-bag-groceries-white-wooden-background-above-top-view-flat-lay-young-girl-holds-full-paper-117080551.jpg'}),
    new ProductCategories('c2','Electronics', {uri : 'https://images.immediate.co.uk/production/volatile/sites/4/2020/05/Surface-Spring-2020-f0ad949.jpg?quality=90&resize=940,530'}),
    new ProductCategories('c5','Gym Equipments',{uri : 'https://cdn3.vectorstock.com/i/1000x1000/38/52/dumbbell-icon-on-white-background-vector-18163852.jpg'}),
    new ProductCategories('c3','Food & Groceries', {uri : 'https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-white-table-space-text-157752640.jpg'}),
    new ProductCategories('c8','Cereals', {uri : 'https://thumbs.dreamstime.com/b/young-girl-holds-full-paper-bag-groceries-white-wooden-background-above-top-view-flat-lay-young-girl-holds-full-paper-117080551.jpg'}),
    new ProductCategories('c7','FootWear',{uri : 'https://static.businessworld.in/article/article_extra_large_image/1560859917_Yqz5H0_sneaker2_470.jpg'}),
    
];

export const PRODUCTS = [
    new Product('p7',['c4','c2'],'own7','Macbook Pro 16 inch', 20000, 'Thriller',{uri : 'https://www.bhphotovideo.com/images/images2500x2500/apple_mvvk2ll_a_16_macbook_pro_late_1520435.jpg'}),
    new Product('p8',['c4','c2'],'own8','Samsung S10+', 30000, 'Thriller',{uri : 'https://www.samsung.com/global/galaxy/galaxy-s10/connected-plus/images/galaxy-s10_connected-plus_kv_s10_s.png'}),
    new Product('p3',['c1','c6','c8','c3'],'own3','Coffee', 40000, 'Thriller',{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMO7vMDdh5p7pppzPj39BKthwFgXTztVibx3fCPBsgTISwqn4V&usqp=CAU'}),
    new Product('p4',['c1','c6','c8','c3'],'own4','Tea', 1500, 'Thriller',{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2pjzhPO3jNLs9SZB5NlRWdAjcc4pJ9SyZtB122nkYb2MAvUKU&usqp=CAU'}),
    new Product('p2',['c1','c6','c8','c3'],'own2','Ketchup', 'Rs.250.00', 'Thriller',{uri : 'https://www.meijer.com/content/dam/meijer/product/0001/30/0000/11/0001300000115_1200.png'}),
    new Product('p5',['c1','c6','c8','c3'],'own5','Rice', 'Rs.800.00', 'Thriller',{uri : 'https://i.pinimg.com/originals/9d/74/5f/9d745fce45889f18d2ccb6b15e68bd69.jpg'}),
    new Product('p1',['c1','c6','c8','c3'],'own1','Cereals', 'Rs.540.80', 'Thriller',{uri : 'https://previews.123rf.com/images/siraphol/siraphol1606/siraphol160600154/57619256-bangkok-thailand-may-27-2016-nestle-cereal-box-isolated-on-white-background.jpg'}),
    new Product('p6',['c4','c2'],'own6','Iphone 11 Pro', '£ 3 million', 'Thriller',{uri : 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG39.png'}),
    new Product('p10',['c4','c2'],'own8','Dell XPS 13', '£ 3 million', 'Thriller',{uri : 'https://specials-images.forbesimg.com/imageserve/5e443f518b6cf300071e8c94/960x0.jpg?fit=scale'}),
    new Product('p11',['c4','c2'],'own8','One Plus 8', '£ 3 million', 'Thriller',{uri : 'https://www.androidsage.com/wp-content/uploads/2020/04/OnePlus-8-Pro.jpg'}),
    new Product('p9',['c1','c6','c8','c3'],'own2','Ketchup', 'Rs.250.00', 'Thriller',{uri : 'https://www.meijer.com/content/dam/meijer/product/0001/30/0000/11/0001300000115_1200.png'}),
];

