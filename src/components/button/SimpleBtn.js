export default function SimpleBtn(props) {
    return (
      <button className={`btn ${props.btnclass}`} onClick={props.click}>
        {props.content}
      </button>
    );
  }