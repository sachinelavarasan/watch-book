import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  background-color: #2c183d;
  align-items: center;
  border-right: 1px solid #27103a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: fixed;
  overflow-x: hidden;
  padding: 0 0.25rem;
  .logo-link {
    width: 100%;
    text-decoration: none;
  }
  .avatar-icon {
    box-shadow: 2px 2px 4px rgba(65, 65, 65, 0.25), -2px -2px 3px rgba(168, 168, 168, 0.8);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
    width: 2.1rem;
    height: 2.1rem;
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
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    max-width: 3rem;
  }
  .watch-book-logo {
    padding-left: 4px;
    padding-right: 4px;
  }
`;
