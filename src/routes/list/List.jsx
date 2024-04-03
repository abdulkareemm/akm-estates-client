import {Card, Filter, Map} from "../../components";
import "./list.scss"
import { listData } from "../../lib/data";
import { useLoaderData } from "react-router-dom";

const List = () => {
  const posts = useLoaderData()
  console.log(posts.postResponse);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.postResponse.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts.postResponse} />
      </div>
    </div>
  );
};

export default List;
