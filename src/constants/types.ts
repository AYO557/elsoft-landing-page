interface Path {
  path: string;
  pathName: string;
  icon?: boolean;
}

interface HomeDetailsProp {
  Heading:string
  body:string
}

interface ContactProp{
  img:string
  details:string
  type:string
}

export type { Path,HomeDetailsProp,ContactProp };
