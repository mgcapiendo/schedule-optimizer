//main homepage of the website
'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Home() {

  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {

      const currentDate = new Date();
      
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      const dayOfWeek = days[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();

      const hours = currentDate.getHours();
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

    




  

  return (
    <div className='flex'> {/*this is the main div of the page. if i end up making a custom background i need to add another div encompassing*/}

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

      <div className='ml-15'>
        <div className="grid grid-cols-1 px-20 mt-10">
          <header className='items-center transistion-transform duration-300 hover:scale-105 px-14 py-8 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10'>
              {/*this is where time and date will be displayed*/}
              <div>
                <p>{dateTime}</p>
              </div>
              
              
            </header>
        </div>

        <main>
          {/*this is where the add task bar will be*/}

          <div className='grid grid-cols-1 jusitfy-center items-center px-20 mt-10'>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="I have to..."
              className='bg-white rounded-2xl p-3 italic'
            />
          </div>


          {/*this is where todays task icon will be with progress bar*/}
          {/*this is where this week's task icon will be with progress bar*/}
          {/*this is where misc/non-timed task icon will be with progress bar*/}
          <div className="grid grid-cols-3 gap-6 px-20 w-full p-10">
            <div className='items-center transistion-transform duration-300 hover:scale-105 px-14 py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10'>
                <p>Today</p>
            </div>

            <div className='items-center transistion-transform duration-300 hover:scale-105 px-14 py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10'>
                <p>This Week</p>
            </div>

            <div className='items-center transistion-transform duration-300 hover:scale-105 px-14 py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10'>
                <p>Whenever</p>
            </div>
          </div>

          {/*this is where streak completion will be*/}
          <div className="flex flex-col justify-between items-center">
            <div className='flex flex-wrap justify-center rounded-xl bg-gray-100 px-68 py-13 space-x-2 items-center transistion-transform duration-300 hover:scale-105'>
              <p>Streak Bar</p>
            </div>
          </div>


        </main>


          <footer>
            {/*I don't actually even know what to put here but i like creating it just to see my template*/}
          </footer>

      </div>
    </div>
  );
}
