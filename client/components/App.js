//client/components/App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import '../css/App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {locationDevice: 'Nov', data: []};
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData(this, '2016');
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this, '2016');
  }
  getData(ev, scope) {
    axios.get('/getAll')
      .then(function(response) {
        ev.setState({data: response.data});
        
      });
  }
  render() {
    return (
      <div>
        <Add locationDevice={this.state.locationDevice} />
        <table className="commonTable">
          <thead>
            <tr>
              <th>№ пп</th>
      {/* Device */}
              <th className="desc-col">Наименование СИ</th>
              <th className="button-col">Тип СИ</th>
              <th className="button-col">Категория СИ</th>
              <th className="button-col">Вид измерения</th>
              <th className="button-col">Сфера применения</th>
              <th className="button-col">Место нахождения</th>
              <th className="button-col">Состояние СИ</th>
              <th className="button-col">Примечание</th>
      {/* Passport */}
              <th className="button-col">Заводской №</th>
              <th className="button-col">Паспорт №</th>
              <th className="button-col">Инвентарный №</th>
              <th className="button-col">Номенклатурный №</th>
              <th className="button-col">Изготовитель</th>
              <th className="button-col">Штрих-код</th>
              <th className="button-col">Начальная стоимость</th>
              <th className="button-col">Дата ввода в эксплуатацию</th>
              <th className="button-col">Дата изготовления</th>
              <th className="button-col">Дата замены на новый</th>
      {/* Virification */}
              <th className="button-col">Дата последней поверки</th>
              <th className="button-col">Период поверки, месяц</th>
              <th className="button-col">Дата очередной поверки</th>
              <th className="button-col">До поверки осталось, день</th>
              <th className="button-col">Стоимость поверки</th>
              <th className="button-col">Место поверки</th>
              <th className="button-col">Код поверочного подразделения</th>
              <th className="button-col">Вид поверки</th>
              <th className="button-col">Методика поверки</th>
              <th className="button-col">ФИО поверителя</th>
              <th className="button-col">Заключение</th>
              <th className="button-col">№ свидетельства</th>
              <th className="button-col">Вид клейма</th>
              <th className="button-col">Клеймо №</th>
      {/* Repair */}
              <th className="button-col">Причина ремонта</th>
              <th className="button-col">Дата ремонта</th>
              <th className="button-col">Место ремонта</th>
              <th className="button-col">Стоимость ремонта</th>
              <th className="button-col">Краткое описание ремонта</th>
              
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(exp) {
                return <tr>
                  <td className="counterCell"></td>
        {/* Device */}
                  <td className="desc-col">{exp.title}</td>
                  <td className="button-col">{exp.type}</td>
                  <td className="button-col">{exp.class}</td>
                  <td className="button-col">{exp.measureKind}</td>
                  <td className="button-col">{exp.scope}</td>
                  <td className="button-col">{exp.location}</td>
                  <td className="button-col">{exp.status}</td>
                  <td className="button-col">{exp.comment}</td>
        {/* Passport */}
                  <td className="button-col">{exp.passport.serial_number}</td>
                  <td className="button-col">{exp.passport.passport_number}</td>
                  <td className="button-col">{exp.passport.inventory_number}</td>
                  <td className="button-col">{exp.passport.stock_number}</td>
                  <td className="button-col">{exp.passport.maker}</td>
                  <td className="button-col">{exp.passport.barcode}</td>
                  <td className="button-col">{exp.passport.initial_cost}</td>
                  <td className="button-col">{exp.passport.construction_date}</td>
                  <td className="button-col">{exp.passport.start_date}</td>
                  <td className="button-col">{exp.passport.change_data}</td>
        {/* Verification */}
                  <td className="button-col">{exp.verification.last_verif_date}</td>
                  <td className="button-col">{exp.verification.verif_period}</td>
                  <td className="button-col">{exp.verification.next_verif_date}</td>
                  <td className="button-col">{exp.verification.left_until}</td>
                  <td className="button-col">{exp.verification.verif_cost}</td>
                  <td className="button-col">{exp.verification.verif_location}</td>
                  <td className="button-col">{exp.verification.verif_unit_code}</td>
                  <td className="button-col">{exp.verification.verif_type}</td>
                  <td className="button-col">{exp.verification.verif_metodology}</td>
                  <td className="button-col">{exp.verification.verif_officer_name}</td>
                  <td className="button-col">{exp.verification.conclusion}</td>
                  <td className="button-col">{exp.verification.report_number}</td>
                  <td className="button-col">{exp.verification.mark_type}</td>
                  <td className="button-col">{exp.verification.mark_number}</td>
        {/* Repair */}
                  <td className="button-col">{exp.repair.reason_for_repair}</td>
                  <td className="button-col">{exp.repair.repair_date}</td>
                  <td className="button-col">{exp.repair.repair_address}</td>
                  <td className="button-col">{exp.repair.repair_cost}</td>
                  <td className="button-col">{exp.repair.short_description}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

