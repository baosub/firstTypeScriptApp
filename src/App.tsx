
import Abutton from './components/Abutton'
import BdisabledButton from './components/BdisabledButton'

import CtypingProps from './components/CtypingProps'
import DuserComponent from './components/DuserComponent'

function App() {


  return (
    <>

      <Abutton title='This is a button' />
      <BdisabledButton title="I am a disabled button" disabled={true}/>
      <CtypingProps firstName='Panchita ' lastName='Hdz'/>
      <DuserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>
      
       </>
  )
}

export default App
