import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainePage.module.css';
import { Component } from 'react';



class MainPage extends Component{

state = {
  isCategoriesList: false,
};

hendleOpenCategoriesList = () => {
  this.setState({isCategoriesList: true});
}

hendleCloseCategoriesList = () => {
  this.setState({isCategoriesList: false});
}

render(){
  const {onIncomesBtnClick, onCostsBtnClick}= this.props;
  const{isCategoriesList}= this.state
  return (
    <div className="container">
      <Header
        title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
        icon={isCategoriesList ? '#icon-arrow-left' : null}
        cbOnClick={this.hendleCloseCategoriesList}
      />
      <main className={s.main}>
        {isCategoriesList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm hendleOpenCategoriesList={this.hendleOpenCategoriesList}/>
            <div className={s.blockBtn}>
              <button className={s.costs} onClick={onCostsBtnClick} >Всі витрати</button>
              <button className={s.incomes} onClick={onIncomesBtnClick}>Всі прибутки</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
  
};
export default MainPage;
