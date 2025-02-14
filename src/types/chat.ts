export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'agent';
    timestamp: Date;
    type?: 'text' | 'image';
    attachmentUrl?: string;
  }
  
  export interface AgentInfo {
    name: string;
    status: string;
    avatar: string;
  }