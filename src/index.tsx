import React from 'react';
import { createRoot } from 'react-dom/client';
import { Form } from './form';
import { MY_FORM } from './schema';

const App = () => {
  return <Form schema={MY_FORM} initialValues={{ name: 'Jake' }} />;
};

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
