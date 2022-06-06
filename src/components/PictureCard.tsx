import { Avatar, Card } from "antd";

export interface PictureCardProps {
  username: string;
  avatar?: string;
  description: string;
  image: string;
}

export function PictureCard(props: PictureCardProps) {
  return (
    <Card
      cover={
        props.image? (
          <img
          alt={props.image}
          src={props.image}
        />
        ): null
      }
    >
      <Card.Meta
        avatar={
          <Avatar src={props.avatar}/>
        }
        title={props.username}
        description={props.description}
      />
    </Card>
  );
}