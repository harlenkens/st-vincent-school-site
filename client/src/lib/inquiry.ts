export const INQUIRY_TOPICS = [
  "Enrollment & Admissions",
  "Senior High Tracks and Strands",
  "Campus Visit / Tour",
  "DepEd Voucher Assistance",
  "Tuition & Payment Options",
  "Facility Inquiry",
  "General Question",
] as const;

export type InquiryTopic = (typeof INQUIRY_TOPICS)[number];

export type InquiryPrefill = {
  inquiryType: InquiryTopic;
  gradeLevel?: string;
  message?: string;
};

const STRAND_LABELS: Record<string, string> = {
  HUMSS: "Humanities and Social Sciences (HUMSS)",
  ABM: "Accountancy, Business & Management (ABM)",
  GAS: "General Academic Strand (GAS)",
  TVL: "Technical-Vocational-Livelihood (TVL)",
};

/** Build a /contact URL that autofills the inquiry form. */
export function contactInquiryHref(options: {
  topic?:
    | "enrollment"
    | "strand"
    | "visit"
    | "voucher"
    | "tuition"
    | "facility"
    | "general";
  strand?: string;
  facility?: string;
}): string {
  const params = new URLSearchParams();
  if (options.topic) params.set("topic", options.topic);
  if (options.strand) params.set("strand", options.strand);
  if (options.facility) params.set("facility", options.facility);
  const query = params.toString();
  return query ? `/contact?${query}` : "/contact";
}

export function resolveInquiryPrefill(search: string): InquiryPrefill | null {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  if (!raw) return null;

  const params = new URLSearchParams(raw);
  const topic = (params.get("topic") || "").toLowerCase();
  const strand = (params.get("strand") || "").toUpperCase();
  const facility = params.get("facility")?.trim() || "";

  if (topic === "strand" || strand) {
    const label = STRAND_LABELS[strand] || strand || "a Senior High strand";
    return {
      inquiryType: "Senior High Tracks and Strands",
      gradeLevel: "Senior High School (Grades 11–12)",
      message: `I'm inquiring about the ${label} track at VSOP.`,
    };
  }

  if (topic === "voucher") {
    return {
      inquiryType: "DepEd Voucher Assistance",
      gradeLevel: "Senior High School (Grades 11–12)",
      message:
        "I'd like to learn more about DepEd SHS voucher / ESC assistance at VSOP.",
    };
  }

  if (topic === "visit") {
    return {
      inquiryType: "Campus Visit / Tour",
      message: "I'd like to schedule a campus visit / guided tour.",
    };
  }

  if (topic === "enrollment") {
    return {
      inquiryType: "Enrollment & Admissions",
      message: "I'm interested in enrollment and admissions for my child.",
    };
  }

  if (topic === "tuition") {
    return {
      inquiryType: "Tuition & Payment Options",
      message: "I'd like information about tuition and payment options.",
    };
  }

  if (topic === "facility" || facility) {
    return {
      inquiryType: "Facility Inquiry",
      message: facility
        ? `I'd like to know more about the ${facility} on campus.`
        : "I'd like to know more about a campus facility.",
    };
  }

  if (topic === "general") {
    return {
      inquiryType: "General Question",
    };
  }

  return null;
}
