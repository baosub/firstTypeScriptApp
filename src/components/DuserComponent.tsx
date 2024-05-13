import UserInterface from "../UserInterface"

const DuserComponent: React.FC<UserInterface>  = (props) => {
  return (
    <div>
      <h1>User Component</h1>
      Hello, <b>{props.name}</b>
      <br />
      You are <b>{props.age} years old</b>
      <br />
      You live at: <b>{props.address}</b>
      <br />
      You were born: <b>{props.dob.toDateString()}</b>
    </div>
  )
}

export default DuserComponent
