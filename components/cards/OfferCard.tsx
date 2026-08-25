import { Percent, Clock, Truck } from "lucide-react"

const iconMap: Record<string, typeof Percent> = {
  percentage: Percent,
  clock: Clock,
  delivery_truck: Truck,
}

type OfferCardProps = {
  src: string
  alt: string
  iconSemantic: string
  title: string
  body: string
  button: string
}

export default function OfferCard({
  src,
  alt,
  iconSemantic,
  title,
  body,
  button,
}: OfferCardProps) {
  const Icon = iconMap[iconSemantic] || Percent

  return (
    <article
      className="offer-card relative overflow-hidden transition-all duration-[180ms] ease-out hover:-translate-y-[3px]"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E9E2D8",
        borderRadius: "14px",
        minHeight: "335px",
        boxShadow: "0 10px 28px rgba(45,32,20,0.08)",
      }}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={{ height: "124px" }}
      />

      {/* Icon badge */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: "105px",
          left: "18px",
          width: "48px",
          height: "48px",
          background: "#FFFFFF",
          border: "2px solid #D85D18",
          color: "#D85D18",
          borderRadius: "50%",
        }}
      >
        <Icon size={22} strokeWidth={1.7} />
      </div>

      {/* Body */}
      <div style={{ padding: "30px 20px 20px 20px" }}>
        <h3
          className="font-serif font-semibold"
          style={{ color: "#25241F", fontSize: "21px", lineHeight: 1.15 }}
        >
          {title}
        </h3>
        <p
          className="font-sans"
          style={{
            marginTop: "10px",
            fontSize: "13px",
            lineHeight: 1.55,
            color: "#5E5A51",
            minHeight: "58px",
          }}
        >
          {body}
        </p>
        <a
          href="#offers"
          className="inline-flex items-center justify-center font-sans font-semibold text-white transition-all duration-[180ms] ease-out hover:brightness-90"
          style={{
            marginTop: "16px",
            height: "34px",
            paddingLeft: "16px",
            paddingRight: "16px",
            background: "#D85D18",
            borderRadius: "999px",
            fontSize: "12px",
          }}
        >
          {button}
        </a>
      </div>
    </article>
  )
}
