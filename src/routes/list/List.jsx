import {Card, Filter, Map} from "../../components";
import "./list.scss"
import { listData } from "../../lib/data";
import { useLoaderData,Await } from "react-router-dom";
import { Suspense } from "react";

const List = () => {
 const data = useLoaderData();
console.log(data)
 return (
   <div className="listPage">
     <div className="listContainer">
       <div className="wrapper">
         <Filter />
         <Suspense fallback={<p>Loading...</p>}>
           <Await
             resolve={data.postResponse}
             errorElement={<p>Error loading posts!</p>}
           >
             {(postResponse) =>
               postResponse.data.map((post) => (
                 <Card key={post.id} item={post} />
               ))
             }
           </Await>
         </Suspense>
       </div>
     </div>
     <div className="mapContainer">
       <Suspense fallback={<p>Loading...</p>}>
         <Await
           resolve={data.postResponse}
           errorElement={<p>Error loading posts!</p>}
         >
           {(postResponse) => <Map items={postResponse.data} />}
         </Await>
       </Suspense>
     </div>
   </div>
 );
};

export default List;
