import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';
import cemigLogo from '../../../../resources/img/cemig_logo.png';
import leveLogo from '../../../../resources/img/leve-logo-blue.jpg';


const moveFirst = keyframes`
  to {
    transform: translateX(50%); /* Move to the center */
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
`;

const LogoBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 0 10px;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 600px) {
    width: 200px;
    height: 100px;
  }
  
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  
  border-radius: 13px;

  img {
      border-radius: 13px;
      width: 100%;
      height: 100%;
    }
    `;

const FirstBox = styled(LogoBox)`

  animation: ${moveFirst} 5s forwards; 
`;

const LastBox = styled(LogoBox)`

  img {
    width: 100%;
    height: 100%;
    
  }
  animation: ${fadeOut} 5s forwards;
`;


export default function DistibuitorSyncData() {


  const distribuitorLogo = cemigLogo

  return (
    <Container>
      <FirstBox>
        <Image
          loading="lazy" 
          src={leveLogo} alt='leve' objectFit='contain' objectPosition='left' />
      </FirstBox>
      <LastBox>
        <Image src={distribuitorLogo} alt='cemig' objectFit='contain' objectPosition='left' />
      </LastBox>
    </Container>
  );
};