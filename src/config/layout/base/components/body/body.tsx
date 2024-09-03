import { BodyProps } from "./type"

const Body = ({ children }: BodyProps) => {
  return (
    <main className="flex-1 flex items-start justify-start p-4 w-full h-full">
      <div className="bg-white w-full h-full">
        <h2 className="text-xl font-semibold mb-4">Route Name</h2>

        {children}
      </div>
    </main>
  )
}

export default Body