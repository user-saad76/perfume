import { useState,useEffect} from "react"

 export const useFetch = (url)=>{
    const [Data,setData] = useState([]);
     const [error,setError] = useState(null);
     const [loading,setLoading] = useState(false);

      useEffect(() => {
         const getAllproducts = async () => {
           try {
            setLoading(true);
             const res = await fetch(url, {
             credentials: "include",
              method: "GET",     // GET request → body nahi hoti
              });
             const data = await res.json();
             setData(data);
           } catch (error) {
             console.log("Error fetching data:", error);
           }
           finally{
              setLoading(false);
           }
         };
     
         getAllproducts();
       }, [url]);

       return {
             Data,
             error,
             loading
       }

}