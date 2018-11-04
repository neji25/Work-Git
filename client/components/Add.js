//client/components/Add.js
//Это для ветки AddComponent
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        title: '',
        typeSO: '',
        classSO: '',
        scope: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewSO = this.insertNewSO.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        title: '',
        typeSO: '',
        classSO: 'Jan',
        scope: 2016,
        messageFromServer: ''
      });
    }
componentDidMount() {
      this.setState({
        classSO: this.props.selectedclassSO
      });
      this.setState({
        scope: this.props.selectedScope
      });
    }
handleSelectChange(e) {
      if (e.target.name == 'classSO') {
        this.setState({
          classSO: e.target.value
        });
      }
      if (e.target.name == 'scope') {
        this.setState({
          scope: e.target.value
        });
      }
    }
onClick(e) {
      this.insertNewSO(this);
    }

    //Пост-запрос на сервер
insertNewSO(e) {
      axios.post('/insert',
        querystring.stringify({
          title: e.state.title,
          typeSO: e.state.typeSO,
          classSO: e.state.classSO,
          scope: e.state.scope
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleTextChange(e) {
      if (e.target.name == "title") {
        this.setState({
          title: e.target.value
        });
      }
if (e.target.name == "typeSO") {
        this.setState({
          typeSO: e.target.value
        });
      }
    }
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Добавить СИ"
       className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="small" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label htmlFor="description">Наименование СИ:</label><input type="text" id="description" name="title" value={this.state.title} onChange={this.handleTextChange}></input>
       <label htmlFor="amount">Категория СИ:</label><input type="number" id="amount" name="typeSO" value={this.state.typeSO} onChange={this.handleTextChange}></input>
       <label htmlFor="month">Вид измерения:</label><select id="month" name="classSO" value={this.state.classSO} onChange={this.handleSelectChange}>
            <option value="Jan" id="Jan">January</option>
            <option value="Feb" id="Feb">Febrary</option>
            <option value="Mar" id="Mar">March</option>
            <option value="Apr" id="Apr">April</option>
            <option value="May" id="May">May</option>
            <option value="Jun" id="Jun">June</option>
            <option value="Jul" id="Jul">July</option>
            <option value="Aug" id="Aug">August</option>
            <option value="Sep" id="Sep">September</option>
            <option value="Oct" id="Oct">October</option>
            <option value="Nov" id="Nov">November</option>
            <option value="Dec" id="Dec">December</option>
         </select>
       <label htmlFor="year">Year:</label><select id="year" name="scope" value={this.state.scope} onChange={this.handleSelectChange}>
            <option value="2016" id="16">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
         </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Expense</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Добавить СИ"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="small" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;