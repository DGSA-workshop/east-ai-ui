import { ProLayoutProps } from '@ant-design/pro-components';

const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  pure: false,
  colorPrimary: '#FAAD14',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  pwa: true,
  splitMenus: false,
  siderMenuType: 'sub',
  logo: '/aws-logo.png',
  iconfontUrl: '',
  token: {},
};

export default Settings;
