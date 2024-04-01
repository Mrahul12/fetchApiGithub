import { useState, useEffect } from "react";
import Collectdata from'./Component/Collectdata';
import "./App.css";
const API = "https://api.github.com/users";
function App() {
  const [data, setData] = useState([]);

  // useEffect hook use to handle server
  //! inside useEffect hook --> call the fetchData function with API argument
  useEffect(() => {
    fetchData(API);
  }, []);

  // ? API return promise--> so, here we handle the promise by async and await
  // ! url--> as an argument coming from useEffect hook
  //todo fetch is a method and it returns promise
  const fetchData = async (url) => {
    try {
      // console.log(url);
      const response = await fetch(url); // return url and crucial data and server status but response is an object
      // console.log(response);
      const result = await response.json(); // response.json()--> convert JSON response into javascript object
      // console.log(result);
      if (result.length > 0) {
        setData(result);
      }
    } catch (e) {
      console.error('Error coming from api  go and see your api url is correct or not:'+e.message)
    }
  };

  return (
    <>
     <h1 className='text-2xl text-center p-2 font-semibold bg-slate-500  text-white fixed w-[100vw] '>Github User Data Collect Using Api:--</h1>
     {/* data--> is an object */}
     <header className='flex flex-wrap gap-10 justify-center items-center p-5 bg-sky-200 pt-[100px]'>
     <Collectdata value={data}/>
     </header>
     <footer className='text-center bg-emerald-400 p-5'>
      <strong className='text-red-500 font-extrabold text-2xl '>© Copyright , by rahul kumar</strong>
     </footer>
    </>
  );
}

export default App;
