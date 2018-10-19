import { MessageType } from './message-type.enum';

export interface IMessage {
    title: string;
    message: string;
    type: MessageType;
}
