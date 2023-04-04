type StatusProps={
    status:'loading' | 'success' | 'error'
}


export const Status = (props:StatusProps) => {
    let message;
    if(props.status==='loading'){
        message = 'loading'
    }
    else if(props.status==='success'){
        message='success'
    }
    else{
        message = 'An error occured'
    }

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}