import React, { useState } from 'react';
import { Button, Card, Progress } from 'semantic-ui-react';
import './sales.css';

const Sales = () => {

  const [percent, setPercent] = useState(0);

  const generateProgress = (min = 10, max = 99) => {
    return percent >= 100 ? 0 : Math.ceil(Math.random() * (max - min)) + min;
};

  return (
    <Card className='sales'>
      <Card.Content>
        <Card.Header>Обучениие по продажам</Card.Header>
        <Card.Meta>Вы сделали 13 продаж и заработали:</Card.Meta>
        <Card.Description>$ 2 000</Card.Description>
        <Card>
          <Card.Content>
            <Card.Header>Месячный план выполнен на</Card.Header>
            <Progress percent={percent} progress />
            <div className='sales-div'>
							<Button className='sales-button' onClick={() => setPercent(generateProgress())}>Продолжить</Button>
							<Card.Meta>Осталось 8 дней</Card.Meta>
						</div>
          </Card.Content>
        </Card>
      </Card.Content>
    </Card>
  );
};

export default Sales;
