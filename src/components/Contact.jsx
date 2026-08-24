import { ArrowRight, CircleCheck } from "lucide-react";
import { allProducts } from "../data/products";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/rivaru.world@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) throw new Error("Unable to send enquiry");
      setSent(true);
    } catch {
      setError("We could not send your enquiry. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow dark">
            LET'S WORK TOGETHER <span />
          </p>
          <h2>
            Good things
            <br />
            <em>start here.</em>
          </h2>
          <p>
            For sales, export and product enquiries, get in touch with Rivaru
            World.
          </p>
          <div className="contact-list">
            <div>
              <span>Registered manufacturing address</span>
              <b>
                Plot No. 80/12B, Ramtekdi Industrial Estate,
                <br />
                TP skim 2, Hadapsar, Pune-411013.
              </b>
            </div>
            <div>
              <span>International sales / UK & Europe</span>
              <a href="tel:+447385814167">+44 7385814167</a>
            </div>
            <div>
              <span>India</span>
              <a href="tel:+912029512607">+91 20 2951 2607</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:rivaru.world@gmail.com">rivaru.world@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          {sent ? (
            <div className="success-state">
              <CircleCheck size={42} />
              <h3>Thank you, {form.name}.</h3>
              <p>
                Your enquiry is ready to be reviewed. Please contact us directly
                by email or phone to continue the conversation.
              </p>
              <button className="text-link" onClick={() => setSent(false)}>
                Send another enquiry <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Company
                  <input
                    name="company"
                    onChange={update}
                    placeholder="Company name"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    onChange={update}
                    placeholder="Phone number"
                  />
                </label>
              </div>
              <label>
                Product
                <select name="product">
                  <option>Foil AromaShield</option>
                  {allProducts.map((product) => (
                    <option key={product.name}>{product.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  placeholder="Tell us what you are looking for..."
                  rows="4"
                />
              </label>
              <button className="button button-gold" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send enquiry"} <ArrowRight size={17} />
              </button>
              {error && <small>{error}</small>}
              <small>
                Your enquiry will be sent securely to our team.
              </small>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
