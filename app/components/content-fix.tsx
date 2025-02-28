import Image from "next/image";
import Link from "next/link";

export function ContentFix() {
  return (
    <div className="content-fix">
      <section id="text-5" className="widget widget_text">
        <div className="widget-wrap">
          <div className="textwidget">
            <ul>
              <li>
                <Link href="/view/dich-vu-truc-tuyen/thanh-toan-truc-tuyen/index.html">
                  Thanh toán trực tuyến
                </Link>
              </li>
              <li>
                <Link href="http://diennuochd.com.vn/"> Hoá đơn điện tử </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1tlXaitfzUkWHh8X2Vmq_rV1jI66A73QK/view?usp=drive_link">
                  Chat Zalo
                </Link>
              </li>
            </ul>
            <div
              id="mttContainer"
              className="bootstrapiso notranslate"
              style={{ transform: "translate(143px, 196px)" }}
              title=""
              data-original-title=""
            />
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
              style={{ transform: "translate(146px, 42px)" }}
              title=""
              data-original-title=""
            />
            <div
              id="mttContainer"
              className="bootstrapiso notranslate"
              style={{ transform: "translate(144px, 184px)" }}
              title=""
              data-original-title=""
            />
            <div
              id="mttContainer"
              className="bootstrapiso notranslate"
              style={{ transform: "translate(299px, 179px)" }}
              title=""
              data-original-title=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
