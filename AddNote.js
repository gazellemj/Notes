import React from "react";

function AddNote() {
  return (
    <div className="add-note">
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/addnote.svg"
        alt="Add Note"
        className="cursor-pointer"
      />
    </div>
  );
}

export default AddNote;
