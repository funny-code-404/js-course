const FormRenderProps = ({ render }) => {
  return (
    <div className="formWrapper">
      <div className="commonWrapper">
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Пароль" />
      </div>
      <div>{render()}</div>
    </div>
  );
};

export default FormRenderProps;
