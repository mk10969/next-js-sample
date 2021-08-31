import { useState } from 'react';
import { sums } from '../wasm/maskedlm_bg.wasm';

export default function Sum() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => {
          const v = Number(e.target.value);
          !isNaN(v) && setValue(sums(v));
        }}
      />
      <div>{value}</div>
    </div>
  );
}
