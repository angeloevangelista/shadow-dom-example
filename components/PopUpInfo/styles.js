const styles = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    from {
      transform: rotate(-360deg);
    }
  }

  .wrapper {
    width: 100px;
    height: 100px;
    position: relative;
  }
  
  .info {
    width: max-content;
    
    font-size: 0.8rem;
    padding: 10px;
    
    border-radius: 10px;
    opacity: 0;
    transition: 0.6s all;
    
    top: -20px;
    left: 40px;
    position: absolute;
    
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.05)
  }

  img {
    width: 100%;

    animation: spin infinite linear 5s;
  }

  .icon:hover + .info, .icon:focus + .info {
    opacity: 1;
  }
`;

export { styles };
