//client/components/SelectSO.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
import $ from 'jquery';
//var querystring = require('querystring');

class SelectSO extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '', class: '', measureKind:'',
            messageFromServer: '',
            modalIsOpen: false,
            data: []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.queryDB = this.queryDB.bind(this);
        //this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.queryDB(this);
        
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    onClick(e) {
        this.getFilter(this);
    }

    getFilter(e) {
        
    }

    queryDB(req) {
        axios.get('/getAll').then(function(response) {
            req.setState({data: response.data});
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            title: '', class: '', measureKind: '',
            messageFromServer: ''
        });
    }

    handleSelectChange(e) {
        switch(e.target.name) {
            case "title":
                this.setState({title: e.target.value});
                break
            case "class":
                this.setState({class: e.target.value});
                break
            case "measureKind":
                this.setState({measureKind: e.target.value});
                break
            default:
                this.setState({title: "Ошибка передачи"})
        }
    }

    render() {
        if(this.state.messageFromServer == '') {
            return (
                <div>
                    <Button bsStyle='success' onClick={this.openModal}><span className='glyphicon glyphicon-plus'> Выбрать СИ</span></Button>
                    <Modal
                     isOpen={this.state.modalIsOpen}
                     onRequestClose={this.closeModal}
                     contentLabel='Выбрать СИ'
                     className='Modal'
                     style={{height:'300px'}}
                     >
                        <Link to={{pathname:'/', search:''}} style={{textDecoration: 'none'}}>
                            <Button bsStyle='danger' bsSize='small' onClick={this.closeModal}><span className='closebtn glyphicon glyphicon-remove'></span></Button>
                        </Link><br />
                        <fieldset>
                            <div style={{position: 'relative'}}>
                                <label htmlFor="title" style={{position:'absolute',top:'20px',left:'15px'}}>Наименование СИ</label><select id="title" name="title" value={this.state.title} onChange={this.handleSelectChange} style={{position:'absolute',top:'20px',left:'165px',width:'300px'}}>
                                    <option></option>
                                    {
                                        this.state.data.map(function(exp) {
                                            return <option>
                                                {exp.title}
                                            </option>
                                        })
                                    }
                                </select>
                                <label htmlFor="class" style={{position:'absolute',top:'50px',left:'15px'}}>Категория СИ</label><select id="class" name="class" value={this.state.class} onChange={this.handleSelectChange} style={{position:'absolute',top:'50px',left:'165px',width:'300px'}}>
                                    <option></option>
                                    <option>Вторичные (исходные) эталоны</option>
                                    <option>ИИС, подлежащие обязательной гос. поверке</option>
                                    <option>Национальные (исходные) эталоны</option>
                                </select>
                                <label htmlFor="measureKind" style={{position:'absolute',top:'80px',left:'15px'}}>Вид измерения:</label><select id="measureKind" name="measureKind" value={this.state.measureKind} onChange={this.handleSelectChange} style={{position:'absolute',top:'80px',left:'165px'}}>
                                    <option></option>
                                    <option>Измерение времени и частоты</option>
                                    <option>Измерение геометрических величин</option>
                                    <option>Измерение фихико-химического состава</option>
                                </select>
                                <label htmlFor="scope" style={{position:'absolute',top:'110px',left:'15px'}}>Сфера применения:</label><select id="scope" name="scope" value={this.state.scope} onChange={this.handleSelectChange} style={{position:'absolute',top:'110px',left:'165px'}}>
                                    <option></option>
                                    <option>Медицина</option>
                                    <option>Легкая промышленность</option>
                                    <option>Пищевая промышленность</option>
                                </select>
                                <Button bsStyle="success" bsSize="small" onClick={this.onClick} style={{position:'absolute',top:'250px',left:'500px'}}>Применить фильтр</Button>
                            </div>
                            <div></div>
                        </fieldset>
                    </Modal>
                </div>
            )
        }
    }
}

export default SelectSO;