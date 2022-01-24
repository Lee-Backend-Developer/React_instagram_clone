import ChatList from "components/Direct/Aside/ChatList";
// 이런 식으로 type을 가져와서 제가 필요한 모듈을 가져와요
import styled from "styled-components";

// 그 다음 그 모듈 안에서 제가 export 한 타입을 가져와서 사용하는 방식입니다.

export const dummyChatList: Array<Direct.ChatItem> = [
    {
        id: 0,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlrma1",
        "memberName": "이지금",
        lastChatDate: "2021.11.22 21:00:00",
        lastMessage: "모행",
        isImLast: true,
        isRead :true
    },
    {
        id: 1,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwl2rma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 ",
        isImLast: false,
        isRead :false

    },{
        id: 2,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwl3rma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 상대가 보낸 메세지",
        isImLast: false,
        isRead :false

    },{
        id: 3,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr4ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 ",
        isImLast: false,
        isRead :true

    },{
        id: 4,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr5ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 상대가 보낸 메세지",
        isImLast: false,
        isRead :false

    },{
        id: 5,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlrm6a",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마",
        isImLast: false,
        isRead :true

    },{
        id: 6,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlw7lrma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 상대가 보낸 막으로 상대가 보낸 메세지",
        isImLast: false,
        isRead :true

    },{
        id: 7,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr8ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 상대가 보낸 막으로 상대가 보낸 메세지",
        isImLast: false,
        isRead :false

    },{
        id: 8,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwl9rma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지막으로 상대가 보낸 막으로 상대가 보낸 메세지",
        isImLast: false,
        isRead :true

    },{
        id: 9,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlw33lrma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "대가지",
        isImLast: false,
        isRead :true

    },{

        id: 10,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwl6rma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마세지",
        isImLast: false,
        isRead :true

    },{
        id: 11,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr7ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마낸 메세지",
        isImLast: false,
        isRead :true

    },{
        id: 12,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr6ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: " 메세지",
        isImLast: false,
        isRead :true

    },{
        id: 13,
        avatarImg:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150",
        memberUsername: "dlwlr2ma",
        "memberName": "이지금",
        lastChatDate: "2021.11.10 21:00:00",
        lastMessage: "마지로지",
        isImLast: false,
        isRead :true

    },
];


const AsideBodyContainer = styled.section`
    height: calc(100% - 60px);
    overflow-y: auto;
`

const AsideBody = () => {



    return (
        <AsideBodyContainer>
            <ChatList chatList={dummyChatList} />
        </AsideBodyContainer>
    );
};

export default AsideBody;
