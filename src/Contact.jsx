import { ToastContainer, toast } from 'react-toastify';
export default function ContactSection() {
 const notify = () => toast.success('Your messege received succesfully', {
position: "top-center",
autoClose: 10000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});

  return (
    <section id='contact' className="py-12 md:py-12 lg:py-12 bg-gradient-to-br from-gray-700 via-gray-950 to-black text-gray-100 flex flex-col justify-center items-center">
      <div className="container px-4 md:px-6 md:pb-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-gray-300 md:text-xl">I’m a passionate learner looking to grow — open to conversations, feedback, or small collaborations.</p>
        </div>
        <div className="max-w-md mx-auto mt-8 space-y-4">
          <form className="grid gap-4">
            <div className="grid gap-2 hover:animate-pulse">
              <label
                htmlFor="full-name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200 "
              >
                Full Name
              </label>
              <input
                id="full-name"
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-700 bg-gray-800 ring-offset-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
                placeholder="selvan sri"
                type="text" 
              />
            </div>
            <div className="grid gap-2 hover:animate-pulse">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-700 bg-gray-800 ring-offset-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
                placeholder="selvan2002@gmail.com"
                type="email"  
              />
            </div>
            <div className="grid gap-2 hover:animate-pulse">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
              >
                Message
              </label>
              <textarea
              
                id="message"
                className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-700 bg-gray-800 ring-offset-gray-900 placeholder:text-gray-400 focus-visible:ring-gray-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button onClick={notify}
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gray-50 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={10000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </section>
  )
}
