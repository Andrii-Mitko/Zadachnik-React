import css from "./Employee.module.css";

interface P {
  name: string;
  reporting: string;
  lastName?: string;
  salary?: number;
}

export default function Employee({ name, reporting, lastName, salary }: P) {
  return (
    <p className={css.p}>
      name: <span className={css.span}>{name}</span>
      reporting: <span className={css.span}>{reporting}</span>
      lastName: <span className={css.span}>{lastName}</span>
      salary: <span className={css.span}>{salary} грн</span>
    </p>
  );
}
