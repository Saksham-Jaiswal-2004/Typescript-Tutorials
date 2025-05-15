type User1 = {
  id: number;
  name: string;
};

type OptionalUser = {
  [K in keyof User1]?: User1[K];
};

type ReadonlyUser = {
  readonly [K in keyof User1]: User1[K];
};
