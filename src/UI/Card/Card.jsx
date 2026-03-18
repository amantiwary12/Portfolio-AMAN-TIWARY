import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <StyledWrapper bgImage={props.bgImage}>
      <div className="book">
        <div className="cover">
          <div className="cover-content">
            <h3 className="text-white text-xl font-bold text-center px-4">
              {props.username}
            </h3>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .book {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform-style: preserve-3d;
    perspective: 2000px;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .cover-content {
    position: relative;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s;
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  .book:hover .cover::before {
    opacity: 1;
  }

  .book:hover .cover-content {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default Card;