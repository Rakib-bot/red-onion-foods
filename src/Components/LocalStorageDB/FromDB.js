export const getData = ()=>{
    let rawData = localStorage.getItem('cart');
    if(rawData)
    {
        return JSON.parse(rawData);
    }
    else{
        return [];
    }
}
export const addData = (cart)=>{

    let data = getData();
    let tempData = data.find((item)=> item.id === parseInt(cart.id));
    if(tempData)
    {
        tempData.quantity+=1;
    }
    else
    {
        tempData = { ...cart, quantity: 1 };

    }
    let othersData = data.filter((item)=>item.id !== parseInt(cart.id));
    let newData =[...othersData,tempData];
    localStorage.setItem('cart',JSON.stringify(newData));
}
export const removeData =(id)=>{

    let data = getData();
    let newData = data.filter((item)=>item.id !== parseInt(id));
    localStorage.setItem('cart',JSON.stringify(newData));
}
export const updateData = (cart)=>{
    let data = getData();
    let tempData = data.find((item)=> item.id === parseInt(cart.id));
    if(tempData)
    {
        tempData.quantity = cart.quantity;

    }
    else
    {
        tempData = { ...cart, quantity:cart.quantity}
    }
    
    let othersData = data.filter((item)=>item.id !== parseInt(cart.id));
    let newData =[...othersData,tempData];
    localStorage.setItem('cart',JSON.stringify(newData));
}
export const clearData = ()=>{
    localStorage.removeItem('cart');
}

