import { useState } from 'react'
import Nav_bar from '/Users/claire/Documents/CodePlatoon/Assignments/week5/linkedin/linkedin/src/assets/components/Nav_bar.jsx'
import Profile_summary from '/Users/claire/Documents/CodePlatoon/Assignments/week5/linkedin/linkedin/src/assets/components/Profile_summary.jsx'


import './App.css'

function App() {
console.log('check')
  return (
    <>
    
      <div id="thebody">
        <Nav_bar></Nav_bar>
         <Profile_summary></Profile_summary>
        {/*<Suggest_for_you></Suggest_for_you>
        <Resources></Resources>
        <About></About>
        <Featured></Featured>
        <Activity></Activity>
        <Experience></Experience>
        <Education></Education>
        <Volunteering></Volunteering>
        <Skills></Skills>
        <Courses></Courses>
        <Side_stuff>
          <Profile_specific></Profile_specific>
          <People_viewed></People_viewed>
          <People_known></People_known>
          <Interview_questions></Interview_questions>
        </Side_stuff> */}
      </div>
    </>
  )
}

export default App
