
import {
    Mail,
    Phone,
    MapPin,
    Send
} from "lucide-react";

export default function ContactMe({ darkMode }) {

    const contactInfo = [
        {
            title: "yash@example.com",
            description: "Drop me an email anytime.",
            icon: Mail,
        },
        {
            title: "+91 98765 43210",
            description: "Call me for quick discussion.",
            icon: Phone,
        },
        {
            title: "Surat, Gujarat, India",
            description: "My home town.",
            icon: MapPin,
        },
    ];

    return (

        <section
            id="contact"
            className={`py-14 ${darkMode ? "bg-[#080f25]" : "bg-white"
                }`}
        >

            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}
                <div className="mb-2 flex items-center justify-center gap-5">

                    <span className="h-0.5 w-14 bg-blue-600" />

                    <h2 className="text-3xl font-extrabold">
                        Contact <span className="text-blue-600">Me</span>
                    </h2>

                    <span className="h-0.5 w-14 bg-blue-600" />

                </div>

                <p className={`mb-8 text-center text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    Have a question or want to work together?
                    Feel free to reach out!
                </p>

                <div className="grid gap-10 md:grid-cols-5">

                    {/* Contact Details */}
                    <div className="space-y-5 md:col-span-2">

                        {contactInfo.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="flex items-center gap-5"
                                >

                                    <div className="rounded-full bg-blue-600 p-3 text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <div>

                                        <h3 className="font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* Contact Form */}
                    <div className="border-blue-200 pl-0 md:col-span-3 md:border-l md:pl-10">

                        <form
                            action="mailto:yash@example.com"
                            method="POST"
                            encType="text/plain"
                            className="space-y-3"
                        >

                            <div className="grid gap-3 sm:grid-cols-2">

                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Your Name"
                                    required
                                    className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-blue-600 ${darkMode
                                            ? "border-gray-700 bg-[#111d3a] text-white"
                                            : "border-gray-200 bg-white text-gray-900"
                                        }`}
                                />

                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Your Email"
                                    required
                                    className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-blue-600 ${darkMode
                                            ? "border-gray-700 bg-[#111d3a] text-white"
                                            : "border-gray-200 bg-white text-gray-900"
                                        }`}
                                />

                            </div>

                            <textarea
                                name="Message"
                                rows="4"
                                placeholder="Your Message..."
                                required
                                className={`w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-blue-600 ${darkMode
                                        ? "border-gray-700 bg-[#111d3a] text-white"
                                        : "border-gray-200 bg-white text-gray-900"
                                    }`}
                            />

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                            >

                                <Send className="h-4 w-4" />

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}
