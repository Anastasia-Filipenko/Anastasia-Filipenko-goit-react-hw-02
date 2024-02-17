import css from '../Options/Options.module.css';
export default function Options({ value, onClick, onReset }) {
  return (
    <>
      <button className={css.btn} onClick={() => onClick('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onClick('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onClick('bad')}>
        Bad
      </button>
      {value ? <button onClick={() => onReset()}>Reset</button> : null}
    </>
  );
}
