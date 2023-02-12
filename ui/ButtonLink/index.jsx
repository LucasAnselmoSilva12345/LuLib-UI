import React from 'react'
import ReactDOM from 'react-dom/client'
import { useNavigate } from 'react-router-dom';
import { Button } from './style.js';

export function ButtonLink({ navigate, nameButton, iconComponent }) {
  const redirect = useNavigate();

  function handlePageRedirect() {
    redirect(`${navigate}`);
  }

  return <Button onClick={handlePageRedirect}>{nameButton} {iconComponent}</Button>;
}
