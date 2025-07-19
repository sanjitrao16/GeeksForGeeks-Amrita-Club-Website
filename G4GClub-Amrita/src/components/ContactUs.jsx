export default function ContactUs() {
  return (
    <>
      <div className="ContactUs-Section mt-3 p-3">
        <h2 className="text-center text-2xl font-extrabold mb-6 tracking-wide drop-shadow">
          Contact Us
        </h2>

        <form action="" method="post" className="flex justify-center">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="block p-2 border border-gray-300 rounded mb-4"
              required
            />
            <input
              type="text"
              id="name"
              name="name"
              className="block p-2 border border-gray-300 rounded mb-4"
              required
            />
          </div>
          <div>
            <textarea name="" id="" className="border-2"></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
