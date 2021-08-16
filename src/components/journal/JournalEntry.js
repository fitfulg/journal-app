import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.freeimages.com/images/large-previews/c1a/blue-sky-and-clouds-1400674.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
      </div>
    </div>
  );
};
