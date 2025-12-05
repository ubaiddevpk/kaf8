import React, { useState } from "react";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Download App Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Télécharger rapidement
              <br />
              l'application sur
            </h2>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <button
                onClick={() => window.open("#", "_blank")}
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src="/Vector.png" alt="" className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs">Télécharger dans</div>
                    <div className="text-base font-semibold">l'App Store</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => window.open("#", "_blank")}
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img src="/GooglePlay.png" alt="" className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs">Disponible sur</div>
                    <div className="text-base font-semibold">
                      Google Play Store
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 overflow-hidden">
        <div className="w-full pl-6 lg:pl-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Nous contacter
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start pr-0">
            {/* Contact Form */}
            <div className="space-y-6 pr-6 lg:pr-0">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrer votre nom ici"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrer adresse e-mail"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez ici votre requête..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full lg:w-auto px-12 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </div>

            {/* Contact Info Card with Background Shape */}
            <div className="relative  ml-auto lg:w-[550px] w-full lg:-mr-6">
              {/* Shape Image */}
              <img
                src="/bg.png"
                alt=""
                className="w-full h-auto object-cover block"
                style={{ display: "block", maxWidth: "none" }}
              />

              {/* Content ON TOP OF SHAPE */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col p-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Kaf8
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-900">
                    <Phone size={20} className="text-blue-600" />
                    <span className="text-base lg:text-lg">+33 212 22 12</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-900">
                    <Mail size={20} className="text-blue-600" />
                    <span className="text-base lg:text-lg">
                      kaf8support@contact.com
                    </span>
                  </div>
                </div>

                <p className="text-gray-900 mb-8 leading-relaxed text-sm lg:text-base">
                  N'hésitez pas à nous contacter. <br />
                  Nous nous ferons le plaisir de <br />
                  vous répondre dans les meilleurs délais
                </p>

                {/* Social Buttons */}
                <div className="flex gap-4 mt-auto">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                    <Facebook size={20} />
                  </button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                    <Instagram size={20} />
                  </button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-white py-6 px-6 lg:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-start gap-6 sm:gap-12 text-sm text-gray-900">
          <button
            onClick={() => window.open("#", "_blank")}
            className="hover:text-blue-600 transition-colors"
          >
            Mentions légales & CGU
          </button>
          <button
            onClick={() => window.open("#", "_blank")}
            className="hover:text-blue-600 transition-colors"
          >
            Politique de confidentialité
          </button>
        </div>

        {/* Copyright Text */}
        <div className="max-w-7xl mx-auto mt-4 text-center sm:text-left text-xs text-gray-700">
          ©2021, kf8transconnect.com, Inc. All rights reserved. Rue Adelson
          Castiaux 203; 7390 Quaregnon (BELGIUM)
        </div>
      </footer>
    </>
  );
};

export default Contact;
