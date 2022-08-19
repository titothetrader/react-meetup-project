import { useState, useEffect } from 'react';


import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // We GET data from Firebase DB. FETCH by default runs a GET and returns the response body data
    fetch(
      'https://react-getting-started-a96ef-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      // We need to wait for the response data to complete, so we RETURN the response and add another THEN
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup ={
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
  // An EMPTY array means there are no external dependencies that would trigger the useEffect function upon change (like "isloading")
  // When the array above is EMPTY then useEffect only runs on first run of React, i.e.: useEffect(() => {...}, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;