//client/components/Add.js
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
  //  Device  
        title: '', type: '', class: '', measureKind: '', scope: '', location: '',
        status: '', comment: '',
  //  Passport  
        serial_number: '', passport_number: '', inventory_number: '', stock_number: '',
        maker: '', barcode: '', initial_cost: '', construction_date: '', 
        start_date: '', change_data: '',
  //  Repair
        reason_for_repair: '', repair_date: '', repair_address: '',
        repair_cost: '', short_description: '',
  //  Verification
        last_verif_date: '', verif_period: '', next_verif_date: '', left_until: '',
        verif_cost: '', verif_location: '', verif_unit_code: '', verif_type: '',
        verif_metodology: '', verif_officer_name: '', conclusion: '', report_number: '',
        mark_type: '', mark_number: '',
  //  Modal    
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
  //  Device  
        title: '', type: '', class: '', measureKind: '', scope: '', location: '',
        status: '', comment: '',
  //  Passport  
        serial_number: '', passport_number: '', inventory_number: '', stock_number: '',
        maker: '', barcode: '', initial_cost: '', construction_date: '', 
        start_date: '', change_data: '',
  //  Repair
        reason_for_repair: '', repair_date: '', repair_address: '',
        repair_cost: '', short_description: '',
  //  Verification
        last_verif_date: '', verif_period: '', next_verif_date: '', left_until: '',
        verif_cost: '', verif_location: '', verif_unit_code: '', verif_type: '',
        verif_metodology: '', verif_officer_name: '', conclusion: '', report_number: '',
        mark_type: '', mark_number: '',
  //  Server    
        messageFromServer: ''
      });
    }
componentDidMount() {
      this.setState({
        location: this.props.locationDevice
      });
    }
handleSelectChange(e) {
      switch(e.target.name) {
    //Device 
        case "class":
          this.setState({class: e.target.value})
          break
        case "measureKind":
          this.setState({measureKind: e.target.value})
          break
        case "scope":
          this.setState({scope: e.target.value})
          break
        case "location":
          this.setState({location: e.target.value})
          break
        case "status":
          this.setState({status: e.target.value})
          break
    //Passport
        case "maker":
          this.setState({maker: e.target.value})
          break
    //Verification
        case "verif_location":
          this.setState({verif_location: e.target.value})
          break
        case "verif_type":
          this.setState({verif_type: e.target.value})
          break
        case "verif_metodology":
          this.setState({verif_metodology: e.target.value})
          break
        case "verif_officer_name":
          this.setState({verif_officer_name: e.target.value})
          break
        case "conclusion":
          this.setState({conclusion: e.target.value})
          break
        case "mark_type":
          this.setState({mark_type: e.target.value})
          break
    //Repair 
        case "reason_for_repair":
          this.setState({reason_for_repair: e.target.value})
          break
        case "repair_address":
          this.setState({repair_address: e.target.value})
          break

        default:
          this.setState({title: "Ошибка в функции handleSelectChange"})
      }
      
    }
onClick(e) {
      this.insertNewSO(this);
    }

    //Пост-запрос на сервер
insertNewSO(e) {
  axios.post('/insert',
    querystring.stringify({
  //Device
      title: e.state.title,
      type: e.state.type,
      class: e.state.class,
      measureKind: e.state.measureKind,
      scope: e.state.scope,
      status: e.state.status,
      comment: e.state.comment,
  //Passport
      serial_number: e.state.serial_number,
      passport_number: e.state.passport_number,
      inventory_number: e.inventory_number,
      stock_number: e.state.stock_number,
      maker: e.state.maker,
      barcode: e.state.barcode,
      initial_cost: e.state.initial_cost,
      construction_date: e.state.construction_date,
      start_date: e.state.start_date,
      change_data: e.state.change_data,
  //Verification
      last_verif_date: e.state.last_verif_date,
      verif_period: e.state.verif_period,
      next_verif_date: e.state.next_verif_date,
      left_until: e.state.left_until,
      verif_cost: e.state.verif_cost,
      verif_location: e.state.verif_location,
      verif_unit_code: e.state.verif_unit_code,
      verif_type: e.state.verif_type,
      verif_metodology: e.state.verif_metodology,
      verif_officer_name: e.state.verif_officer_name,
      conclusion: e.state.conclusion,
      report_number: e.state.report_number,
      mark_type: e.state.mark_type,
      mark_number: e.state.mark_number,
  //Repair
      reason_for_repair: e.state.reason_for_repair,
      repair_date: e.state.repair_date,
      repair_address: e.state.repair_address,
      repair_cost: e.state.repair_cost,
      short_description: e.state.short_description
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
      switch (e.target.name) {
        case "title":
          this.setState({title: e.target.value})
          break
        case "type":
          this.setState({type: e.target.value})
          break
        case "comment":
          this.setState({comment: e.target.value})
          break
        case "serial_number":
          this.setState({serial_number: e.target.value})
          break
        case "passport_number":
          this.setState({passport_number: e.target.value})
          break
        case "inventory_number":
          this.setState({inventory_number: e.target.value})
          break
        case "stock_number":
          this.setState({stock_number: e.target.value})
          break
        case "barcode":
          this.setState({barcode: e.target.value})
          break
        case "initial_cost":
          this.setState({initial_cost: e.target.value})
          break
        case "construction_date":
          this.setState({construction_date: e.target.value})
          break
        case "start_date":
          this.setState({start_date: e.target.value})
          break
        case "change_data":
          this.setState({change_data: e.target.value})
          break
        case "last_verif_date":
          this.setState({last_verif_date: e.target.value})
          break
        case "verif_period":
          this.setState({verif_period: e.target.value})
          break
        case "next_verif_date":
          this.setState({next_verif_date: e.target.value})
          break
        case "left_until":
          this.setState({left_until: e.target.value})
          break
        case "verif_cost":
          this.setState({verif_cost: e.target.value})
          break
        case "verif_unit_code":
          this.setState({verif_unit_code: e.target.value})
          break
        case "report_number":
          this.setState({report_number: e.target.value})
          break
        case "mark_number":
          this.setState({mark_number: e.target.value})
          break
        case "repair_date":
          this.setState({repair_date: e.target.value})
          break
        case "repair_cost":
          this.setState({repair_cost: e.target.value})
          break
        case "short_description":
          this.setState({short_description: e.target.value})
          break
        
        default:
          this.setState({title: "Ошибка в функции handleTextChange"})
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
<<<<<<< HEAD
<fieldset className="Device">
=======
<div id="Device" style={{float: 'left'}}>
>>>>>>> 4926308ad414f5166d5bdd84f91160c6120c86fc
  <p className="pAdd">Основные данные</p>
  {/* Device */}
       <label htmlFor="title">Наименование СИ:</label><input type="text" id="title" name="title" style={{position: "absolute", left: "225px"}} value={this.state.title} onChange={this.handleTextChange}></input>
       <label htmlFor="type" style={{position:"absolute", top:"100px", left:"19px"}}>Тип СИ:</label><input type="text" id="type" name="type" style={{position:"absolute", top:"100px", left:"225px"}} value={this.state.type} onChange={this.handleTextChange}></input>
       <label htmlFor="class" style={{position:"absolute", left:"20px", top:"127px"}}>Категория СИ:</label><select id="class" name="class" style={{position: "absolute", top:"127px", left:"225px"}} value={this.state.class} onChange={this.handleSelectChange}>
            <option>Вторичные (исходные) эталоны</option>
            <option>ИИС, подлежащие обязательной гос. поверке</option>
            <option>Национальные (исходные) эталоны</option>
         </select>
       <label htmlFor="measureKind" style={{position: "absolute", top:"154px", left:"19px"}}>Вид измерения:</label><select id="measureKind" name="measureKind" style={{position:"absolute", top:"154px", left:"225px"}} value={this.state.measureKind} onChange={this.handleSelectChange}>
            <option>Измерение времени и частоты</option>
            <option>Измерения геометрических величин</option>
            <option>Измерение фихико-химического состава</option>
         </select>
       <label htmlFor="scope" style={{position:"absolute", top:"181px", left:"19px"}}>Сфера применения:</label><select id="scope" name="scope" style={{position:"absolute", top:"181px", left:"225px"}} value={this.state.scope} onChange={this.handleSelectChange}>
            <option>Медицина</option>
            <option>Легкая промышленность</option>
            <option>Пищевая промышленность</option>
        </select>
        <label htmlFor="location" style={{position:"absolute", top:"208px", left:"19px"}}>Место нахождения:</label><select id="location" name="location" style={{position:"absolute", top:"208px", left:"225px"}} value={this.state.location} onChange={this.handleSelectChange}>
            <option>Волковысское ЦСМС</option>
            <option>Гродненское ЦСМС</option>
            <option>Брестское ЦСМС</option>
        </select>
        <label htmlFor="status" style={{position:"absolute", top:"235px", left:"19px"}}>Состояние СИ:</label><select id="status" name="status" style={{position:"absolute", top:"235px", left:"225px"}} value={this.state.status} onChange={this.handleSelectChange}>
            <option>В поверке</option>
            <option>В ремонте</option>
            <option>На списании</option>
        </select>
<<<<<<< HEAD
        <label htmlFor="comment" style={{position:"absolute", top:"262px", left:"19px"}}>Примечание:</label><input type="text" id="comment" name="comment" style={{position:"absolute", top:"262px", left:"225px"}} value={this.state.comment} onChange={this.handleTextChange}></input>
</fieldset>
<fieldset className="Passport">
=======
        <label htmlFor="comment">Примечание:</label><input type="text" id="comment" name="comment" value={this.state.comment} onChange={this.handleTextChange}></input>
</div>
<div id="Passport" style={{float:'left'}}>
>>>>>>> 4926308ad414f5166d5bdd84f91160c6120c86fc
  {/* Passport */}
        <label htmlFor="serial_number" style={{position:"absolute", left:"19px", top:"354px"}}>Заводской №:</label><input type="text" id="serial_number" name="serial_number" style={{position:"absolute", left:"225px", top:"354px"}} value={this.state.serial_number} onChange={this.handleTextChange}></input>
        <label htmlFor="passport_number" style={{position:"absolute", top:"354px", left:"463px"}}>Паспорт №:</label><input type="text" id="passport_number" name="passport_number" style={{position:"absolute", top:"354px", left:"630spx"}} value={this.state.passport_number} onChange={this.handleTextChange}></input>
        <label htmlFor="inventory_number" style={{position:"absolute", top:"382px", left:"19px"}}>Инвентарный №:</label><input type="text" id="inventory_number" name="inventory_number" style={{position:"absolute", top:"382px", left:"225px"}} value={this.state.inventory_number} onChange={this.handleTextChange}></input>
        <label htmlFor="stock_number" style={{position:"absolute", top:"382px", left:"463px"}}>Номенклатурный номер</label><input type="text" id="stock_number" name="stock_number" style={{position:"absolute", top:"382px", left:"630px"}} value={this.state.stock_number} onChange={this.handleTextChange}></input>
        <label htmlFor="maker"> style={{position:"absolute", top:"410px", left:"19px"}}Изготовитель:</label><select id="maker" name="maker" style={{position:"absolute", top:"410px", left:"225px"}} value={this.state.maker} onChange={this.handleSelectChange}>
            <option>Минская компания</option>
            <option>Гродненская компания</option>
            <option>Брестская компания</option>
        </select>
<<<<<<< HEAD
        <label htmlFor="barcode" style={{position:"absolute", top:"438px", left:"19px"}}>Штрих-код:</label><input type="text" id="barcode" name="barcode" style={{position:"absolute", top:"438px", left:"225px"}} value={this.state.barcode} onChange={this.handleTextChange}></input>
        <label htmlFor="initial_cost" style={{position:"absolute", top:"466px", left:"19px"}}>Начальная стоимость:</label><input type="text" id="initial_cost" name="initial_cost" style={{position:"absolute", top:"466px", left:"225px"}} value={this.state.initial_cost} onChange={this.handleTextChange}></input>
        <label htmlFor="construction_date" style={{position:"absolute", top:"466px", left:"462px"}}>Дата ввода в эксплуатацию:</label><input type="text" id="construction_date" name="construction_date" style={{position:"absolute", top:"466px", left:"672px"}} value={this.state.construction_date} onChange={this.handleTextChange}></input>
        <label htmlFor="start_date" style={{position:"absolute", top:"494px", left:"19px"}}>Дата изготовления:</label><input type="text" id="start_date" name="start_date" style={{position:"absolute", top:"494px", left:"225px"}} value={this.state.start_date} onChange={this.handleTextChange}></input>
        <label htmlFor="change_data" style={{position:"absolute", top:"494px", left:"462px"}}>Дата замены на новый:</label><input type="text" id="change_data" name="change_data" style={{position:"absolute", top:"494px", left:"672px"}} value={this.state.change_data} onChange={this.handleTextChange}></input>
</fieldset> 
<fieldset className="Verification">
=======
        <label htmlFor="barcode">Штрих-код:</label><input type="text" id="barcode" name="barcode" value={this.state.barcode} onChange={this.handleTextChange}></input>
        <label htmlFor="initial_cost">Начальная стоимость:</label><input type="text" id="initial_cost" name="initial_cost" value={this.state.initial_cost} onChange={this.handleTextChange}></input>
        <label htmlFor="construction_date">Дата ввода в эксплуатацию:</label><input type="text" id="construction_date" name="construction_date" value={this.state.construction_date} onChange={this.handleTextChange}></input>
        <label htmlFor="start_date">Дата изготовления:</label><input type="text" id="start_date" name="start_date" value={this.state.start_date} onChange={this.handleTextChange}></input>
        <label htmlFor="change_data">Дата замены на новый:</label><input type="text" id="change_data" name="change_data" value={this.state.change_data} onChange={this.handleTextChange}></input>
</div> 
<div className="Verification">
>>>>>>> 4926308ad414f5166d5bdd84f91160c6120c86fc
  {/* Verification */}
        <label htmlFor="last_verif_date">Дата последней поверки:</label><input type="text" id="last_verif_date" name="last_verif_date" value={this.state.last_verif_date} onChange={this.handleTextChange}></input>
        <label htmlFor="verif_period">Период поверки, месяц:</label><input type="text" id="verif_period" name="verif_period" value={this.state.verif_period} onChange={this.handleTextChange}></input>
        <label htmlFor="next_verif_date">Дата очередной поверки:</label><input type="text" id="next_verif_date" name="next_verif_date" value={this.state.next_verif_date} onChange={this.handleTextChange}></input>
        <label htmlFor="left_until">До поверки осталось, день:</label><input type="text" id="left_until" name="left_until" value={this.state.left_until} onChange={this.handleTextChange}></input>
        <label htmlFor="verif_cost">Стоимость поверки:</label><input type="text" id="verif_cost" name="verif_cost" value={this.state.verif_cost} onChange={this.handleTextChange}></input>
        <label htmlFor="verif_location">Место поверки:</label><select id="verif_location" name="verif_location" value={this.state.verif_location} onChange={this.handleSelectChange}>
            <option>Место: Минск</option>
            <option>Место: Гродно</option>
            <option>Место: Брест</option>
        </select>
        <label htmlFor="verif_unit_code">Код поверочного подразделения:</label><input type="text" id="verif_unit_code" name="verif_unit_code" value={this.state.verif_unit_code} onChange={this.handleTextChange}></input>
        <label htmlFor="verif_type">Вид поверки:</label><select id="verif_type" name="verif_type" value={this.state.verif_type} onChange={this.handleSelectChange}>
            <option>Внеочередная</option>
            <option>Инспекционная</option>
            <option>Первичная</option>
        </select>
        <label htmlFor="verif_metodology">Методика поверки:</label><select id="verif_metodology" name="verif_metodology" value={this.state.verif_metodology} onChange={this.handleSelectChange}>
            <option>Методика 1</option>
            <option>Методика 2</option>
            <option>Методика 3</option>
        </select>
        <label htmlFor="verif_officer_name">ФИО поверителя:</label><select id="verif_officer_name" name="verif_officer_name" value={this.state.verif_officer_name} onChange={this.handleSelectChange}>
            <option>Иванов</option>
            <option>Петров</option>
            <option>Сидоров</option>
        </select>
        <label htmlFor="conclusion">Заключение:</label><select id="conclusion" name="conclusion" value={this.state.conclusion} onChange={this.handleSelectChange}>
            <option>Годен</option>
            <option>Не пригоден</option>
            <option>Подлежит ремонту</option>
        </select>
        <label htmlFor="report_number">№ протокола:</label><input type="text" id="report_number" name="report_number" value={this.state.report_number} onChange={this.handleTextChange}></input>
        <label htmlFor="mark_type">Вид клейма:</label><select id="mark_type" name="mark_type" value={this.state.mark_type} onChange={this.handleSelectChange}>
            <option>Клеймо</option>
            <option>Наклейка на документацию</option>
            <option>Наклейка на свидетельство</option>
        </select>
        <label htmlFor="mark_number">Клеймо №:</label><input type="text" id="mark_number" name="mark_number" value={this.state.mark_number} onChange={this.handleTextChange}></input>
<<<<<<< HEAD
</fieldset>
<fieldset className="Repair">
=======
</div>
<div className="Repair">
>>>>>>> 4926308ad414f5166d5bdd84f91160c6120c86fc
  {/* Repair */}
        <label htmlFor="reason_for_repair">Причина ремонта:</label><select id="reason_for_repair" name="reason_for_repair" value={this.state.reason_for_repair} onChange={this.handleSelectChange}>
            <option>Причина 1</option>
            <option>Причина 2</option>
            <option>Причина 3</option>
        </select>
        <label htmlFor="repair_date">Дата ремонта:</label><input type="text" id="repair_date" name="repair_date" value={this.state.repair_date} onChange={this.handleTextChange}></input>
        <label htmlFor="repair_address">Место ремонта:</label><select id="repair_address" name="repair_address" value={this.state.repair_address} onChange={this.handleSelectChange}>
            <option>Место ремонта 1</option>
            <option>Место ремонта 2</option>
            <option>Место ремонта 3</option>
        </select>
        <label htmlFor="repair_cost">Стоимость ремонта:</label><input type="text" id="repair_cost" name="repair_cost" value={this.state.repair_cost} onChange={this.handleTextChange}></input>
        <label htmlFor="short_description">Краткое описание ремонта:</label><input type="text" id="short_description" name="short_description" value={this.state.short_description} onChange={this.handleTextChange}></input>
<<<<<<< HEAD
</fieldset>         
=======
</div>         
>>>>>>> 4926308ad414f5166d5bdd84f91160c6120c86fc
      {/* </fieldset> */}
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