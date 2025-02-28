import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="site-footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="wrap">
        <section id="text-3" className="widget widget_text">
          <div className="widget-wrap">
            <div className="widget-title widgettitle">
              Công ty cổ phần Điện Nước An Giang
            </div>
            <div className="textwidget">
              <ol>
                <li>
                  <strong> Địa chỉ: </strong> 821 Trần Hưng Đạo, P. Bình Khánh,
                  TP Long Xuyên, Tỉnh An Giang
                </li>
                <li>
                  <strong> Email: </strong>
                  <a
                    className="text-is-email"
                    href="mailto:ctycpdn.ag@gmail.com"
                    target="_blank"
                    rel="noopener"
                    data-z-element-type="email"
                  >
                    ctycpdn.ag@gmail.com
                  </a>
                  -
                  <a
                    className="text-is-email"
                    href="mailto:cskhdnag@gmail.com"
                    target="_blank"
                    rel="noopener"
                    data-z-element-type="email"
                  >
                    cskhdnag@gmail.com
                  </a>
                </li>
                <li>
                  <strong> Đường dây nóng: </strong> 1900 9090
                </li>
                <li>
                  <strong> Chăm sóc khách hàng: </strong> 02963 603 382
                </li>
              </ol>
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                dir="ltr"
                style={{ transform: "translate(291px, 84px)" }}
                title=""
                data-original-title="Email: cskhdnag@gmail.com"
              >
                <div
                  id="tooltip244780"
                  className="tooltip fade bs-tooltip-top"
                  role="tooltip"
                >
                  <div className="arrow" />
                  <div className="tooltip-inner">
                    Email: ctycpdn.ag@gmail.com – cskhdnag@gmail.com
                  </div>
                </div>
              </div>
              <div id="envidictionary">
                <div className="o-search-mobile">
                  <Image
                    src="/images/tai-xuong.png"
                    alt="ENVI"
                    width={27}
                    height={27}
                    decoding="async"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
                <div className="o-popup-tag o-bg-white o-border o-rounded o-shadow">
                  <div>
                    <p>&nbsp;</p>
                    <ul className="o-nav o-nav-tabs o-pop-nav" role="tablist">
                      <li className="o-nav-item" role="presentation">
                        <div
                          className="o-nav-link o-active"
                          data-bs-toggle="tab"
                          aria-selected="true"
                        >
                          Tra cứu
                        </div>
                      </li>
                      <li className="o-nav-item" role="presentation">
                        <div
                          className="o-nav-link"
                          data-bs-toggle="tab"
                          aria-selected="false"
                        >
                          Dịch
                        </div>
                      </li>
                    </ul>
                    <div className="o-selected-result o-pt-1">
                      <div>Đang tìm kiếm …</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="envidictionaryOff" />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                dir="ltr"
                style={{ transform: "translate(125px, 192px)" }}
                title=""
                data-original-title="Email: ctycpdn.ag@gmail.com - cskhdnag@gmail.com"
                aria-describedby="tooltip244780"
              />
            </div>
          </div>
        </section>
        <section id="nav_menu-2" className="widget widget_nav_menu">
          <div className="widget-wrap">
            <div className="widget-title widgettitle">Menu</div>
            <div className="menu-footer-menu-container">
              <ul id="menu-footer-menu" className="menu">
                <li
                  id="menu-item-60"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-60"
                >
                  <Link href='/index.html"' aria-current="page" itemProp="url">
                    Trang chủ
                  </Link>
                </li>
                <li
                  id="menu-item-63"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-63"
                >
                  <Link
                    href="/view/khach-hang-can-biet/index.html"
                    itemProp="url"
                  >
                    Hỗ trợ khách hàng
                  </Link>
                </li>
                <li
                  id="menu-item-61"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"
                >
                  <Link href="/view/gioi-thieu/index.html" itemProp="url">
                    Giới thiệu
                  </Link>
                </li>
                <li
                  id="menu-item-66"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66"
                >
                  <Link
                    href="/view/dich-vu-truc-tuyen/index.html"
                    itemProp="url"
                  >
                    Dịch vụ
                  </Link>
                </li>
                <li
                  id="menu-item-65"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-65"
                >
                  <Link href="/view/tin-tuc-su-kien/index.html" itemProp="url">
                    Tin tức
                  </Link>
                </li>
                <li
                  id="menu-item-68"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-68"
                >
                  <Link
                    href="/view/dich-vu-truc-tuyen/thanh-toan-truc-tuyen/index.html"
                    itemProp="url"
                  >
                    Thanh toán
                  </Link>
                </li>
                <li
                  id="menu-item-62"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                >
                  <Link href="/view/lien-he.html" itemProp="url">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="content-after-footer section">
        <div className="wrap">
          <p>
            ©2024 <strong> diennuocag.com.vn </strong> . All Rights reserved
          </p>
        </div>
      </div>
      <span id="backtotop" title="Lên đầu trang">
        ↑
      </span>
    </footer>
  );
}
