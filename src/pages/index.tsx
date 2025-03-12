import { NextPage } from 'next';
import Head from 'next/head';
import Slogan from '@/presentation/components/Slogan';
import ParticlesBackground from '@/presentation/components/Background';
import { GetSloganUseCase } from '@/application/useCases/GetSloganUseCase';
import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Home: NextPage = () => {
  const getSloganUseCase = new GetSloganUseCase();
  const slogan = getSloganUseCase.execute();

  return (
    <HomeContainer>
      <Head>
        <title>AiCoach</title>
        <meta name="description" content="AiCoach - em breve" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground />
      <Slogan slogan={slogan} />
    </HomeContainer>
  );
};

export default Home; 