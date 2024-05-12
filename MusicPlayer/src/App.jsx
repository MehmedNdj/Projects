import './App.css'
import NavBar from './Nav'
import MusicCard from './Cards'
import Converter from './Converter'
import Displayer from './Displayer'
import PlayList from './Plalists'

function App() {
  return (
  <div>
      <div>
          <NavBar/>
          <h1 className='title'>Music Player</h1>
     </div>
     <div className='converter'>
          <h2>Your favorite music and converter , <br></br> all in one place</h2> 
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
      <div className='playlist'>
            <h3></h3>
            <PlayList />
      </div>
   </div>
   //Comittment issues
  )
}

export default App
