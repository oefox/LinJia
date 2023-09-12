interface Product {
  id: string;
  supplier: string;
  name: string;
  specs: string;
  price: number;
  banner: string;
}
interface ProductType {
  id: string;
  icon: string;
  name: string;
  TypesIndex: number;
  products: Product[];
}
interface BannerType {
  id: number;
  image: string;
}
interface CartsType {
  TypesIndex: number;
  banner: string;
  checked?: boolean;
  good_id?: string;
  id: string;
  name: string;
  number?: number;
  price: number;
  specs: string;
  subtotal?: number;
  supplier: string;
  username?: string;
}
interface UserType {
  id: number;
  nickName: string;
  email: string;
  password: string;
  telephone: string;
  username: string;
}
interface VideoType {
  comment: string;
  id: number;
  url: string;
}
interface MockDataType {
  default: {
    types: ProductType[];
    banner: BannerType[];
    carts: CartsType[];
    goods: CartsType[];
    user: UserType[];
    video: VideoType[];
  };
}
export default MockDataType;
