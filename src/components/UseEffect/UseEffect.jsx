{/*import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E0E] p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4169E1] mb-8 border-b border-[#4169E1] pb-4">
          Latest Posts
        </h2>
        
        <div className="space-y-6">
          {data.slice(0, 5).map((item) => (
            <div 
              key={item.id} 
              className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#4169E1] shadow-lg transition-all hover:bg-[#222222]"
            >
              <h1 className="text-xl font-semibold text-white capitalize mb-2">
                {item.title}
              </h1>
              <p className="text-gray-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;*/}