import css from "./App.module.css";
function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Заголовок</h1>
      <p className={css.text}>Текст 1</p>
      <p className={css.text}>Текст 2</p>
      <p className={css.text}>Текст 3</p>
      <ul className={css.list}>
        <li className={css.item}>item1</li>
        <li className={css.item}>item2</li>
        <li className={css.item}>item3</li>
        <li className={css.item}>item4</li>
        <li className={css.item}>item5</li>
        <li className={css.item}>item6</li>
        <li className={css.item}>item7</li>
        <li className={css.item}>item8</li>
        <li className={css.item}>item9</li>
        <li className={css.item}>item10</li>
      </ul>
    </div>
  );
}

export default App;
