import type { Food } from "../food/Food"

type Props = {
    meals: Food[]
    onLoadMore: () => void
  }


export default function ButtonMore({onLoadMore }: Props) {
  return (
      <div className="flex justify-center mt-6">
          <button 
            className= "bg-blue-500 hover:bg-blue-600 text-white w-40 h-10 px-6 py-2 rounded-lg shadow"
            onClick={onLoadMore}
          >
              MORE
          </button>
      </div>
  )
}