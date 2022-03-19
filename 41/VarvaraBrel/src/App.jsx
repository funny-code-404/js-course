import DataBlock from './components/DataBlock';
import Form from './components/Form';
import FormRenderProps from './components/FormRenderProps';
import Registration from './components/FormRenderProps/registration';
import Entry from './components/FormRenderProps/entry';
import DeleteAcc from './components/FormRenderProps/deleteAcc';

function App() {
  return (
    <div>
      {/* <Form /> */}
      {/* <DataBlock /> */}
      <FormRenderProps
        render={() => {
          return <Registration />;
        }}
      />
      <FormRenderProps
        render={() => {
          return <Entry />;
        }}
      />
      <FormRenderProps
        render={() => {
          return <DeleteAcc />;
        }}
      />
    </div>
  );
}

export default App;
