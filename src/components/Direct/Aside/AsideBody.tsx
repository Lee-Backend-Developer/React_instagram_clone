import ChatList from "components/Direct/Aside/ChatList";
// 이런 식으로 type을 가져와서 제가 필요한 모듈을 가져와요
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { openModal, selectView } from "app/store/ducks/direct/DirectSlice";

// 그 다음 그 모듈 안에서 제가 export 한 타입을 가져와서 사용하는 방식입니다.

export const dummyChatList: Array<Direct.ChatItem> = [
    {
        chatRoomId: 1,
        lastMessage: {
            messageId: 1,
            content: "야 모해",
            userId: 3,
            messageType: "text",
        },
        unreadFlag: false,
        inviter: {
            username: "dlwlrma",
            name: "이지금",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        },

        invitees: [{
            username: "dlwlrma2",
            name: "이지금2",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        }],
    },

    {
        chatRoomId: 2,
        lastMessage: {
            messageId: 1,
            content: "야 모해",
            userId: 3,
            messageType: "text",
        },
        unreadFlag: false,
        inviter: {
            username: "dlwlrma",
            name: "이지금",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        },

        invitees: [{
            username: "dlwlrma2",
            name: "이지금2",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        }],
    },

    {
        chatRoomId: 3,
        lastMessage: {
            messageId: 1,
            content: "야 모해",
            userId: 3,
            messageType: "text",
        },
        unreadFlag: false,
        inviter: {
            username: "dlwlrma",
            name: "이지금",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        },

        invitees: [{
            username: "dlwlrma1",
            name: "이지금2",
            imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        }],
    }
   ]

const AsideBodyContainer = styled.section`
  height: calc(100% - 60px);
  overflow-y: auto;
  min-width: 350px;

  .no-follower-message {
    display: flex;
    margin: 8px 20px;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    h5 {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #0095f6;
      cursor: pointer;
    }
  }

  .no-follower-guide {
    padding: 20px 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    background-color: #fafafa;
  }

  .delete-all-button {
    position: absolute;
    width: 100%;
    background-color: white;
    bottom: 0;
    right: 0;
    padding: 16px 0;
    border-top: 1px solid #dbdbdb;
    text-align: center;
    color: #ed4956;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }


  @media (max-width: 936px) {
    min-width: 300px;
  }

`;

const AsideBody = () => {

    const dispatch = useAppDispatch();
    const { view } = useAppSelector((state => state.direct));


    return (
        <AsideBodyContainer>
            {/*팔로우 아닌 사람에게 온 메세지가 있다면 보여주기*/}
            {
                (view === "requests" || view === "requestsChat") ? <div className="no-follower-guide">
                        회원님이 수락하기 전까지 요청이 읽음으로 표시되지 않습니다.
                    </div> :
                    <div className="no-follower-message">
                        <h4>메시지</h4>
                        <h5 onClick={() => {
                            dispatch(selectView("requests"));
                        }}>요청 1개</h5>
                    </div>
            }
            <ChatList chatList={dummyChatList} />
            {
                (view === "requests" || view === "requestsChat") && <div className={"delete-all-button"}
                                                                         onClick={() => {
                                                                             dispatch(openModal("deleteAll"));
                                                                         }}
                >
                    모두 삭제
                </div>
            }
        </AsideBodyContainer>
    );
};

export default AsideBody;
