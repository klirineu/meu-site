import styled from 'styled-components'

export const ContentMain = styled.main`
  /* background-color: black; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  -ms-flex-direction: column;
  gap: 2rem;
  padding-bottom: 3.125rem;
`
export const MainTitle = styled.h1`
  font-size: 1.875rem; // === 30px
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorE};
  &::after {
    background: linear-gradient(
      280deg,
      rgba(53, 101, 165, 1) 23%,
      rgba(255, 255, 255, 1) 100%
    );
    content: '';
    display: flex;
    height: 0.3rem;
    position: relative;
    vertical-align: middle;
    width: 55%;
    margin: auto;
    border-radius: 2rem;
  }
  @media (max-width: 575.98px) {
    font-size: 1.75rem; // === 28px
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 1.75rem; // === 28px
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 1.75rem; // === 28px
  }
`
export const ContainerProjects = styled.section`
  .container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: auto;
  }
  .container .box {
    position: relative;
    width: 275px;
    height: 275px;
    transition: 0.5s;
    transform-style: preserve-3d;
    overflow: hidden;
    margin-right: 15px;
    margin-top: 45px;
  }
  .container:hover .box {
    transform: rotateY(10deg);
  }
  .container .box:hover ~ .box {
    transform: rotateY(-10deg);
  }
  .container .box:hover {
    transform: rotateY(0deg) scale(1.1);
    z-index: 1;
  }
  .container .box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .container .box .imgBx:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #fafafa, #16161a);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;
    border-radius: 2rem;
  }
  .container .box:hover .imgBx:before {
    opacity: 1;
  }
  .container .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100vh;
    object-fit: fill;
  }
  .container .box .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    padding: 20px;
    align-items: flex-end;
    box-sizing: border-box;
  }
  .container .box .content h2 {
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 0.9rem;
    transform: translateY(200px);
    transition-delay: 0.3s;
  }
  .container .box:hover .content h2 {
    transform: translateY(0px);
  }
  .container .box .content p {
    color: #fff;
    transition: 0.5s;
    font-size: 0.9rem;
    transform: translateY(200px);
    transition-delay: 0.4s;
  }
  .container .box:hover .content p {
    transform: translateY(0px);
  }
`
export const AnimationImage = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 50%; */
`
