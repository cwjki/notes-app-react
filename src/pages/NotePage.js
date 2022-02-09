import React from 'react'; 
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import notes from '../assets/data';


const NotePage = () => {
    let params = useParams();

    let noteId = params.id;
    let note = notes.find(note => note.id === Number(noteId));

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <Link to='/'> 
                    </Link>
                </h3>
            </div>
            <p>{note?.body}</p>
        </div>
    );
};

export default NotePage;
