import { Food } from "./app/shared/model/Food";
import { Tag } from "./app/shared/model/Tag";

export const sample_foods:Food[] =[
    {
        id:'1',
        name:"Pizza Pepperoni",
        cookTime:'10-20',
        price:349,
        favorite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'assets/food-1.jpg',
        tags: ['FastFood','Pizza','Vegetarian'],
    },
    {
        id:'2',
        name:"Meatball",
        cookTime:'20-30',
        price:280,
        favorite:true,
        origins:['persia','middle east','china'],
        stars:4.7,
        imageUrl:'assets/food-2.jpg',
        tags: ['Lunch','SlowFood','Dinner'],
    },
    {
        id:'3',
        name:"Hamburger",
        cookTime:'10-15',
        price:160,
        favorite:true,
        origins:['germany','us'],
        stars:3.5,
        imageUrl:'assets/food-3.jpg',
        tags: ['Fastfood','burger','Vegetarian'],
    },
    {
        id:'4',
        name:"Fried Potatoes",
        cookTime:'15-20',
        price:99,
        favorite:true,
        origins:['belgium','france'],
        stars:3.3,
        imageUrl:'assets/food-4.jpg',
        tags: ['FastFood','Fry','Vegetarian'],
    },
    {
        id:'5',
        name:"Chicken Soup",
        cookTime:'40-50',
        price:110,
        favorite:false,
        origins:['india','asia'],
        stars:3.0,
        imageUrl:'assets/food-5.jpg',
        tags: ['SlowFood','Soup'],
    },
    {
        id:'6',
        name:"Vegetables Pizza",
        cookTime:'40-50',
        price:270,
        favorite:false,
        origins:['italy'],
        stars:4.0,
        imageUrl:'assets/food-6.jpg',
        tags: ['FastFood','Pizza','Vegetarian'],
    },
    {
        id:'7',
        name:"Spicy Chees Burger",
        cookTime:'20-30',
        price:210,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-7.jpg',
        tags: ['FastFood','burger','Vegetarian'],
    },
    {
        id:'8',
        name:"Vegetables Magento Pizza",
        cookTime:'45-50',
        price:460,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-8.jpg',
        tags: ['FastFood','Pizza','Vegetarian'],
    },
    {
        id:'9',
        name:"Vegetable Chowmein",
        cookTime:'15-20',
        price:80,
        favorite:true,
        origins:['indian','chinese'],
        stars:2.5,
        imageUrl:'assets/food-9.jpg',
        tags: ['FastFood','Lunch','Vegetarian'],
    },
    {
        id:'10',
        name:"Jeera Rice",
        cookTime:'5-10',
        price:50,
        favorite:false,
        origins:['indian','USA'],
        stars:3.5,
        imageUrl:'assets/food-10.jpeg',
        tags: ['Lunch','Dinner','Vegetarian'],
    },
    {
        id:'11',
        name:"Dal Makhni",
        cookTime:'45-50',
        price:130,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-11.jpg',
        tags: ['Lunch','Dinner','Vegetarian'],
    },
    {
        id:'12',
        name:"Butter Naan",
        cookTime:'15-20',
        price:15,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-12.jpeg',
        tags: ['Lunch','Dinner','Vegetarian'],
    },
    {
        id:'13',
        name:"Allo Paratha",
        cookTime:'35-40',
        price:35,
        favorite:false,
        origins:['indian'],
        stars:3.5,
        imageUrl:'assets/food-13.jpg',
        tags: ['Lunch','Dinner','Vegetarian'],
    },
    {
        id:'14',
        name:"Chicken Briyani",
        cookTime:'45-50',
        price:140,
        favorite:false,
        origins:['indian'],
        stars:5,
        imageUrl:'assets/food-14.jpg',
        tags: ['Lunch','Dinner'],
    },
    {
        id:'15',
        name:"Meethi Lassi",
        cookTime:'Ready',
        price:70,
        favorite:false,
        origins:['indian'],
        stars:3,
        imageUrl:'assets/food-15.jpg',
        tags: ['Vegetarian','Beverage'],
    },
    {
        id:'16',
        name:"Samosa Chaat",
        cookTime:'45-50',
        price:50,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-16.jpg',
        tags: ['FastFood','Lunch','Vegetarian'],
    },
    {
        id:'17',
        name:"Vegetable Momos",
        cookTime:'30-35',
        price:75,
        favorite:true,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-17.jpg',
        tags: ['FastFood','Lunch','Vegetarian'],
    },
    {
        id:'18',
        name:"Chana Bhature",
        cookTime:'25-30',
        price:190,
        favorite:false,
        origins:['indian'],
        stars:1,
        imageUrl:'assets/food-18.jpg',
        tags: ['Lunch','SlowFood','Dinner','Vegetarian'],
    },
    {
        id:'19',
        name:"Paneer Tikka",
        cookTime:'45-50',
        price:310,
        favorite:false,
        origins:['indian'],
        stars:4.5,
        imageUrl:'assets/food-19.jpg',
        tags: ['Lunch','Dinner','Vegetarian'],
    },
    {
        id:'20',
        name:"Vegetable Salad",
        cookTime:'5-10',
        price:130,
        favorite:false,
        origins:['indian'],
        stars:2,
        imageUrl:'assets/food-20.jpg',
        tags: ['Lunch','SlowFood','Dinner','Vegetarian'],
    },
    {
        id:'21',
        name:"Cofee",
        cookTime:'20-25',
        price:120,
        favorite:false,
        origins:['indian'],
        stars:4.5,
        imageUrl:'assets/food-21.jpg',
        tags: ['Vegetarian','Beverage'],
    },
    {
        id:'22',
        name:"PineApple Pastry",
        cookTime:'Ready',
        price:25,
        favorite:false,
        origins:['indian'],
        stars:3.5,
        imageUrl:'assets/food-22.jpg',
        tags: ['FastFood','Lunch','Vegetarian','Dessert'],
    },
    {
        id:'23',
        name:"Gulab Jamun",
        cookTime:'Ready',
        price:45,
        favorite:false,
        origins:['indian'],
        stars:4.5,
        imageUrl:'assets/food-23.jpg',
        tags: ['Vegetarian','Dessert'],
    },
    {
        id:'24',
        name:"Rasmalai",
        cookTime:'Ready',
        price:30,
        favorite:false,
        origins:['indian'],
        stars:4.0,
        imageUrl:'assets/food-24.jpg',
        tags: ['Vegetarian','Dessert'],
    },
    {
        id:'25',
        name:"Mix Fruit Juice",
        cookTime:'5-10',
        price:60,
        favorite:false,
        origins:['indian'],
        stars:5,
        imageUrl:'assets/food-25.jpg',
        tags: ['Lunch','Vegetarian','Beverage'],
    },
    {
        id:'26',
        name:"Choclate Cake",
        cookTime:'Ready',
        price:249,
        favorite:true,
        origins:['indian'],
        stars:1.5,
        imageUrl:'assets/food-26.jpg',
        tags: ['FastFood','Vegetarian','Dessert'],
    },
]
export const sample_tags:Tag[]= [
    {name:'All',count:26},
    {name:'FastFood',count:10},
    {name:'Pizza',count:3},
    {name:'Lunch',count:14},
    {name:'SlowFood',count:4},
    {name:'burger',count:2},
    {name:'Fry',count:1},
    {name:'Soup',count:1},
    {name:'Dinner',count:9},
    {name:'Vegetarian',count:23},
    {name:'Beverage',count:3},
    {name:'Dessert',count:4}
]