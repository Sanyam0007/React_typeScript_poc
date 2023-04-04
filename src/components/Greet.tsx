type Myprops = {
  name: string,
  age:number,
  isOn:boolean
}


export const Greet = (props:Myprops) => {
  
  return (
    <div>
        <h2>
            hello this is {props.name} and my age is {props.age}
        </h2>
    </div>
  )
}
