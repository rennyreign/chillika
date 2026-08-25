import SectionEyebrow from "../ui/SectionEyebrow"
import OfferCard from "../cards/OfferCard"

const offers = [
  {
    src: "/images/home/offers_card_01_collection_spread.webp",
    alt: "Collection spread offer",
    iconSemantic: "percentage",
    title: "10% Discount on Collections",
    body: "* Not in conjunction with any other offers excluding drinks.",
    button: "Order Now",
  },
  {
    src: "/images/home/offers_card_02_happy_hours.webp",
    alt: "Happy hours offer",
    iconSemantic: "clock",
    title: "The Happies Hours",
    body: "Join us Tuesday - Thursday from 4 PM to 7 PM where we boast half off on freshly executed cocktails",
    button: "Order Now",
  },
  {
    src: "/images/home/offers_card_03_delivery_table.webp",
    alt: "Free home delivery offer",
    iconSemantic: "delivery_truck",
    title: "Free Home Delivery on orders over £25",
    body: "Order junk food and enjoy",
    button: "Order Now",
  },
]

export default function Offers() {
  return (
    <section
      id="offers"
      style={{
        background: "#FBF9F4",
        paddingTop: "76px",
        paddingBottom: "84px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1120px" }}>
        {/* Header */}
        <div className="text-center">
          <SectionEyebrow text="SPECIAL OFFERS" color="#D85D18" />
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(31px, 3.5vw, 37px)",
              color: "#123D2D",
              marginTop: "7px",
            }}
          >
            The best offers for our clients
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ marginTop: "34px", gap: "24px" }}
        >
          {offers.map((offer, i) => (
            <OfferCard key={i} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}
