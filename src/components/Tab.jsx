import styled from 'styled-components';
import { BiCurrentLocation } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Tab() {
  return (
    <Container>
      <SubContainer>
        <Link to={'/'}>
          <TabBox>
            <BiCurrentLocation size={30} />
            <span>내 지역보기</span>
          </TabBox>
        </Link>
        <Link to={'cities'}>
          <TabBox>
            <TbMapSearch size={30} />
            <span>전체 시도보기</span>
          </TabBox>
        </Link>
        <Link to={'favorite'}>
          <TabBox>
            <FaStar size={30} />
            <span>즐겨찾기</span>
          </TabBox>
        </Link>
      </SubContainer>
    </Container>
  );
}

export default Tab;

const Container = styled.div`
  display: flex;
  border-top: 1px solid #eee;
  background-color: #fff;
  padding: 5px;

  span {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  gap: 50px;
  max-width: 350px;
`;

const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
