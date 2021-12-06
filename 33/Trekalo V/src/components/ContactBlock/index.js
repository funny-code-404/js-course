class ContactBlock {
  constructor() {
    return this.init();
  }

  init() {
    return this.render();
  }

  render() {
    async function foo() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    }
    return foo();
  }
}

export default ContactBlock;
