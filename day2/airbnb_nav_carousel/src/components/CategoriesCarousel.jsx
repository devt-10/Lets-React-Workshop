import React from "react";
import { useState } from "react";
function CategoriesCarousel() {
  const links = [
    {
      label: "Amazing",
      imgSrc:
        "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      label: "Top",
      imgSrc:
        "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    },
    {
      label: "Farms",
      imgSrc:
        "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    },
    {
      label: "Surfing",
      imgSrc:
        "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    },
    {
      label: "Nature",
      imgSrc:
        "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    },
    {
      label: "Adventure",
      imgSrc:
        "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
    },
    {
      label: "Relaxation",
      imgSrc:
        "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    },
    {
      label: "City",
      imgSrc:
        "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
    {
      label: "Beach",
      imgSrc:
        "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      label: "Mountain",
      imgSrc:
        "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      label: "Desert",
      imgSrc:
        "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    },
    {
      label: "Rural",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Historic",
      imgSrc:
        "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    },
    {
      label: "Luxury",
      imgSrc:
        "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
  ];

  const [hoveredFilter, setHoveredFilter] = useState(false);

  return (
    <div className="flex overflow-x-auto px-1 py-3 justify-start items-center">
      {links.map((item, index) => (
        <div
          key={index}
          className="justify-center items-center flex-col m-2 opacity-60"
          style={{
            opacity: hoveredFilter === item.label ? 1 : 0.6,
          }}
          onMouseEnter={() => setHoveredFilter(item.label)}
          onMouseLeave={() => setHoveredFilter(null)}
        >
          <img
            src={item.imgSrc}
            alt={item.label}
            className="h-6 w-6 object-contain"
          />
          <p className="text-[0.8rem]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoriesCarousel;
