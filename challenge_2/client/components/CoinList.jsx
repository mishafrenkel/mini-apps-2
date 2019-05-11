import React from 'react';
import CoinEntry from './CoinEntry';

const CoinList = ({ coins }) => {
  const coinEntries = coins.map(coin => {
    return <CoinEntry coin={coin} />
  });

  return (
    <div id="coins">
      { coinEntries }
    </div>
  );
};

export default CoinList;