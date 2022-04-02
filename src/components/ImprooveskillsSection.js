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
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>

        {list.map((list, index) => (
          <p className="skill-item" key={index}>{list}</p>
        ))}

        <button className="btn">singup now</button>
      </div>
    </div>
  );
}
