import { useState } from 'react';
import { sum } from '../wasm/pkg/wasm_sample_bg.wasm';

export default function Sum() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => {
          const v = Number(e.target.value);
          !isNaN(v) && setValue(sum(v));
        }}
      />
      <div>{value}</div>
    </div>
  );
}
