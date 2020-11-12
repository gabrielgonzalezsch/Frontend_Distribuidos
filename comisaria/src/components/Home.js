import react from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'

class Home extends react.Component{

    state={
        run:'',
        nombre:'',
        direccion:'',
        motivo:'',
    }

    handleChange=event=>{
        this.setState({ [event.target.name]: event.target.value})
    }

    submit(){
        var form ={
            run: this.state.run,
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            motivo: this.state.motivo,
        }
        console.log(form)


    }
    
    render(){
        return(
            <div>
                <div className='center' style={{width:'30em',marginTop:'3em',marginLeft:'10em'}}>
                    <div>
                        <div className="form-group">
                            <input type="text" class="form-control" placeholder="Ingrese su Run"  name='run' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="" name='nombre' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="" name='direccion' onChange={this.handleChange}></input>
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control"  placeholder="" name='motivo' onChange={this.handleChange}></input>
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