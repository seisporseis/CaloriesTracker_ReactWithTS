
import Form from "./components/Form"

export default function App() {


  return (
    <>
      <header className="p-6 bg-amber-300">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-xl font-bold">
            Calories Tracker
          </h1>
          <p className="text-center text-xs font-thin">With ReactJS and Typescript</p>
        </div>
      </header>

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  )
}
