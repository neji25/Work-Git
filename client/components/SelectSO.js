//client/components/SelectSO.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
//var querystring = require('querystring');

class SelectSO extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '', //class: '', measureKind: '', scope: '', status: '',
            messageFromServer: '',
            modalIsOpen: false,
            data: []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.queryDB = this.queryDB.bind(this);
        //this.handleTextChange = this.handleTextChange.bind(this);
        //this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        this.queryDB(this);
        
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    queryDB(req) {
        axios.get('/getAll').then(function(response) {
            req.setState({data: response.data});
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            title: '',// class: '', measureKind: '', scope: '', status: '',
            messageFromServer: ''
        });
    }

    handleTextChange(e) {
        switch(e.target.name) {
            case "title":
                this.setState({title: e.target.name});
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
                     className='Modal'>
                        <Link to={{pathname:'/', search:''}} style={{textDecoration: 'none'}}>
                            <Button bsStyle='danger' bsSize='small' onClick={this.closeModal}><span className='closebtn glyphicon glyphicon-remove'></span></Button>
                        </Link><br />
                        <fieldset>
                            <label htmlFor="title">Наименование СИ</label><select id="title" name="title" value={this.state.title} onChange={this.handleSelectChange}>
                                {
                                    this.state.data.map(function(exp) {
                                        return <option>
                                            {exp.title}
                                        </option>
                                    })
                                }
                            </select>
                            
                        </fieldset>
                    </Modal>
                </div>
            )
        }
    }
}

export default SelectSO;