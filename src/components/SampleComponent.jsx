import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SampleComponent = () => {

  const [items, setItems] = useState([]);

  async function getData() {
    const response = await axios('http://localhost:3000/student');
    console.log(response.data);
    setItems(response.data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {
        items.map((item) => {
          return (
            <>
              <h1>{item.course}</h1>
            </>
          )
        })
      }
    </div>
  )
}

export default SampleComponent