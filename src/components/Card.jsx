import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ title, link, imageUrl }) => {
    return (
      <div className="bg-white h-full rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-30 h-30 object-cover mb-4 rounded-full" />
        )}
        {link ? (
          <Link to={link} className="text-lg font-semibold text-blue-600 hover:underline">
            {title}
          </Link>
        ) : (
          <span className="text-lg font-semibold text-gray-800">{title}</span>
        )}
      </div>
    );
  };

export default Card;