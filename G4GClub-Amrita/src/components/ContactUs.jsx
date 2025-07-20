export default function ContactUs() {
  return (
    <>
      <div className="ContactUs-Section mt-3 p-3" id="contact-us">
        <h2 className="text-center text-2xl font-extrabold mb-3 tracking-wide drop-shadow">
          Contact Us
        </h2>
        <p className="text-center text-sm text-gray-600">
          Have any queries? Mail us at{" "}
          <span className="italic font-bold">geeksforgeeks@ch.amrita.edu</span>
        </p>
        <form
          action=""
          method="post"
          className="flex flex-col items-center w-full max-w-2xl mx-auto p-5 gap-6"
        >
          <div className="flex flex-col sm:flex-row w-full gap-6">
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#265645] transition w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#265645] transition w-full"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full h-full min-h-[100px] focus:outline-none focus:border-[#265645] transition resize-none"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#265645] text-white font-semibold px-8 py-2 rounded-lg shadow hover:bg-[#1e4436] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
