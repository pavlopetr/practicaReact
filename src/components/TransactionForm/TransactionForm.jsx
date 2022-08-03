import { Component } from 'react';
import s from './TransactionForm.module.css';

 class TransactionForm extends Component {
state={
  date: "2022-07-28",
  time: "14:14",
  category: "продукти",
  summ: " ",
  currency: "UAH",
  comment: " "
}


handleChange = (e) => {
 
  const {name, value}= e.target;
  this.setState({[name]:value });
}

  render(){
    const {hendleOpenCategoriesList} = this.props;
    const {date, time, category, summ, currency, comment} = this.state
    return (
      <form className={s.form}>
        <div className={s.div}>
          <label className={s.day}>
            День
            <input className={s.inputDay} type="date" name="date" value={date} onChange={this.handleChange}/>
          </label>
          <label className={s.time}>
            Час
            <input className={s.inputTime} type="time" name="time" value={time} onChange={this.handleChange}/>
          </label>
        </div>
        <label className={s.category}>
          Категорія
          <input
            className={s.categoryInput}
            type="button"
            name="category"
            value={category}
            onClick={hendleOpenCategoriesList}
          />
        </label>
        <label className={s.summa}>
          Сума
          <input
            className={s.summaInput}
            type="text"
            name="summ"
            placeholder="Введіть суму"
            value={summ}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.valyta}>
          Валюта
          <input
            className={s.valytaInput}
            type="button"
            name="currency"
            value={currency}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.comment}>
          <input
            className={s.commentInput}
            type="text"
            name="comment"
            placeholder="Коментар"
            value={comment}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
};
export default TransactionForm;
