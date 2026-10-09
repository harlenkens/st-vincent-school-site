import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import BlurText from "@/components/react-bits/BlurText";
import { FadeIn, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
    toast.success(
      "Thank you! Your inquiry has been received. Our school office will be in touch shortly.",
    );
  };

  return (
    <>
      <section className="closing-section">
        <div className="closing-scribble" aria-hidden="true">
          ✳
        </div>
        <div className="container closing-inner">
          <FadeIn>
            <p className="eyebrow light-eyebrow">
              <span className="eyebrow-dot yellow-dot" /> You belong here
            </p>
            <BlurText
              as="h2"
              text="Ready to make the next move?"
              delay={55}
              animateBy="words"
              className="page-blur-title page-blur-title--light"
            />
            <p>
              Start with a conversation. We’re here to answer questions about
              admissions, schedules, vouchers, and finding the right path for your
              child.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="about-section section-pad">
        <div className="container">
          <Reveal>
            <div className="section-intro" style={{ marginBottom: "3rem" }}>
              <p className="eyebrow">
                <span className="eyebrow-dot green-dot" /> Reach the School
              </p>
              <h2>
                Get in <span>touch with VSOP.</span>
              </h2>
            </div>
          </Reveal>

          <Stagger className="terms-grid" stagger={0.1}>
            <StaggerItem>
              <article className="term-card">
                <div style={{ color: "#0f5a45", marginBottom: "1rem" }}>
                  <MapPin size={28} />
                </div>
                <p>Campus Address</p>
                <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>
                  Parkwood Hills
                </h3>
                <span>
                  Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills,
                  Barangay San Isidro, Cainta, Rizal
                </span>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="term-card">
                <div style={{ color: "#e66550", marginBottom: "1rem" }}>
                  <Clock size={28} />
                </div>
                <p>Office Hours</p>
                <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>
                  Mon – Fri
                </h3>
                <span>
                  7:00 AM – 5:00 PM. The administrative office is open for
                  inquiries, enrollment, and document requests.
                </span>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="term-card">
                <div style={{ color: "#f4c531", marginBottom: "1rem" }}>
                  <Mail size={28} />
                </div>
                <p>Inquiries</p>
                <h3 style={{ fontSize: "1.55rem", lineHeight: "1.15" }}>
                  Admissions Desk
                </h3>
                <span>
                  Visit our Information Desk at the campus lobby or submit the
                  inquiry form below for prompt assistance.
                </span>
              </article>
            </StaggerItem>
          </Stagger>

          <div className="contact-main-grid" style={{ marginTop: "4rem" }}>
            <Reveal>
              <div className="contact-form-card">
                <div style={{ marginBottom: "1.8rem" }}>
                  <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                    <span className="eyebrow-dot coral-dot" /> Send a Message
                  </p>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "Bricolage Grotesque, sans-serif",
                      fontSize: "1.85rem",
                      letterSpacing: "-0.04em",
                      color: "#123e31",
                    }}
                  >
                    Submit an Inquiry
                  </h3>
                  <p
                    style={{
                      margin: "0.5rem 0 0",
                      color: "#667169",
                      fontSize: "0.85rem",
                    }}
                  >
                    Fill in your details and our admissions coordinator will reach
                    out to guide you.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={42} className="text-forest" />
                    <h4>Inquiry Sent Successfully!</h4>
                    <p>
                      Thank you, <strong>{formData.parentName}</strong>. We have
                      logged your request regarding{" "}
                      <strong>{formData.inquiryType}</strong> for{" "}
                      <strong>{formData.gradeLevel}</strong>.
                    </p>
                    <Button
                      variant="outline"
                      className="outline-button mt-4 h-auto rounded-full"
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
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent / Guardian Name *</Label>
                      <Input
                        id="parentName"
                        required
                        placeholder="e.g. Maria Santos"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-row grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input
                          id="contactNumber"
                          type="tel"
                          placeholder="e.g. 0917 123 4567"
                          value={formData.contactNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contactNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="e.g. parent@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="form-row grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Level of Interest</Label>
                        <Select
                          value={formData.gradeLevel}
                          onValueChange={(value) =>
                            setFormData({ ...formData, gradeLevel: value })
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Preschool / Kindergarten">
                              Preschool / Kindergarten
                            </SelectItem>
                            <SelectItem value="Elementary (Grades 1–6)">
                              Elementary (Grades 1–6)
                            </SelectItem>
                            <SelectItem value="Junior High School (Grades 7–10)">
                              Junior High School (Grades 7–10)
                            </SelectItem>
                            <SelectItem value="Senior High School (Grades 11–12)">
                              Senior High School (Grades 11–12)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Inquiry Topic</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, inquiryType: value })
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Enrollment & Admissions">
                              Enrollment & Admissions
                            </SelectItem>
                            <SelectItem value="Campus Visit / Tour">
                              Campus Visit / Tour
                            </SelectItem>
                            <SelectItem value="DepEd Voucher Assistance">
                              DepEd Voucher Assistance
                            </SelectItem>
                            <SelectItem value="Tuition & Payment Options">
                              Tuition & Payment Options
                            </SelectItem>
                            <SelectItem value="General Question">
                              General Question
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Notes (Optional)</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="Share any questions or requirements about your child's schooling..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      className="primary-button mt-2 h-auto w-full rounded-full py-3"
                    >
                      Send Inquiry <Send size={15} />
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
