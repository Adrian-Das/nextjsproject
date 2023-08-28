"use client"

import { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1',{cache:'no-store'})
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Home;