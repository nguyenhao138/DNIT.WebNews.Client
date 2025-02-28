import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="nav-primary"
      aria-label="Main"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="wrap">
        <ul id="menu-main-menu" className="menu genesis-nav-menu menu-primary">
          <li
            id="menu-item-19"
            className="trangchu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
          >
            <Link href="/" aria-current="page" itemProp="url">
              <span itemProp="name"> Trang chủ </span>
            </Link>
          </li>
          <li
            id="menu-item-20"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20"
          >
            <Link href="/view/gioi-thieu/index.html" itemProp="url">
              <span itemProp="name"> Giới thiệu </span>
            </Link>
            <ul className="sub-menu">
              <li
                id="menu-item-22"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"
              >
                <Link
                  href="/view/gioi-thieu/co-cau-to-chuc.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Cơ cấu tổ chức </span>
                </Link>
              </li>
              <li
                id="menu-item-21"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"
              >
                <Link
                  href="/view/gioi-thieu/chuc-nang-va-nhiem-vu.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Chức năng và nhiệm vụ </span>
                </Link>
              </li>
              <li
                id="menu-item-24"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24"
              >
                <Link href="/view/gioi-thieu/thanh-tich.html" itemProp="url">
                  <span itemProp="name"> Thành tích </span>
                </Link>
              </li>
              <li
                id="menu-item-23"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"
              >
                <Link
                  href="/view/gioi-thieu/dinh-huong-phat-trien.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Định hướng phát triển </span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-30"
            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-30"
          >
            <Link href="/view/tin-tuc-su-kien/index.html" itemProp="url">
              <span itemProp="name"> Tin tức – Sự kiện </span>
            </Link>
            <ul className="sub-menu">
              <li
                id="menu-item-31"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31"
              >
                <Link
                  href="/view/tin-tuc-su-kien/hoat-dong-cua-cong-ty/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Hoạt động của Công ty </span>
                </Link>
              </li>
              <li
                id="menu-item-32"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-32"
              >
                <Link
                  href="/view/tin-tuc-su-kien/van-ban-quan-ly-dieu-hanh/index.html"
                  itemProp="url"
                >
                  <span itemProp="name">Văn bản – Quản lý – Điều hành</span>
                </Link>
              </li>
              <li
                id="menu-item-727"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-727"
              >
                <Link
                  href="/view/tin-tuc-su-kien/diem-tin-nganh-nuoc/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Điểm tin ngành nước </span>
                </Link>
              </li>
              <li
                id="menu-item-728"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-728"
              >
                <Link
                  href="/view/tin-tuc-su-kien/hoi-thao-hoi-thao/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Hội thảo – Hội thao </span>
                </Link>
              </li>
              <li
                id="menu-item-729"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-729"
              >
                <Link
                  href="/view/tin-tuc-su-kien/tin-dia-phuong/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Tin địa phương </span>
                </Link>
              </li>
              <li
                id="menu-item-730"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-730"
              >
                <Link
                  href="/view/tin-tuc-su-kien/tin-khoa-hoc-cong-nghe/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Tin khoa học – công nghệ </span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-29"
            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-29"
          >
            <Link href="/view/san-pham-dich-vu/index.html" itemProp="url">
              <span itemProp="name"> Sản phẩm – Dịch vụ </span>
            </Link>
            <ul className="sub-menu">
              <li
                id="menu-item-511"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-511"
              >
                <Link
                  href="/view/san-pham-dich-vu/nuoc-sach.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Nước sạch </span>
                </Link>
              </li>
              <li
                id="menu-item-505"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-505"
              >
                <Link
                  href="/view/san-pham-dich-vu/dien-sinh-hoat.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Điện sinh hoạt </span>
                </Link>
              </li>
              <li
                id="menu-item-503"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-503"
              >
                <Link
                  href="/view/san-pham-dich-vu/dien-nang-luong-mat-troi/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Điện năng lượng mặt trời </span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-27"
            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-27"
          >
            <Link href="/view/khach-hang-can-biet/index.html" itemProp="url">
              <span itemProp="name"> Khách hàng cần biết </span>
            </Link>
            <ul className="sub-menu">
              <li
                id="menu-item-499"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-499"
              >
                <Link
                  href="/view/khach-hang-can-biet/ket-qua-kiem-nghiem.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Kết quả kiểm nghiệm </span>
                </Link>
              </li>
              <li
                id="menu-item-494"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-494"
              >
                <Link
                  href="/view/khach-hang-can-biet/thong-tin-can-biet.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Thông tin cần biết </span>
                </Link>
                <ul className="sub-menu">
                  <li
                    id="menu-item-548"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-548"
                  >
                    <Link
                      href="/view/khach-hang-can-biet/thong-tin-can-biet/thong-bao-cup-dien.html"
                      itemProp="url"
                    >
                      <span itemProp="name"> Thông báo cúp điện </span>
                    </Link>
                  </li>
                  <li
                    id="menu-item-549"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-549"
                  >
                    <Link
                      href="/view/khach-hang-can-biet/thong-tin-can-biet/thong-bao-cup-nuoc.html"
                      itemProp="url"
                    >
                      <span itemProp="name"> Thông báo cúp nước </span>
                    </Link>
                  </li>
                  <li
                    id="menu-item-968"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-968"
                  >
                    <Link
                      href="/view/khach-hang-can-biet/thong-tin-can-biet/thong-tin-tuyen-truyen/index.html"
                      itemProp="url"
                    >
                      <span itemProp="name"> Thông tin tuyên truyền </span>
                    </Link>
                  </li>
                  <li
                    id="menu-item-518"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-518"
                  >
                    <Link
                      href="/view/khach-hang-can-biet/thong-tin-can-biet/thu-tuc-hanh-chinh-ve-dien.html"
                      itemProp="url"
                    >
                      <span itemProp="name"> Thủ tục hành chính về điện </span>
                    </Link>
                  </li>
                  <li
                    id="menu-item-519"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-519"
                  >
                    <Link
                      href="/view/khach-hang-can-biet/thong-tin-can-biet/thu-tuc-hanh-chinh-ve-nuoc/index.html"
                      itemProp="url"
                    >
                      <span itemProp="name"> Thủ tục hành chính về nước </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-490"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-490"
              >
                <Link
                  href="/view/khach-hang-can-biet/hoa-don-dien-tu.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Hóa đơn điện tử </span>
                </Link>
              </li>
              <li
                id="menu-item-463"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-463"
              >
                <Link
                  href="/view/khach-hang-can-biet/gia-dich-vu-thoat-nuoc.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Giá dịch vụ thoát nước </span>
                </Link>
              </li>
              <li
                id="menu-item-462"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-462"
              >
                <Link
                  href="/view/khach-hang-can-biet/bang-gia-nuoc.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Bảng giá nước </span>
                </Link>
              </li>
              <li
                id="menu-item-461"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-461"
              >
                <Link
                  href="/view/khach-hang-can-biet/bang-gia-dien.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Bảng giá điện </span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-135"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"
          >
            <Link
              href="/view/gioi-thieu/quan-he-co-dong/index.html"
              itemProp="url"
            >
              <span itemProp="name"> Quan hệ cổ đông </span>
            </Link>
          </li>
          <li
            id="menu-item-26"
            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-26"
          >
            <Link href="/view/dich-vu-truc-tuyen/index.html" itemProp="url">
              <span itemProp="name"> Dịch vụ trực tuyến </span>
            </Link>
            <ul className="sub-menu">
              <li
                id="menu-item-563"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-563"
              >
                <Link
                  href="/view/dich-vu-truc-tuyen/thanh-toan-truc-tuyen/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Thanh toán trực tuyến </span>
                </Link>
              </li>
              <li
                id="menu-item-562"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-562"
              >
                <Link
                  href="/view/dich-vu-truc-tuyen/dang-ky-truc-tuyen/index.html"
                  itemProp="url"
                >
                  <span itemProp="name"> Đăng ký trực tuyến </span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-25"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
          >
            <Link href="/view/lien-he.html" itemProp="url">
              <span itemProp="name"> Liên hệ </span>
            </Link>
          </li>
          <li
            id="menu-item-33"
            className="timkiem menu-item menu-item-type-custom menu-item-object-custom menu-item-33"
          >
            <a itemProp="url">
              <span itemProp="name"> Tìm kiếm </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
