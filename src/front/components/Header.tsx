'use client';

import { styled } from '@linaria/react';

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Header</StyledTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #1b1515;
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
`;