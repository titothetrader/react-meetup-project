import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    const navigate = useNavigate();

    function onAddMeetupHandler(meetupData) {
        // Vanilla JS FETCH to call our Firebase DB URL API
        fetch(
            'https://react-getting-started-a96ef-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-Type': 'application/json'
                }
            }
            // Instead of THEN you could rephrase it to use AWAIT
        ).then(() => {
            // REPLACE will navigate away but will NOT allow use of BACK button
            navigate("/", { replace: true });
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;