import Link from "next/link"


const NotFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#0c153b]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#76AEEB] text-white px-2 text-sm rounded rotate-12 absolute">
		Not Data Found
	</div>
	<button className="mt-5">
      <Link href="/"
        className="relative inline-block text-sm font-medium focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative text-white block px-8 py-3 bg-[#5580ae] border border-current">
          Go Home
        </span>
      </Link>
    </button>
</main>
  )
}

export default NotFoundPage
