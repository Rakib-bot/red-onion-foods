const images = require.context('./image', false, /\.png$/);
const icons = require.context('./icon', false, /\.png$/);
const featureData = [
  {
    id: 401,
    title: "Fast Delivery",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    icon: "",
    image: "",
  },
  {
    id: 402,
    title: "A Good Auto Responder",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    icon: "",
    image: "",
  },
  {
    id: 403,
    title: "Home Delivery",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    image: "",

    icon: "",
  },
];

export const fetchData = () => {
  // Create an object where keys are the filenames (without extension)
  const imageObject = images.keys().reduce((obj, imagePath) => {
    // Extract the filename without extension
    const imageName = imagePath.replace('./', '').replace('.png', '');
    // Add the image to the object
    console.log(imageName)
    obj[imageName] = images(imagePath);
    return obj;
  }, {});
  const iconObject = icons.keys().reduce((obj, iconPath) => {
    const iconName = iconPath.replace('./', '').replace('.png', '');
   // console.log(iconName)
    obj[iconName] = icons(iconPath);
    return obj;
  }, {})

  const updatedData = featureData.map((item)=>{
    const formattedTitle = item.title.toLowerCase().replace(/ /g, "");
    return {
      ...item,
      image: imageObject[item.id] || item.image, // Assign image from imageObject or fallback to existing image
      icon: iconObject[item.id] || item.icon,   // Assign icon from iconObject or fallback to existing icon
    };
  })
  
  return updatedData;

}



