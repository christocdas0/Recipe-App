import React from "react";

export default function ImprooveskillsSection() {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="section improveSkills">
      <div className="col img">
        <img
          src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt=""
        />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>

        {list.map((list, index) => (
          <p className="skill-item" key={index}>
            {list}
          </p>
        ))}

        <button className="btn">singup now</button>
      </div>
    </div>
  );
}
