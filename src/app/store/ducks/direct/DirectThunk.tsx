import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedCustomAxios } from "customAxios";
import { FAIL_TO_REISSUE_MESSAGE } from "utils/constant";
import { authAction } from "app/store/ducks/auth/authSlice";
export const makeRoom = createAsyncThunk<
    Direct.RoomsProps,
    {
        username: string;
    }
>("chat/rooms", async (payload, ThunkOptions) => {
    const config = {
        params: {
            username: payload.username,
        },
    };
    try {
        const { data } = await authorizedCustomAxios.post(
            `/chat/rooms`,
            null,
            config,
        );
        return data.data;
    } catch (error) {
        error === FAIL_TO_REISSUE_MESSAGE &&
        ThunkOptions.dispatch(authAction.logout());
        throw ThunkOptions.rejectWithValue(error);
    }
});

// 백엔드 API 작동하면 response type 정해줘야함 현재는 any 로 임시로 선언

export const deleteRoom = createAsyncThunk<any, { roomId: number }>(
    "chat/deleteRoom",
    async (payload, ThunkOptions) => {
        const config = {
            params: {
                roomId: payload.roomId,
            },
        };

        try {
            const { data } = await authorizedCustomAxios.delete(
                `/chat/rooms/hide`,
                config,
            );
            return data;
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE &&
            ThunkOptions.dispatch(authAction.logout());
            throw ThunkOptions.rejectWithValue(error);
        }
    },
);


   // 채팅방 클릭시 채팅방조회(채팅방을 클릭하면 unseen count를 감소시키는 API) 호출

export const lookUpChatRoom = createAsyncThunk<any,{roomId:number}>(
    "chat/rooms/lookUp",
    async (payload,ThunkOptions) => {
        try {
            const {data} = await authorizedCustomAxios.delete(`/chat/rooms/${payload.roomId}`);
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE &&
            ThunkOptions.dispatch(authAction.logout());
            throw ThunkOptions.rejectWithValue(error);
        }

    }
)


// 채팅방 목록 페이징 조회 API
// 1. `DM 페이지 입장(새로고침)`
// 2. `DB의 JoinRoom 테이블에 본인이 추가되는 상황`
// - `채팅방 생성`
// - `상대방과 참여한 채팅방이 없는 상황에서, 상대방이 본인에게 메시지 송신`

export const lookUpChatList = createAsyncThunk<any,{page:number}>(
    "chat/rooms/lookUpList",
    async (payload,ThunkOptions) => {
        try {
            const {
                data: { data },
            } = await authorizedCustomAxios.get(`/chat/rooms?page=${payload.page}`);
            return data
        } catch (error) {
            error === FAIL_TO_REISSUE_MESSAGE &&
            ThunkOptions.dispatch(authAction.logout());
            throw ThunkOptions.rejectWithValue(error);
        }

    }
)