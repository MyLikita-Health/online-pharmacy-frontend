import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function SideBar({ title, menu = [] }) {
  return (
    <div>
      <ListGroup>
        <ListGroupItem color="success" className="text-center">
          {title}
        </ListGroupItem>

        {menu.map((item) => (
          <ListGroupItem action href="#" tag="a">
            {item.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
