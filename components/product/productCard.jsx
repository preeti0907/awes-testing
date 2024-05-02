import React from 'react';
import Image from 'next/image';

function ProductCard(props) {
  const { id, product_name, main_image, selling_price } = props.product;

  

  return (
    <div className="border">
      <div className='overflow-hidden aspect-square object-contain'>
          <img  src={main_image.image} alt={product_name} className="overflow-hidden aspect-square object-contain w-full h-full"  />
      </div>
      <div className="space-y-2">
        <p className="text-md font-medium my_truncate three" >{product_name.length > 60
          ? `${product_name.slice(0, 30)}...${product_name.slice(-30)}`
          : product_name}</p>
        
        <p className="text-gray-600">Price: &#8377;{selling_price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
