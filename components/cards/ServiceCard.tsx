import { PartyPopper, Utensils } from "lucide-react"

const iconMap: Record<string, typeof PartyPopper> = {
  balloons: PartyPopper,
  serving_cloche: Utensils,
}

type ServiceCardProps = {
  iconSemantic: string
  title: string
  body: string
}

export default function ServiceCard({
  iconSemantic,
  title,
  body,
}: ServiceCardProps) {
  const Icon = iconMap[iconSemantic] || PartyPopper

  return (
    <article
      className="grid items-center"
      style={{
        minHeight: "170px",
        background: "#FFFFFF",
        border: "1px solid #E4C7AC",
        borderRadius: "14px",
        gridTemplateColumns: "128px 1fr",
        padding: "24px 28px",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{ color: "#426B58" }}
      >
        <Icon size={92} strokeWidth={1.7} />
      </div>
      <div>
        <h3
          className="font-serif font-semibold"
          style={{ color: "#25241F", fontSize: "22px" }}
        >
          {title}
        </h3>
        <p
          className="font-sans"
          style={{
            fontSize: "13px",
            lineHeight: 1.55,
            color: "#5E5A51",
            marginTop: "8px",
          }}
        >
          {body}
        </p>
      </div>
    </article>
  )
}
