

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'succeed';
}

interface RootState {
  counter: CounterState;
  // 其他模块的 state 类型...
}

interface Payload {
  type: string;
  payload: any;
}

export type { RootState, CounterState, Payload };