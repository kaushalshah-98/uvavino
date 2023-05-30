export interface Robot {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
