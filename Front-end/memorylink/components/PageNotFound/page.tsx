import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: #333;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>You are not authorized to view this page</div>
    </NotFoundContainer>
  );
};

export default NotFound;