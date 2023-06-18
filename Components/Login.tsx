import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Result, setResult] = useState<number>(0);

    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log(Weight*2.2*15)
      }
      
  
    
      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResult(Weight*2.2*15)
        console.log("Submitted")
      }
     
      return (
        <>
        <div>
          <form onSubmit={onSubmit}>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h1 id='red'>{Result} มล.</h1>
            <label htmlFor="name" ></label>
            <input type="text" id="Weight" name="name" placeholder='น้ำหนักของคุณ(กิโลกรัม)' onChange={onChangeUsername}/>
        <button>คำนวณ</button>
          </form>
        </div>
        </>
      )
    }

export default Login