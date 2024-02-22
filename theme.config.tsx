import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/JpWon/nextra-docs-template.git',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/JpWon/nextra-docs-template.git',
  footer: {
    text: 'VictoryVerdict.com',
  },
  header: {
    title: 'Empowering Your Legal Journey with Cutting-Edge Technology',
    subtitle: 'Embrace the future of legal assistance today',
    // Add more header customization options as needed
  },
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D', // Adjust colors to match your brand
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif', // Customize fonts for the website
  },
  // Add more styling and configuration options based on your design requirements
};

export default config;

