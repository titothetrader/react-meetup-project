import { useRef } from 'react';

import Card from "../ui/Card";
import css from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        // We do not want the browser to behave by default, which is to send a req to server and reload page, instead we want to run own JS logic (dynamic)
        event.preventDefault();     // vanilla JS

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        // console.log(meetupData);

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    {/* htmlFor is reserved by React to match with the input ID "title" below */}
                    <input type='text' required id='title' ref={titleInputRef} />       
                </div>
                <div className={css.control}>
                    <label htmlFor='image'>Meetup Image URL</label>
                    <input type='url' required id='image' ref={imageInputRef} />       
                </div>
                <div className={css.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />       
                </div>
                <div className={css.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required id='description' rows='5' ref={descriptionInputRef} />       
                </div>
                <div className={css.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;