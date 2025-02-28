"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
export function ContentClient() {
  const settings = {
    className: "gallery galleryid-0 gallery-columns-3 gallery-size-thumbnail",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="content-client section">
      <div className="wrap">
        <section id="text-12" className="widget widget_text">
          <div className="widget-wrap">
            <div className="widget-title widgettitle">
              Cùng nhau phát triển <span> Đối tác </span>
            </div>
            <div className="textwidget">
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                style={{ transform: "translate(18px, 0px)" }}
                title=""
                data-original-title=""
              >
                <div
                  id="tooltip614826"
                  className="tooltip fade bs-tooltip-bottom"
                  role="tooltip"
                >
                  <div className="arrow" />
                  <div className="tooltip-inner" />
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
              <div id="envidictionaryOff">
                <Slider
                  {...settings}
                  // id="gallery-1"
                >
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/agribank.png">
                        <Image
                          src="/images/uploads/bank/agribank.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/bidv.png">
                        <Image
                          src="/images/uploads/bank/bidv.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/lpbank.png">
                        <Image
                          src="/images/uploads/bank/lpbank.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/momo.png">
                        <Image
                          src="/images/uploads/bank/momo.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/payoo.png">
                        <Image
                          src="/images/uploads/bank/payoo.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/sacombank.png">
                        <Image
                          src="/images/uploads/bank/sacombank.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/vietcombank.png">
                        <Image
                          src="/images/uploads/bank/vietcombank.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/vietinbank.png">
                        <Image
                          src="/images/uploads/bank/vietinbank.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/viettel-money.png">
                        <Image
                          src="/images/uploads/bank/viettel-money.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/vnpay.png">
                        <Image
                          src="/images/uploads/bank/vnpay.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/vnpost.png">
                        <Image
                          src="/images/uploads/bank/vnpost.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <Link href="/images/uploads/bank/vnpt-pay-1.png">
                        <Image
                          src="/images/uploads/bank/vnpt-pay-1.png"
                          className="attachment-thumbnail size-thumbnail"
                          alt=""
                          width={109}
                          height={50}
                          decoding="async"
                          unoptimized={true}
                          priority={true}
                        />
                      </Link>
                    </div>
                  </figure>
                </Slider>
              </div>
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                dir="ltr"
                style={{ transform: "translate(139px, 0px)" }}
                title=""
                data-original-title='[id bộ sưu tập = "1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1113"]'
                aria-describedby="tooltip614826"
              />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                dir="ltr"
                style={{ transform: "translate(100px, 9px)" }}
                title=""
                data-original-title='[id bộ sưu tập = "1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165"]'
              />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                style={{ transform: "translate(319px, 66px)" }}
                title=""
                data-original-title=""
              />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                dir="ltr"
                style={{ transform: "translate(268px, 138px)" }}
                title=""
                data-original-title='[id bộ sưu tập = "1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1202"]'
              />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                style={{ transform: "translate(90px, 59px)" }}
                title=""
                data-original-title=""
              />
              <div
                id="mttContainer"
                className="bootstrapiso notranslate"
                title=""
                data-original-title=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
