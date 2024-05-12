
import Abutton from './components/Abutton'
import BdisabledButton from './components/BdisabledButton'

function App() {


  return (
    <>

      <Abutton title='This is a button' />
      <BdisabledButton title="I am a disabled button" disabled={true}/>
      
       </>
  )
}

export default App
