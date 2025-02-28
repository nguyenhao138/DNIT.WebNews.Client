import Image from "next/image";

export function ContentBanner() {
  return (
    <div className="content-banner section">
      <div className="wrap">
        <section id="media_image-8" className="widget widget_media_image">
          <div className="widget-wrap">
            <a href="http://diennuochd.com.vn/">
              <Image
                src="/images/uploads/hdthd.svg"
                className="image wp-image-56 attachment-full size-full"
                width={295}
                height={99}
                alt=""
                decoding="async"
                unoptimized={true}
                priority={true}
              />
            </a>
          </div>
        </section>
        <section id="media_image-10" className="widget widget_media_image">
          <div className="widget-wrap">
            <a href="/view/khach-hang-can-biet/thong-tin-can-biet/thu-tuc-hanh-chinh-ve-nuoc/">
              <Image
                width={298}
                height={100}
                src="/images/uploads/thu-tuc-hanh-chinh-lap-dong-ho-nuoc-1.png"
                className="image wp-image-647 attachment-full size-full"
                alt=""
                decoding="async"
                unoptimized={true}
                priority={true}
              />
            </a>
          </div>
        </section>
        <section id="media_image-9" className="widget widget_media_image">
          <div className="widget-wrap">
            <a href="/view/dich-vu-truc-tuyen/thanh-toan-truc-tuyen/cac-hinh-thuc-thanh-toan.html">
              <Image
                src="/images/uploads/ttqnh.svg"
                className="image wp-image-58 attachment-full size-full"
                alt=""
                width={295}
                height={99}
                decoding="async"
                unoptimized={true}
                priority={true}
              />
            </a>
          </div>
        </section>
        <section id="media_image-7" className="widget widget_media_image">
          <div className="widget-wrap">
            <a href="/view/khach-hang-can-biet/thong-tin-can-biet/thu-tuc-hanh-chinh-ve-dien/ho-so-bo-thu-tuc-hanh-chinh-ve-cung-cap-dien.html">
              <Image
                width={298}
                height={100}
                src="/images/uploads/thu-tuc-dang-ky-lap-dong-ho-dien-moi.png"
                className="image wp-image-631 attachment-full size-full"
                alt=""
                decoding="async"
                unoptimized={true}
                priority={true}
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
