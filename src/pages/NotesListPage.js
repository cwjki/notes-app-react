import React from 'react';
import ListItem from '../components/ListItem';
import notes from '../assets/data';

const NotesListPage = () => {
    return(
        <div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
        </div>
    ); 
};

export default NotesListPage;
