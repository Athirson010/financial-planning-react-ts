import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/index'
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}