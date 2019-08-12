import css from './styles.css';

const Card = (props) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <div className={css.card} {...rest}>
      {children}
      <div className={css.button}>
        <button>Click me!</button>
      </div>
    </div>
  );
};

export default Card;

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//   };

//   render() {
//     return (
//       <div>Hello I'm a Card</div>
//     );
//   }
// };
