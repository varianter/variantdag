import { FC } from 'react';

type Props = {
  text: string;
};

export const TypedHelloWorld: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export const test = 12;
