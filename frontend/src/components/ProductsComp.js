import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { brandingData, categoriesData, productData } from '../data/data';

const ProductsComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam) {
      const filtered = productData.filter(product => 
        product.category && product.category.toLowerCase() === categoryParam.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData);
    }
  }, [categoryParam]);

  const handleCategoryClick = (categoryTitle) => {
    navigate({
      pathname: '/products',
      search: `?category=${categoryTitle}`,
    }, { replace: true });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Branding Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:block">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandingData.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.Description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categoriesData.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/products?category=${category.title}`)}
                className={`group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  categoryParam === category.title ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                <img
                  src={category.image_Url}
                  alt={category.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {categoryParam ? `${categoryParam} Products` : 'All Products'}
            </h2>
            <span className="text-gray-600">
              {filteredProducts.length} products
            </span>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  onClick={() => handleProductClick(product.id)}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden relative">
                    <img
                      src={product.image_Url[0].url}
                      alt={product.name}
                      className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    {product.discount_price && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                        {Math.round(((product.price - product.discount_price) / product.price) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          ${product.discount_price || product.price}
                        </span>
                        {product.discount_price && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                          <span className="text-sm text-yellow-500">★</span>
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating}
                          </span>
                          {product.total_sell && (
                            <span className="ml-1 text-xs text-gray-500">
                              ({product.total_sell} sold)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {product.shop?.name}
                      </div>
                      {product.stock <= 5 && (
                        <div className="text-xs text-red-500 font-medium">
                          Only {product.stock} left!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsComp;