import './PricingCard.scss';
import {Card, Button} from 'react-bootstrap';

const PricingCard = ({option, selected, onClick}) => {
  return (        
    <Card className={`pricing-card ${selected ? 'selected': ''}`} onClick={() => onClick()} >
      <Card.Body>
        <Card.Title>{option.title}</Card.Title>
          <div className='pricing-option'>
            <div className='pricing-amount'>
              <span className='small'>$</span>
              {option.amount}
              </div>
            <ul className='resource-list'>
              <li className='resource-item'>{option.storage} storage</li>
              <li className='resource-item'>{option.userAllowed} users allowed</li>
              <li className='resource-item'>Send up to {option.sendLimit} GB</li>
            </ul>
          </div>
        <Button className='learn-more-btn'>Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default PricingCard;
