import express from 'express';

import { createNote, getNote, getNotes, deleteNote, updateNote } from '../controllers/notes.js';

const router = express.Router();

router.get('/', getNotes);

router.post('/', createNote);

router.get('/:id', getNote);

router.delete('/:id', deleteNote);

router.patch('/:id', updateNote);

export default router;