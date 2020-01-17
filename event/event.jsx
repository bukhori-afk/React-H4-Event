import React, {Component} from 'react';
    class Form extends Component {
        constructor(props) {
            super(props);
            this.state = {
                nama   : 'nama',
                alamat : 'alamat',
                hobi   : 'hobi',
                umur: null
            }
        }
    
        onSubmitHandler = (event) => {
            event.preventDefault();
            let umur = this.state.umur;
            if (!Number(umur)) {
                alert("silahkan isi usia anda terlebih dahulu");
            }
        }
    
        onChangeHandler = (event) => {
            let nama   = event.target.name;
            let alamat = event.target.alamat;
            let hobi   = event.target.hobi;
            let val = event.target.value;
            this.setState(
            {
                [nama]  : val,
                [alamat]:val,
                [hobi]: ''
            }
            );
        }
    
    render(){
        return(
            <div className="wraperform">
                <form onSubmit={this.onSubmitHandler}>
                    <h1> Halo {this.state.nama}</h1>
                    <input type="text" onChange={this.onChangetHandler} name="nama" className="text"/>
                    <h1> Sebutkan Hobby Kamu {this.state.hobi}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="hobi" className="text"/>
                    <h1> Berapa Umur Kamu {this.state.umur}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="umur" className="text"/>           
                    <h1> Alamat Tinggal{this.state.hobi}</h1>
                    <textarea onChange={this.onChangeHandler} name="alamat" className="textarea"></textarea>
                    <hr/>
                    <input type ="submit" onClick = {this.updateState} value="simpan data" className="button"/>
                </form>
            </div>
        );
    }
}

export default Form;