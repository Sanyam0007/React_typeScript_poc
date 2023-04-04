type ListPerson={
    names:{
        first:string,
        last:string
    }[]
}


export const PersonList = (props:ListPerson) => {
  return (
    <div>
        {props.names.map((name)=>{
            return(
                <h1 key={name.first}>Hello, this is {name.first} {name.last}</h1>
            )
        })}
    </div>
  )
}
