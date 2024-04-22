import './App.css'
import NavBar from './Nav'
import MusicCard from './Cards'
import Converter from './Converter'
import Displayer from './Displayer'

function App() {
  return (
  <div>
      <div>
          <NavBar />
          <h1 className='title'>Music Player</h1>
     </div>
     <div className='converter'>
          <h2>Your favorite music and converter , all in one place</h2> 
          <Converter /> 
     </div>
     <div className='musicwrapper'>
         <div className='cardwrapper'>
            <MusicCard /> 
         </div>
         <div className='displayer'>
               <Displayer />
         </div>
      </div>
   </div>
  )
}

export default App
