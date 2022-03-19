const DeleteAcc = () => {
  return (
    <div className="commonWrapper">
      <h2>Удаление аккаунта</h2>
      <textarea placeholder="Оставьте Ваш отзыв" />
      <h4>Оцените работу над приложением</h4>
      <label>
        <input type="radio" /> 1
      </label>
      <label>
        <input type="radio" /> 2
      </label>
      <label>
        <input type="radio" /> 3
      </label>
      <label>
        <input type="radio" /> 4
      </label>
      <label>
        <input type="radio" /> 5
      </label>
      <button>Отправить</button>
    </div>
  );
};

export default DeleteAcc;
