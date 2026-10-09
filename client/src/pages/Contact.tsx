import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    contactNumber: "",
    email: "",
    gradeLevel: "Elementary (Grades 1–6)",
    inquiryType: "Enrollment & Admissions",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || (!formData.contactNumber && !formData.email)) {
      toast.error("Please provide your name and at least one contact method.");
      return;
    }
    setFormSubmitted(true);
    toast.success("Thank you! Your inquiry has been received. Our school office will be in touch shortly.");
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="closing-section">
        <div className="closing-scribble" aria-hidden="true">
          ✳
        </div>
        <div className="container closing-inner">
          <p className="eyebrow light-eyebrow">
            <span className="eyebrow-dot yellow-dot" /> You belong here
          </p>
          <h2>
            Ready to make
            <br />
            <em>the next move?</em>
          </h2>
          <p>
            Start with a conversation. We’re here to answer questions about
            admissions, schedules, vouchers, and finding the right path for your
            child.
          </p>
        </div>
      </section>

      {/* Contact Information & Office Photo */}
      <section className="about-section section-pad">
        <div className="container">
          <div className="section-intro" style={{ marginBottom: "3rem" }}>
            <p className="eyebrow">
              <span className="eyebrow-dot green-dot" /> Reach the School
            </p>
            <h2>
              Get in <span>touch with VSOP.</span>
            </h2>
          </div>

          <div className="terms-grid">
            <article className="term-card">
              <div style={{ color: "#0f5a45", marginBottom: "1rem" }}>
                <MapPin size={28} />
              </div>
              <p>Campus Address</p>
              <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>Parkwood Hills</h3>
              <span>
                Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills,
                Barangay San Isidro, Cainta, Rizal
              </span>
            </article>

            <article className="term-card">
              <div style={{ color: "#e66550", marginBottom: "1rem" }}>
                <Clock size={28} />
              </div>
              <p>Office Hours</p>
              <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>Mon – Fri</h3>
              <span>
                7:00 AM – 5:00 PM. The administrative office is open for
                inquiries, enrollment, and document requests.
              </span>
            </article>

            <article className="term-card">
              <div style={{ color: "#f4c531", marginBottom: "1rem" }}>
                <Mail size={28} />
              </div>
              <p>Inquiries</p>
              <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>Admissions Desk</h3>
              <span>
                Visit our Information Desk at the campus lobby or submit the
                inquiry form below for prompt assistance.
              </span>
            </article>
          </div>

          {/* Inquiry Form & Office Showcase Grid */}
          <div className="contact-main-grid" style={{ marginTop: "4rem" }}>
            <div className="contact-form-card">
              <div style={{ marginBottom: "1.8rem" }}>
                <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                  <span className="eyebrow-dot coral-dot" /> Send a Message
                </p>
                <h3 style={{ margin: 0, fontFamily: "Bricolage Grotesque, sans-serif", fontSize: "1.85rem", letterSpacing: "-0.04em", color: "#123e31" }}>
                  Submit an Inquiry
                </h3>
                <p style={{ margin: "0.5rem 0 0", color: "#667169", fontSize: "0.85rem" }}>
                  Fill in your details and our admissions coordinator will reach out to guide you.
                </p>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={42} className="text-forest" />
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.parentName}</strong>. We have logged your request regarding <strong>{formData.inquiryType}</strong> for <strong>{formData.gradeLevel}</strong>.
                  </p>
                  <button
                    className="outline-button"
                    style={{ marginTop: "1rem" }}
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        parentName: "",
                        contactNumber: "",
                        email: "",
                        gradeLevel: "Elementary (Grades 1–6)",
                        inquiryType: "Enrollment & Admissions",
                        message: "",
                      });
                    }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Contact Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. 0917 123 4567"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Level of Interest</label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      >
                        <option>Preschool / Kindergarten</option>
                        <option>Elementary (Grades 1–6)</option>
                        <option>Junior High School (Grades 7–10)</option>
                        <option>Senior High School (Grades 11–12)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Inquiry Topic</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      >
                        <option>Enrollment & Admissions</option>
                        <option>Campus Visit / Tour</option>
                        <option>DepEd Voucher Assistance</option>
                        <option>Tuition & Payment Options</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message / Notes (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Share any questions or requirements about your child's schooling..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="primary-button" style={{ width: "100%", marginTop: "0.5rem" }}>
                    Send Inquiry <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Office Visual & Information Desk */}
            <div className="contact-visual-side">
              <div className="contact-image-card">
                <img
                  src="/images/contact-information-desk.jpg"
                  alt="VSOP Information Desk"
                  loading="lazy"
                />
                <div className="contact-img-tag">
                  <span>Front Lobby</span>
                  <strong>Information Desk</strong>
                </div>
              </div>
              <div className="contact-image-card" style={{ marginTop: "1.5rem" }}>
                <img
                  src="/images/contact-admin-office.jpg"
                  alt="VSOP School Administrative Office"
                  loading="lazy"
                />
                <div className="contact-img-tag">
                  <span>Administration</span>
                  <strong>School Office</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
