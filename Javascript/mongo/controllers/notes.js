let notes = [];

export const getNotes = (req, res) => {
    res.send(notes);
}

export const createNote = (req, res) => {
    const note = req.body;

    notes.push({...note, id});
}

export const getNote = (req, res) => {
    const { id } = req.params;

    const foundNote = notes.find((note) => note.id === id);

    res.send(foundNote);
}

export const deleteNote = (req, res) => {
    const { id } = req.params;

    notes = notes.filter((note) => note.id != id);
}

export const updateNote = (req, res) => {
    const { id } = req.params;
    
    
}
