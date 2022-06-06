import { Masonry } from "masonic";
import { PictureCard } from "./PictureCard";

export function MemoriesKill(props: any) {
  return (
    <div className="site-card-wrapper">
      {props.data? (
        <Masonry
            items={props.data}
            columnGutter={16}
            columnWidth={200}
            overscanBy={5}
            render={(item: any) => (
              <PictureCard username={item.data.USER} description={item.data.DESCRIPTION} image={item.data.ATTACHMENT1} />
            )}
          />) : (
            <span>no data</span>
          )
      }
    </div>
  );
}