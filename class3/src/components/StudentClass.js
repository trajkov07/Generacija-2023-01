import React from "react";
// When we have class components we need to import React

export class StudentClass extends React.Component {
  render() {
    console.log(this.props);
    let student = this.props.student;
    return (
      <div>
        <h2>
          Class Student: {student.name} {student.lastName}
        </h2>
        <h2>Index: {student.index}</h2>
      </div>
    );
  }
}
