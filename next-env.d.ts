/// <reference types="next" />
/// <reference types="next/types/global" />
import * as next from "next"; // d.ts 文件中有import，会默认该文件声明的变量不再是全局的，有过有全局的变量，需要拆分出去，如 type Post 拆分到了 custom.d.ts中

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "next" {
  import { Session } from "next-iron-session";

  interface NextApiRequest {
    session: Session;
  }
}
