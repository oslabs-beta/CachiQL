export interface MemberType {
  name: string;
  image: string;
  imageLarge: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  github: string;
  linkedIn: string;
}

export interface QueryResult {
  label: string;
  queryResult: any;
  cachedRunTime: number;
  uncachedRunTime: number;
  added: boolean;
  cleared: boolean;
}
