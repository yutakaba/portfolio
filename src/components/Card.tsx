'use client'

import { styled } from '@linaria/react';
import Link from 'next/link';
import { TipsModal } from './Modal/Card/TipsModal';

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  tips: string;
};

export default function Card({ title, description, image, href, tips }: Props) {
  return (
    <StyledCardWrapper>
      <TipsModal tipText={tips} />
      <Link href={href} passHref>
        <StyledCard>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <img src={image} alt={title} />
        </StyledCard>
      </Link>
    </StyledCardWrapper>
  );
  
}

const StyledCardWrapper = styled.div`
  position: relative; /* 💡 Tipsボタンを右上に配置するため */
`;

const StyledCard = styled.div`
  background-color: rgb(220, 220, 220);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(120, 120, 120, 0.1);
  display: block; /* Make the entire card clickable */
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
  cursor: pointer;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const StyledDescription = styled.p`
  font-size: 16px;
`;
