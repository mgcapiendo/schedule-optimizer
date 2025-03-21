'use client'; //tells the app that this is a client component not a server component so it can use hooks 

import React, { useState, useEffect } from 'react'; //hooks: use state lets us create an empty variable and update it later, use effect lets us run something when the page loads
import Link from 'next/link'; //this is how we link to other pages in our app

const Monday = () => {

  //for date and time
  const [dateTime, setDateTime] = useState('');

  //update date and time
  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      const dayOfWeek = days[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();

      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getSeconds().toString().padStart(2, '0');

      const formattedTime = `${hours}:${minutes}:${seconds}`;
      const formattedDate = `${dayOfWeek} ${month} ${day}, ${year}`;

      setDateTime(`${formattedDate} ${formattedTime}`);
    };
    
    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  //for task entry
  const [text, setText] = useState(''); //store what the user types in
  const [isModalOpen, setIsModalOpen] = useState(false); //popout extra details, init closed
  const [currentTask, setCurrentTask] = useState({ //store the task details
    title: '',
    time: '',
    priority: '',
    category: ''
  });
  
  //this function will run when a new task is added
    //we need to stop it from doing its original function in a <form> where it refreshes the page
    //then we need to check if the text is empty, if it is we return and do nothing
    //if it is not empty we should check that it isnt just spaces
    //then if it isnt empty, and it isnt spaces, then we can add the task to the list
    //then we will open the modal so the user can add more details
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      setCurrentTask({
        ...currentTask, //... this copies what is already in the details and carries it over
        title: text
      });
      setIsModalOpen(true); //then this opens the modal by updating its visibility so the user can now see what to add to the task details
    }
  }
  
  

  return (
    <div className='flex'> {/*this is the main div of the page*/}
      <aside className='flex flex-col justify-between items-center p-10 ml-10'>
        {/*this is where the pop out side nav bar will be*/}
        <nav className='flex flex-col items-center justify-center rounded-xl bg-gray-100 px-6 py-6 space-y-8'>
          <Link href="/">
            Home
          </Link>

          <Link href="/calendar">
            Calendar
          </Link>

          <Link href="/monday">
            Monday
          </Link>

          <Link href="/tuesday">
            Tuesday
          </Link>

          <Link href="/wednesday">
            Wednesday
          </Link>

          <Link href="/thursday">
            Thursday
          </Link>

          <Link href="/friday">
            Friday
          </Link>

          <Link href="/saturday">
            Saturday
          </Link>

          <Link href="/sunday">
            Sunday
          </Link>
        </nav>
      </aside>
      
      {/*date and time */}
      <div className='ml-15 flex-1'>
        <div className="grid grid-cols-1 px-20 mt-10">
          <header className='items-center transition-transform duration-300 hover:scale-105 px-14 py-8 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10'>
            <div>
              <p>{dateTime}</p>
            </div>
          </header>
        </div>

        {/*task input and display */}
        <main className='flex-1'>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-center items-center px-20 mt-10'> {/*form is where we will fill out the info, onSubmit is an event listener that runs the handleSubmit function upon submission */}
              <div className='flex'> {/*flexs makes items sit in row form*/}
                {/*
                  we create an input field for the user to type in their task,
                  then we use the value attribute to bind it to the text state,
                  then onChange (the event listener), e (the event and contains what happened), 
                  then we call the setText function to update the text variable where e.target.value is what was typed into the field, 
                  we update the text state with what is being typed in
                */}
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder='I have to...'
                  className='bg-white rounded-l-2xl p-3 flex-1 italic'
                />
                <button type="submit" className='bg-green-600 text-white px-4 rounded-r-2xl hover:bg-green-600 flex items-center justify-center'>+</button> {/*This is the event that submits the form when clicked and activates the onSubmit event*/}
              </div>
            </form>
        </main>

        <footer>

        </footer>
      </div>







      
    </div>
  );
};

export default Monday;