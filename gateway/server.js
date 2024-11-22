const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy for Users Service
app.use('/users', createProxyMiddleware({
  target: 'http://users-service:3001',
  changeOrigin: true
}));

// Proxy for Orders Service
app.use('/orders', createProxyMiddleware({
  target: 'http://orders-service:3002',
  changeOrigin: true
}));

const PORT = 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
