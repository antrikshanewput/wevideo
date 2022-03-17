import './App.scss';
import {useState} from 'react';
import {Form} from 'react-bootstrap';
import PricingCard from './PricingCard';
const App = () => {
  const [toggle, setToggle] = useState(false);
  const [cards, setCards] = useState(1);

  const pricingOption = {
    monthly: [
      {title: 'Basic', amount: '199.99', storage: '500 GB', userAllowed: 2, sendLimit: 3},
      {title: 'Professional', amount: '249.99', storage: '1 TB', userAllowed: 5, sendLimit: 10, selected: true},
      {title: 'Master', amount: '399.99', storage: '2 TB', userAllowed: 10, sendLimit: 20}
    ],
    annually: [
      {title: 'Basic', amount: '19.99', storage: '500GB', userAllowed: 2, sendLimit: 3},
      {title: 'Professional', amount: '24.99', storage: '1TB', userAllowed: 5, sendLimit: 10, selected: true},
      {title: 'Master', amount: '39.99', storage: '2TB', userAllowed: 10, sendLimit: 20}
    ]
  };
  const options = toggle ? pricingOption.annually : pricingOption.monthly;

  return (
    <div className="pricing-menu">
      <div className='title'>Our pricing</div>
      <div className='pricing-options'>
      <Form>
        <label>Annually</label>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Monthly"
          className='toogle-switch'
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
      </Form>
      </div>
      <div className='pricing-cards'>
          {
            options.map((option, index) => {
              return (
              <PricingCard option={option} key={index} onClick={() => setCards(index)} selected={index === cards} />
              );
            })
          }
      </div>
    </div>
  );
}

export default App;
