const RestuarentCard = (props) => {
  const {
    restName,
    rate,
    image,
    time,
    cuisines
  } = props;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer">
      
      {/* Food Image */}
      <div className="relative">
        <img
          className="w-full h-52 object-cover"
          src={image}
          alt="food"
        />

        {/* Delivery Time Badge */}
        <span className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow">
          {time}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Restaurant Name */}
        <h3 className="text-xl font-bold text-gray-800 truncate">
          {restName}
        </h3>

        {/* Cuisine */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {cuisines}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">

          {/* Rating */}
          <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            ⭐ {rate}
          </span>

          {/* Delivery */}
          <span className="text-gray-600 font-medium text-sm">
            🚚 Fast Delivery
          </span>

        </div>
      </div>
    </div>
  );
};


export const OpenRestaurent = (RestaurentCard)=>{
  return (props)=>{
   return(<div className="relative">
      
        {/* Open Badge */}
        <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-lg">
          OPEN
        </span>
    <RestuarentCard {...props}/>
    </div>)
    

  }
}

export default RestuarentCard;