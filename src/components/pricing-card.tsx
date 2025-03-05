import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({ title, price, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${popular ? "ring-2 ring-blue-500 transform scale-105" : ""}`}
    >
      {popular && <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">MOST POPULAR</div>}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full ${popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>{buttonText}</Button>
      </div>
    </div>
  )
}

