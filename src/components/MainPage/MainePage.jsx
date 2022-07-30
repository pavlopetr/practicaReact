import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
const MainPage = () => {
  const isCategoriesList = false;
  return (
    <>
      <header>
        <button type="button">
     
          {isCategoriesList ? 'Co back' : 'burger'}
        </button>
        <h1 className="title-page">
          
          {isCategoriesList ? 'Категорії' : 'Журнал витрат'}
        </h1>
      </header>

      <main>
        {isCategoriesList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm />
            <button className="costs">Всі витрати</button>
            <button className="incomes">Всі прибутки</button>
          </>
        )}
      </main>
    </>
  );
};
export default MainPage;
