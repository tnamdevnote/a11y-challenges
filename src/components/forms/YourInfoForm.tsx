import React from "react";

function YourInfoForm() {
  return (
    <>
      <label className="text-xs flex flex-col gap-1 text-marine-blue">
        Name
        <input
          className="ring-1 ring-light-gray rounded-sm h-10 font-ubuntuMedium text-[15px] focus-visible:ring-purplish-blue py-2 px-4"
          type="text"
          placeholder="e.g. Luke Nam"
          maxLength={50}
        />
      </label>
      <label className="text-xs flex flex-col gap-1 text-marine-blue">
        Email Address
        <input
          className="ring-1 ring-light-gray rounded-sm h-10 font-ubuntuMedium text-[15px] focus-visible:ring-purplish-blue py-2 px-4"
          type="email"
          placeholder="e.g. lukenam@lorem.com"
        />
      </label>
      <label className="text-xs flex flex-col gap-1 text-marine-blue">
        Phone Number
        <input
          className="ring-1 ring-light-gray rounded-sm h-10 font-ubuntuMedium text-[15px] focus-visible:ring-purplish-blue py-2 px-4"
          type="tel"
          placeholder="e.g. +1 616-234-5678"
          maxLength={50}
        />
      </label>
    </>
  );
}

export default YourInfoForm;
