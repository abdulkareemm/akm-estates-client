import {Card, Filter, Map} from "../../components";
import "./list.scss"
import { listData } from "../../lib/data";

const List = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer"><Map items={data} /></div>
    </div>
  );
};

export default List;
