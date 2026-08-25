import { Leaf, ShoppingBasket, Heart, Star } from "lucide-react"

const items = [
  {
    icon: Leaf,
    title: "Authentic Flavours",
    body: "Traditional recipes from Odisha",
  },
  {
    icon: ShoppingBasket,
    title: "Fresh Ingredients",
    body: "Locally sourced, freshly prepared",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    body: "Made to feel like home",
  },
  {
    icon: Star,
    title: "Loved by All",
    body: "Great food. Great memories.",
  },
]

export default function BenefitStrip() {
  return (
    <section
      className="relative z-20"
      style={{ marginTop: "-62px" }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            background: "#123D2D",
            borderRadius: "14px",
            minHeight: "126px",
            padding: "26px 30px",
            boxShadow: "0 14px 34px rgba(8,38,27,0.20)",
          }}
        >
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "54px 1fr",
                  gap: "14px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  borderRight:
                    i < items.length - 1
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "none",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid #E8BC6C",
                    color: "#E8BC6C",
                  }}
                >
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <div
                    className="font-sans font-semibold"
                    style={{ color: "#FFFFFF", fontSize: "16px" }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="font-sans"
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "13px",
                      marginTop: "2px",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
