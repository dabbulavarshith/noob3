// Static-safe mock: no actual WebSocket on GitHub Pages
export interface WebSocketMessage { type: string; data: any }

export function useWebSocket(_url: string) {
  return {
    lastMessage: null as WebSocketMessage | null,
    connectionStatus: 'Closed' as 'Connecting' | 'Open' | 'Closing' | 'Closed',
    sendMessage: (_: WebSocketMessage) => {},
  };
}
