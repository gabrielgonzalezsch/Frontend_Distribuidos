import react from 'react'
import axios from 'axios'
import rut from 'chilean-rut'
import validator from 'email-validator'

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'

class Home extends react.Component{

    state={
        run:'',
        nombre:'',
        direccion:'',
        motivo:'',
        email:''
    }

    handleChange=event=>{
        this.setState({ [event.target.name]: event.target.value})
    }


    submit(){
        if(!rut.validate(this.state.run)){
            console.log('rut invalid')
        }else if(!validator.validate(this.state.email)){
            console.log('email invalid')
        }else{
            const minutos_activacion = 15
            var date = new Date();
            var new_date = new Date(date.getTime()+minutos_activacion*60000)
            var form ={
                run: this.state.run,
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                motivo: this.state.motivo,
                email: this.state.email,
                fecha: new_date
            }
            axios.post('/createPermiso',form).then(res => {
                console.log(res)
            })
            .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            });
        }
    }
    
    
    render(){
        return(
            <div>
                <div className='center' style={{width:'30em',marginTop:'3em',marginLeft:'10em'}}>
                    <div>
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Run"  name='run' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="Nombre" name='nombre' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="Direccion" name='direccion' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="Motivo" name='motivo' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                                                   
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="Email" name='email' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>                
                        <button className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }

}


export default Home;