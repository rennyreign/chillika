import { Facebook, Instagram } from "lucide-react"

const hoursLines = [
  "TUESDAY – THURSDAY",
  "4 PM – 10 PM",
  "FRIDAY",
  "12 PM – 11 PM",
  "SATURDAY – SUNDAY",
  "9 AM – 11 PM",
  "",
  "CALL FOR BOOKINGS:",
  "0786579869 / 02086375129",
]

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#123D2D",
        paddingTop: "48px",
        paddingBottom: "24px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Primary grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            columnGap: "44px",
            alignItems: "start",
            rowGap: "36px",
          }}
        >
          {/* Brand column */}
          <div>
            <img
              src="/chillika/images/home/brand_logo_primary.webp"
              alt="Chillika logo"
              style={{ width: "150px", objectFit: "contain" }}
            />
            <p
              className="font-sans"
              style={{
                marginTop: "18px",
                maxWidth: "190px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "13px",
                lineHeight: 1.5,
              }}
            >
              Come and experience best of India&rsquo;s street food.
            </p>
            <div
              className="flex items-center"
              style={{ marginTop: "18px", gap: "16px" }}
            >
              <a
                href="#"
                aria-label="Facebook"
                className="text-white transition-colors duration-[180ms] hover:text-[#E8A34A]"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white transition-colors duration-[180ms] hover:text-[#E8A34A]"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="TripAdvisor"
                className="font-sans font-semibold text-white transition-colors duration-[180ms] hover:text-[#E8A34A]"
                style={{ fontSize: "12px" }}
              >
                TripAdvisor
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h3
              className="font-sans font-bold uppercase"
              style={{
                color: "#D89A27",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              OPENING HOURS
            </h3>
            <div style={{ marginTop: "14px" }}>
              {hoursLines.map((line, i) => (
                <p
                  key={i}
                  className="font-sans"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    lineHeight: 1.45,
                    minHeight: line === "" ? "8px" : "auto",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Address column */}
          <div>
            <h3
              className="font-sans font-bold uppercase"
              style={{
                color: "#D89A27",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              ADDRESS
            </h3>
            <p
              className="font-sans"
              style={{
                marginTop: "10px",
                color: "#FFFFFF",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              195 Broadway, Bexleyheath DA6 7ER London
            </p>
            <img
              src="/chillika/images/home/footer_location_map.webp"
              alt="Chillika location map"
              className="object-cover"
              style={{
                marginTop: "14px",
                width: "220px",
                height: "94px",
                borderRadius: "3px",
              }}
            />
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-sans font-bold uppercase"
              style={{
                color: "#D89A27",
                fontSize: "12px",
                letterSpacing: "0.05em",
              }}
            >
              GET IN TOUCH
            </h3>
            <a
              href="mailto:info@chillika.co.uk"
              className="block font-sans transition-colors duration-[180ms] hover:text-[#E8A34A]"
              style={{
                marginTop: "10px",
                color: "#FFFFFF",
                fontSize: "13px",
              }}
            >
              info@chillika.co.uk
            </a>
            <a
              href="#footer"
              className="inline-flex items-center justify-center font-sans font-semibold text-white transition-all duration-[180ms] ease-out hover:-translate-y-[1px] hover:brightness-90"
              style={{
                marginTop: "25px",
                width: "186px",
                height: "50px",
                background: "#D85D18",
                borderRadius: "7px",
                fontSize: "14px",
              }}
            >
              Book a Table
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div
          className="flex flex-col md:flex-row items-center justify-center"
          style={{
            marginTop: "32px",
            paddingTop: "12px",
            gap: "26px",
          }}
        >
          {[
            "© 2025 Chillika. All rights reserved.",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="font-sans transition-colors duration-[180ms] hover:text-white"
              style={{
                color: "rgba(255,255,255,0.70)",
                fontSize: "11px",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
