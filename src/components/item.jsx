import React from "react";

function Item({ task }) {
  return (
    <li key={task.id} className="row">
      <div className="title">{task.title}</div>
      <div className="check">
        <input type="checkbox" checked={task.is_checked} />
      </div>
    </li>
  );
}

export default Item;
