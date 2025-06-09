
import styled from 'styled-components';

const NuCard = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 50px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card:hover{
    border-radius: 50px;
background: #e0e0e0;
box-shadow: inset -20px 20px 60px #bebebe,
            inset 20px -20px 60px #ffffff;
}
`;



export default NuCard;
