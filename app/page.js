//main homepage of the website
'use client';

import React from 'react'
import Link from 'next/link'


export default function Home() {
  return (
    <div> {/*this is the main div of the page. if i end up making a custom background i need to add another div encompassing*/}

      <header>
        {/*this is where time and date will be displayed*/}
        <h1>Wednesday March 12th, 2025          21:09</h1>
      </header>


      <aside>
        {/*this is where the pop out side nav bar will be*/}
        <nav>
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


      <main>
        {/*this is where the add task bar will be*/}
        {/*this is where todays task icon will be with progress bar*/}
        {/*this is where this week's task icon will be with progress bar*/}
        {/*this is where misc/non-timed task icon will be with progress bar*/}
        {/*this is where streak completion will be*/}

        
      </main>


      <footer>
        {/*I don't actually even know what to put here but i like creating it just to see my template*/}
      </footer>
    </div>
    
  );
}
