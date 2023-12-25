import React from "react";

function YourInfoForm() {
  return (
    <>
      <label htmlFor="Name">Name</label>
      <input
        className="border-spacing-1 border-cool-gray"
        type="text"
        placeholder="e.g. Luke Nam"
        maxLength={50}
      />
    </>
  );
}

export default YourInfoForm;
