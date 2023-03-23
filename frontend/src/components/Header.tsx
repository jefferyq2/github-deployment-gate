import styled from '@emotion/styled';
import React from 'react';

import Button from './Button';

interface Props {
  onLogout: () => void;
  imageUrl?: string;
}

const Header = ({onLogout, imageUrl}: Props) => (
  <StyledHeader>
    <Title>🚀 Github Deployment Gate</Title>
    <Avatar src={imageUrl} alt="Profile Avatar" />
    <Button type="submit" className="primary" onClick={onLogout}>
      Logout
    </Button>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: ${p => p.theme.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  font-style: italic;
`;

const Title = styled.h1`
  display: block;
  flex: 1;
  font-size: 1.5rem;
  text-align: left;
  color: ${p => p.theme.blue300};
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  margin-right: 10px;
`;

export default Header;
