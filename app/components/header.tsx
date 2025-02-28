import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header
      className="site-header"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="wrap">
        <div className="title-area">
          <h1 className="site-title" itemProp="headline">
            <Link href="/" title="Powaco">
              <Image
                src="/logo.svg"
                alt="Powaco"
                title="Powaco"
                width={92}
                height={110}
              />
            </Link>
          </h1>
          <p className="site-description" itemProp="description">
            Công ty cổ phần điện nước An Giang
          </p>
        </div>
        <div className="widget-area header-widget-area">
          <section id="search-2" className="widget widget_search">
            <div className="widget-wrap">
              <form
                className="search-form"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/SearchAction"
                method="get"
                action="/"
                role="search"
              >
                <input
                  className="search-form-input"
                  type="search"
                  itemProp="query-input"
                  name="s"
                  id="searchform-67a02a83bd2772.91998193"
                  placeholder="Tìm kiếm."
                />
                <input
                  className="search-form-submit"
                  type="submit"
                  defaultValue="Tìm"
                />
                <meta
                  itemProp="target"
                  content="https://diennuocag.com.vn/?s={s}"
                />
              </form>
            </div>
          </section>
          <section id="media_image-11" className="widget widget_media_image">
            <div className="widget-wrap">
              <Image
                width={839}
                height={80}
                src="/images/title1.svg"
                className="image wp-image-1337 attachment-full size-full"
                alt=""
                decoding="async"
                fetchPriority="high"
                unoptimized={true}
                priority={true}
              />
            </div>
          </section>
          <section id="media_image-12" className="widget widget_media_image">
            <div className="widget-wrap">
              <Image
                width={264}
                height={150}
                src="/images/company.png"
                className="image wp-image-71 attachment-full size-full"
                alt=""
                decoding="async"
                unoptimized={true}
                priority={true}
              />
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}
