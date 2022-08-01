import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainePage.module.css';

const MainPage = ({onIncomesBtnClick, onCostsBtnClick}) => {
  const isCategoriesList = false;

  return (
    <div className="container">
      <Header
        title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
        icon={isCategoriesList ? '#icon-arrow-left' : null}
      />
      <main className={s.main}>
        {isCategoriesList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm />
            <div className={s.blockBtn}>
              <button className={s.costs} onClick={onCostsBtnClick} >Всі витрати</button>
              <button className={s.incomes} onClick={onIncomesBtnClick}>Всі прибутки</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
export default MainPage;
