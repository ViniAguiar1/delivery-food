export interface User {
    name: string;
    email: string;
    avatar?: string;
  }
  
  export interface QuickAction {
    icon: string;
    title: string;
    count: string;
  }
  
  export interface ProfileOptionType {
    icon: React.ReactNode;
    title: string;
    badge?: boolean;
    badgeCount?: number;
    color?: string;
  }