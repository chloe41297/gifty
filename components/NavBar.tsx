import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineArrowLeft,
  AiOutlineGift,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

interface Props {
  backBtn: boolean;
  header: string;
  giftBtn: boolean;
  cartBtn: boolean;
  accountBtn: boolean;
}

const NavBar = ({ backBtn, header, giftBtn, cartBtn, accountBtn }: Props) => {
  const router = useRouter();
  return (
    <nav>
      <div className="first-col">
        {backBtn ? (
          <AiOutlineArrowLeft
            size={20}
            onClick={() => router.back()}
          ></AiOutlineArrowLeft>
        ) : (
          ""
        )}
      </div>
      <div className="second-col">{header ? header : ""}</div>
      <div className="third-col">
        {giftBtn ? (
          <Link href="/gift">
            <a>
              <AiOutlineGift></AiOutlineGift>
            </a>
          </Link>
        ) : (
          ""
        )}
        {cartBtn ? (
          <Link href="/cart">
            <a>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </a>
          </Link>
        ) : (
          ""
        )}
        {accountBtn ? (
          <Link href="/account">
            <a>
              <MdOutlineAccountCircle></MdOutlineAccountCircle>
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>

      <style jsx>{`
        nav {
          margin: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-item: center;
        }
        .third-col {
          font-size: 20px;
        }
        .third-col > a {
          padding: 0px 5px;
        }
      `}</style>
    </nav>
  );
};
export default NavBar;
