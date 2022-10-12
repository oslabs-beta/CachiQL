export interface MemberType {
  name: string;
  image: string;
}

export interface QueryResult {
  label: string;
  queryResult: any;
  cachedRunTime: number;
  uncachedRunTime: number;
  added: boolean;
  cleared: boolean;
}