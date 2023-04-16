const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({})
    res.json(notes);
})

const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Note({title, content});

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if(note){
        res.json(note);
    }else{
        res.status(404).json({ message:"Note not found"});
    }
})

const updateNote = asyncHandler(async (req, res) => {
    const {title,content,category} = req.body;

    const note = await Note.findById(req.params.id);

    if(note){
        note.title=title;
        note.content=content;
        note.category=category;

        const updateNote=await note.save();
        res.json(updateNote);
    }else{
        res.status(404);
        throw new Error("Note not found");
    }
})

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (note) {
      await note.deleteOne({"_id":req.params.id});
      res.json({message:"Note Removed"}); 
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
})

module.exports = { getNotes, createNote ,getNoteById, updateNote, deleteNote};