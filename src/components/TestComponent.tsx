import React, { FC } from 'react';
import Image from 'next/image';

const TestComponent: FC = () => (
  <Image
    src="/vercel.svg"
    alt="Vercel Logo"
    width={100}
    height={24}
    priority
  />
);

export default TestComponent;
