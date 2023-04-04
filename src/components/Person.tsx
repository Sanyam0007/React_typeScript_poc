import { PersonType } from "./Person.Types";
export const Person = (props: PersonType) => {
  return (
    <div>
      <h2>
        hello this is {props.name.name} and my age is {props.name.age}
      </h2>
    </div>
  );
};
