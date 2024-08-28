const breakfast = require.context('./Breakfast',false,/\.png$/);
const lunch = require.context('./lunch',false,/\.png$/);
const dinner = require.context('./Dinner',false,/\.png$/);
const foods = [
    {
      id: 101,
      title: "Healthy Meal Plan",
      subtitle: "How we dream about our future",
      price: 9.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""

    },
    {
      id: 102,
      title: "Fried Chicken Bento",
      subtitle: "How we dream about our future",
      price: 12.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
       
    },
    {
      id: 103,
      title: "Trragon-Rubbed-Salmon",
      subtitle: "How we dream about our future",
      price: 23.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
    img:""
    },
    {
      id: 104,
      title: "Indian Lunch",
      subtitle: "How we dream about our future",
      price: 15.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 105,
      title: "Beaf Steak",
      subtitle: "How we dream about our future",
      price: 7.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 106,
      title: "Honey Soy Salmon",
      subtitle: "How we dream about our future",
      price: 19.99,
      category: "lunch",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 201,
      title: "Salmon with Grapefruits",
      subtitle: "How we dream about our future",
      price: 9.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
  img:""
    },
    {
      id: 202,
      title: "Lemony Salmon",
      subtitle: "How we dream about our future",
      price: 12.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 203,
      title: "Pork Tenderiain",
      subtitle: "How we dream about our future",
      price: 23.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 204,
      title: "Baked Chicken",
      subtitle: "How we dream about our future",
      price: 15.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 205,
      title: "Curlic Butter baked salmon",
      subtitle: "How we dream about our future",
      price: 7.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
    },
    {
      id: 206,
      title: "French fries with cheese",
      subtitle: "How we dream about our future",
      price: 27.99,
      category: "dinner",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
    },
    {
      id: 301,
      title: "Bagel and cream cheese",
      subtitle: "How we dream about our future",
      price: 9.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
    },
    {
      id: 302,
      title: "Breakfast sandwich",
      subtitle: "How we dream about our future",
      price: 12.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
    },
    {
      id: 303,
      title: "Baked chicken",
      subtitle: "How we dream about our future",
      price: 23.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 304,
      title: "Eggs benedict",
      subtitle: "How we dream about our future",
      price: 15.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 305,
      title: "Toast fried Egg Butter",
      subtitle: "How we dream about our future",
      price: 8.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
     img:""
    },
    {
      id: 306,
      title: "Full breakfast egg toast",
      subtitle: "How we dream about our future",
      price: 18.99,
      category: "breakfast",
      description: "It is delicious food.We hope you can enjoy this food",
      img:""
      
    },
  ];

 export const  fetchFoodData= () =>{

    const breakfastObject = imageObject(breakfast);
    const lunchObject = imageObject(lunch);
    const dinnerObject = imageObject(dinner);
    let i=1,j=1,k=1;
    const updatedData = foods.map((item)=>{
        if(item.category === 'breakfast')
        {
            item.img = breakfastObject[`breakfast${i++}`];
        }
        else if(item.category === 'lunch')
        {
            item.img = lunchObject[`lunch${j++}`];
        }
        else if(item.category === 'dinner')
        {
            item.img = dinnerObject[`dinner${k++}`];
        }
       return item;
    })
   // console.log(updatedData)
    return updatedData;


 } 
  
const imageObject=(images)=>{
    const imageObject = images.keys().reduce((obj, imagePath) => {
        // Extract the filename without extension
        const imageName = imagePath.replace('./', '').replace('.png', '');
        // Add the image to the object
        console.log(imageName)
        obj[imageName] = images(imagePath);
        return obj;
      }, {});

     return imageObject; 
} 
  export default foods;
  