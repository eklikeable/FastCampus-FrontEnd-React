import styled from 'styled-components';
import { BiCurrentLocation } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

function Tab() {
  return (
    <Container>
      <SubContainer>
        <TabBox>
          <BiCurrentLocation size={30} />
          <span>내 지역보기</span>
        </TabBox>
        <TabBox>
          <TbMapSearch size={30} />
          <span>전체 시도보기</span>
        </TabBox>
        <TabBox>
          <FaStar size={30} />
          <span>즐겨찾기</span>
        </TabBox>
      </SubContainer>
    </Container>
  );
}

export default Tab;

const Container = styled.div`
  display: flex;
  border-top: 1px solid #eee;
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
