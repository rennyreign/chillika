import SectionEyebrow from "../ui/SectionEyebrow"
import MenuCard from "../cards/MenuCard"

const menuItems = [
  {
    id: "menu_01",
    src: "/chillika/images/home/menu_card_01_dahi_bara_aloo_dum.webp",
    alt: "Dahi Bara Aloo Dum dish",
    title: "Dahi Bara Aloo Dum",
  },
  {
    id: "menu_02",
    src: "/chillika/images/home/menu_card_02_soya_chaap_tikka.webp",
    alt: "Soya Chaap Tikka dish",
    title: "Soya Chaap Tikka",
  },
  {
    id: "menu_03",
    src: "/chillika/images/home/menu_card_03_goat_curry.webp",
    alt: "Goat Curry dish",
    title: "Goat Curry",
  },
  {
    id: "menu_04",
    src: "/chillika/images/home/menu_card_04_biryani.webp",
    alt: "Biryani dish",
    title: "Biryani",
  },
]

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative"
      style={{
        background: "#123D2D",
        paddingTop: "76px",
        paddingBottom: "78px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      {/* Subtle ornamental pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.035 }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="text-center">
          <SectionEyebrow text="EXPLORE OUR MENU" color="#D89A27" />
          <h2
            className="font-serif font-semibold mx-auto"
            style={{
              fontSize: "clamp(34px, 3.5vw, 39px)",
              lineHeight: 1.0,
              color: "#FFFFFF",
              maxWidth: "620px",
              marginTop: "8px",
            }}
          >
            More great meals await you inside the restaurant
          </h2>
          {/* Ornament: gold rule with center diamond */}
          <div
            className="mx-auto flex items-center justify-center"
            style={{ marginTop: "16px", width: "72px" }}
          >
            <div
              style={{
                height: "1px",
                background: "#D89A27",
                flex: 1,
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#D89A27",
                transform: "rotate(45deg)",
                margin: "0 4px",
              }}
            />
            <div
              style={{
                height: "1px",
                background: "#D89A27",
                flex: 1,
              }}
            />
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ marginTop: "38px", gap: "14px" }}
        >
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={{ marginTop: "32px" }}>
          <a
            href="#menu"
            className="inline-flex items-center justify-center font-sans font-semibold transition-all duration-[180ms] ease-out hover:-translate-y-[1px] hover:brightness-95"
            style={{
              height: "42px",
              paddingLeft: "31px",
              paddingRight: "31px",
              background: "#FFFFFF",
              color: "#253A30",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
