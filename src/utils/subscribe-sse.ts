import { eventChannel, END } from 'redux-saga';

export function subscribeSSE(eventSource: EventSource) {
    return eventChannel(emitter => {
        eventSource.onmessage = (msg) => {
            emitter(msg);
        };
        eventSource.onerror = () => {
            emitter(END);
        };

        return () => {
            eventSource.close();
        };
    });
}
