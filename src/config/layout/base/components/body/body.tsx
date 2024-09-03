import { BodyProps } from "./type"

const Body = ({ children }: BodyProps) => {
  return (
    <main className="flex-1 flex items-start justify-start p-4 w-full h-full">
      <div className="bg-white w-full h-full">
        {children}
      </div>
    </main>
  )
}

export default Body