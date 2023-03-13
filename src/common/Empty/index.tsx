import React from 'react';
import EmptyLogo from '../../assets/images/empty-box.svg';

import styled from '@emotion/styled';

export const EmptyContainer = styled.div`
  padding: 5rem 8rem;
  background-color: #ffffff;
  border: 1px solid #dc6cfc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Empty({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <EmptyContainer>
      <img src={EmptyLogo} />
      <h3 className="mb-2">{title}</h3>
      <p>{subtitle}</p>
    </EmptyContainer>
  );
}

export default Empty;
