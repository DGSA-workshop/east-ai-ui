﻿export default [
  {
    path: '/marketing-text',
    name: 'llm.marketing-text',
    icon: 'FileTextOutlined',
    component: './MarketingText',
  },
  {
    path: '/sd-product-design',
    name: 'sd.product-design',
    icon: 'FormatPainterOutlined',
    component: './ProductDesign',
  },
  {
    path: '/inpaint',
    name: 'sd.inpaint',
    icon: 'FileImageOutlined',
    component: './Inpaint',
  },
  // {
  //   path: '/sd-product-edit',
  //   name: 'sd.product-edit',
  //   icon: 'smile',
  //   component: './Welcome',
  // },

  // {
  //   path: '/customer-bot',
  //   name: 'llm.customer-bot',
  //   icon: 'RobotOutlined',
  //   component: './CustomerBot',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/kb-data',
  //       name: 'kb-data',
  //       component: './Admin',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/marketing-text',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
