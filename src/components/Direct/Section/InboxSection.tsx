import React from "react";
import styled from "styled-components";
import ImageSprite from "components/Common/DirectSprite";
import Button from "styles/UI/Button";
import { useAppDispatch } from "../../../app/store/hooks";
import { openModal } from "../../../app/store/ducks/direct/DirectSlice";


const InboxSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .paper-image{
    margin-bottom: 10px;
  }
  .content-section {
    display: flex;
    flex-direction: column;


    .content-title {
      font-weight: 300;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      margin-bottom: 10px;
    }

    .content-desc {
      color: #8e8e8e;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 20px;

    }
  }
`;

const paperImage: Login.ImageProps = {
    width: 96,
    height: 96,
    position: `-196px -205px`,
};


const InboxSection = () => {
    const dispatch = useAppDispatch()
    return (
        <InboxSectionContainer>

            <div className="paper-image">
                <ImageSprite width={paperImage.width}
                             height={paperImage.height}
                             position={paperImage.position} />
            </div>
            <div className="content-section">
                <span className={"content-title"}>내 메시지</span>
                <span className={"content-desc"}>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</span>
            </div>
            <div className="button-section">
                <Button onClick={()=>{
                    dispatch(openModal("newChat"))
                }} bgColor="#0095f6" color="#fff" >메시지 보내기</Button>
            </div>


        </InboxSectionContainer>
    );
};

export default InboxSection;