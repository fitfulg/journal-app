import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes_main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text" 
                    placeholder="Som awesome title"
                    className="notes__title-input"
                />

                <textarea 
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img src="https://www.theolivepress.es/wp-content/uploads/2019/02/High-frontier.jpg" alt="landscape" />
                </div>
            </div>
        </div>
    )
}
