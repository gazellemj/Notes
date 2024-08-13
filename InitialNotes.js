import Header from "./Header";
import NotesList from "./NoteList";
import EmptyNoteList from "./EmptyList";
import { useState } from "react";
import React from "react";

const initialNotes = [
  {
    heading:
      "Welcome to our website",
    founder: "Gazelle",
    duration: "5 mins ago",
    id: "1",
    isPinned: false,
    dateTime: Date.now() - 120,
  },
  {
    heading: "Live more, Worry Less :) ",
    founder: "Sam",
    duration: "Today",
    id: "2",
    isPinned: false,
    dateTime: Date.now() - 86400,
  },
  {
    heading: "The future is bright",
    founder: "Collaborator",
    duration: "a week ago",
    id: "3",
    isPinned: false,
    dateTime: Date.now() - 604800,
  },
];
function Notes() {
  const [notes, setNotes] = useState(initialNotes);

  function handlePin(id) {
    const objIndex = notes.findIndex((note) => note.id === id);
    const isPinned = notes[objIndex].isPinned;
    console.log(isPinned);
    notes[objIndex].isPinned = !isPinned;
    setNotes([...notes]);
  }

  notes.sort(function (a, b) {
    return b.isPinned - a.isPinned || b.dateTime - a.dateTime;
  });

  function handleDelete(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      {!notes.length ? (
        <EmptyNoteList />
      ) : (
        <NotesList
          notes={notes}
          onHandleDelete={handleDelete}
          onHandlePin={handlePin}
        />
      )}
    </div>
  );
}

export default Notes;