import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

interface Props {
  label?: string;
  onUpdated: (count: number) => void;
}

export default function UIComponent(props: Props): JSX.Element {
  const [count, setCount] = useState(0);
  const { label, onUpdated } = props;

  useEffect(() => {
    // サーバーアクセスなどのマウント後に実行したいコードはここ
    return () => {
      // 削除前に実行したいコードはここ
    };
  }, []);

  function onClick() {
    setCount(count + 1);
    onUpdated(count + 1);
  }

  return (
    <div className='panel'>
      <div className='message'>
        <Button variant='contained' color='secondary' onClick={onClick}>
          {label}: {count}
        </Button>
      </div>
    </div>
  );
}

UIComponent.defaultProps = {
  label: 'push',
};
