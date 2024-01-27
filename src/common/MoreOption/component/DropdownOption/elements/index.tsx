import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const DropdownOptionContainer = styled(Button)`
  background-color: #1a0131;
  .label {
    width: 100%;
    text-align: left;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
  }
  :hover {
    background-color: #1a0131;
  }
  &.is-delete {
    background-color: #ffffff;

    .label {
      color: #1a0131;
    }
  }
  &.is-disabled {
    background-color: #e5b6ff;
    cursor: not-allowed;
    .label {
      color: #8a8a8a;
    }
  }
  :not(:last-child) {
    margin-bottom: 0.35rem;
  }
  .dropdown-icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    margin-right: -0.2rem;
  }
`;
