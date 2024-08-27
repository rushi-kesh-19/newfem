import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { useNavigate } from "react-router-dom";




function Register(){
  const setUser= useSetRecoilState(userState);
  const [username, setTitle] = useState("");
  const [password, setDes] = useState("");
  const navigate = useNavigate();


    return (
        <>
        <div style={{height:'100vh'}}>
          <div style={{display:"flex", justifyContent:"space-around", paddingTop:100}}>
            
            <div> 
              <Card sx={{ minWidth: 600 , padding:2}}>
                <CardContent>
                  <TextField id="outlined-basic" label="username" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setTitle(e.target.value)}}/>
                  <br/>

                  <TextField id="outlined-basic" label="password" variant="outlined" style={{width:'100%'}} onChange={(e)=>{setDes(e.target.value)}}/>
                </CardContent>

                <CardActions style={{ flexDirection: 'column' }}>
                 
                  <Button style={{width:'60%', padding:10,  margin:10, backgroundColor:'green'}} onClick= { async ()=>{
                    const res= await axios.post('https://feb-pi.vercel.app/admin/signup', {username:username, password:password});
                    if (res.data.token){
                      localStorage.setItem('token', res.data.token);
                      setUser(res.data.username);
                      navigate("/");
                     
                      }
                    }} variant="contained" size="small">Create new account</Button>
                   

                </CardActions>
              </Card>
            </div>
          </div>
        </div>
        </>
    )
}


export default Register