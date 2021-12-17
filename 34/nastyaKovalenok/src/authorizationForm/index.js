import "./style.css"

class AuthorizationPage {
    constructor() {
        return this.init()
    }

    init() {
        return this.render()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputs = [...e.target.elements];
        const data = inputs.reduce((acc, input) => {
            if (input.id) {
                acc[input.id] = input.value;
            }
            return acc;
        }, {});

        console.log(JSON.stringify(data))
    };

    render() {

        const divForAuthorization = document.createElement('div')
        const form = document.createElement('form');
        form.addEventListener('submit', this.handleSubmit)
        divForAuthorization.append(form);

        form.innerHTML = `
            <div>Введите почту<input type="email" id="email"/></div>
            <div>Введите пароль<input type="password" id="password"/></div>
            <label><input type="checkbox" id="checkbox"/>Вы принимаете пользовательское соглашение</label>
            <div><button>Зарегистрировать</button</div>`

        return divForAuthorization
    }

}

export default AuthorizationPage

