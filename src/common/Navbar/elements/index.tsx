import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  padding: 10px 0px;
  background-color: white;
  align-items: center;
  box-shadow: 1px 1px 2px #888888;
  border-radius: 0 20px 20px 0;
  .logo-link {
    width: 100%;
    text-decoration: none;
  }
  .logo-container {
    cursor: pointer;
    font-family: Impact, Haettenschweiler, 'Arial Narrow ', sans-serif;
    color: white;
  }
  .watch-book {
    width: 100%;
    text-align: center;
    font-style: italic;
  }
  .watch {
    font-size: 0.85rem;
  }
  .book {
    font-size: 1.3rem;
    color: rgb(217, 3, 104);
  }
  p {
    color: white;
  }
  .icon {
    margin-top: 0.875rem;
  }
`;
