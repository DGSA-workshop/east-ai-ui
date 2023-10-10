import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage: "url('rectangle.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            亚马逊云科技 Workshop - 营销场景生成式 AI
          </div>
          <p
            style={{
              fontSize: '16px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            <ul style={{ paddingLeft: 10 }}>
              <li>
                本工具完整的展示了如何利用Amazon SageMaker, 大模型,
                和前后端框架来构建一个基于业务场景的生成式AI应用。
              </li>
              <li>
                体验最新的专为大模型推理性能优化的新框架和技术，如：SageMaker LMI, DJL,
                Streaming等。
              </li>
              <li>用户界面友好，易用。用于和客户的沟通和交流，启发更多业务场景。</li>
            </ul>
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="#"
              title="动手实验手册"
              desc="通过实验手册，指导您一步步将本系统部署至自有帐号中"
            />
            <InfoCard
              index={2}
              title="亚马逊云科技生成式AI"
              href="https://aws.amazon.com/generative-ai/"
              desc="帮助客户更快地创新，重塑客户体验和应用程序"
            />
            <InfoCard
              index={3}
              title="了解亚马逊云科技"
              href="https://aws.amazon.com/"
              desc="全球领先的云计算平台，提供强大的计算、存储、数据库等一系列云服务。客户可以灵活地构建、部署和扩展各种应用程序"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
