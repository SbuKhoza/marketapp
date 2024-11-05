import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../data/data';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/solid';
import Cart from './Cart';



const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Find the product with the given id
    const foundProduct = productData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-80"
                src={product.image_Url[0].url}
                alt={product.name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <a
                href="#"
                className="block mt-1 text-2xl leading-tight font-bold text-gray-900 hover:underline"
              >
                {product.name}
              </a>
              <p className="mt-2 text-gray-500">{product.description}</p>
              <div className="mt-4 flex items-center">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <StarIcon className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <p className="ml-2 text-gray-600">
                  {product.rating} ({product.total_sell} sold)
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">
                  ${product.discount_price || product.price}
                </p>
                {product.discount_price && (
                  <p className="text-sm text-gray-500 line-through">
                    ${product.price}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;