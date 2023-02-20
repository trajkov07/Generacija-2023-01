import React from "react";
export class CommentsClass extends React.Component {
  render() {
    let comments = this.props.data;
    console.log(comments);

    return (
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <h2>id: {comment.id}</h2>
              <h2>author: {comment.author}</h2>
              <h2>body: {comment.body}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
