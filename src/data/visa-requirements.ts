import type { VisaDataMap } from "@/types/visa";

export const visaRequirements: VisaDataMap = {
  azerbaijan: {
    slug: "azerbaijan",
    countryName: "Azerbaijan",
    heroTitle: "Azerbaijan Visa Requirements",
    heroDescription: "Check e-Visa and visit visa requirements for Azerbaijan.",
    byNationality: {
      india: {
        eVisa: {
          title: "Azerbaijan e-Visa Requirements",
          processingTime: "3 working days",
          validity: "90 days",
          stayDuration: "Up to 30 days",
          entries: "Single entry",
          requirements: [
            { label: "Passport", value: "Valid for at least 6 months" },
            { label: "Passport Scan", value: "Clear scanned copy of passport" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Email", value: "Valid email address" },
            { label: "Payment", value: "Valid debit or credit card" },
          ],
          notes: [
            "e-Visa is usually issued electronically.",
            "Make sure passport details match exactly.",
          ],
        },
        visitVisa: {
          title: "Azerbaijan Visit Visa Requirements",
          processingTime: "5 to 7 working days",
          validity: "Depends on approval",
          stayDuration: "As per visa decision",
          entries: "Single / Multiple entry",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Visa Form", value: "Completed visa application form" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Flight Booking", value: "Return flight reservation" },
            { label: "Hotel Booking", value: "Confirmed accommodation" },
            { label: "Bank Statement", value: "Recent financial proof" },
          ],
          notes: [
            "Additional documents may be requested.",
            "Embassy rules can vary by nationality.",
          ],
        },
      },

      pakistan: {
        eVisa: {
          title: "Azerbaijan e-Visa Requirements",
          processingTime: "3 working days",
          validity: "90 days",
          stayDuration: "Up to 30 days",
          entries: "Single entry",
          requirements: [
            { label: "Passport", value: "Valid for at least 6 months" },
            { label: "Passport Scan", value: "Clear scanned copy of passport" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Email", value: "Valid email address" },
            { label: "Payment", value: "Valid debit or credit card" },
          ],
          notes: [
            "e-Visa is usually issued electronically.",
            "Make sure passport details match exactly.",
          ],
        },
      },
    },

    fallback: {
      eVisa: {
        title: "Azerbaijan e-Visa Requirements",
        processingTime: "3 working days",
        validity: "90 days",
        stayDuration: "Up to 30 days",
        entries: "Single entry",
        requirements: [
          { label: "Passport", value: "Valid passport" },
          { label: "Passport Scan", value: "Clear scanned copy of passport" },
          { label: "Email", value: "Valid email address" },
          { label: "Payment", value: "Valid debit or credit card" },
        ],
        notes: ["Eligibility may vary by nationality."],
      },
      visitVisa: {
        title: "Azerbaijan Visit Visa Requirements",
        processingTime: "5 to 7 working days",
        validity: "Depends on approval",
        stayDuration: "As per visa decision",
        entries: "Single / Multiple entry",
        requirements: [
          { label: "Passport", value: "Valid passport" },
          { label: "Visa Form", value: "Completed visa application form" },
          { label: "Photo", value: "Recent passport-size photo" },
          { label: "Flight Booking", value: "Return flight reservation" },
          { label: "Hotel Booking", value: "Confirmed accommodation" },
          { label: "Bank Statement", value: "Recent financial proof" },
        ],

      },
    },
  },

  turkey: {
    slug: "turkey",
    countryName: "Turkey",
    heroTitle: "Turkey Visa Requirements",
    heroDescription: "Check e-Visa and visit visa requirements for Turkey.",
    byNationality: {
      india: {
        eVisa: {
          title: "Turkey e-Visa Requirements",
          processingTime: "Usually quick",
          validity: "Depends on current eligibility",
          stayDuration: "Depends on current eligibility",
          entries: "Single / Multiple entry",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Email", value: "Active email address" },
            { label: "Payment", value: "Debit or credit card" },
          ],

        },
        visitVisa: {
          title: "Turkey Visit Visa Requirements",
          processingTime: "Varies",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Visa Form", value: "Completed application form" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Bank Statement", value: "Financial documents" },
            { label: "NOC", value: "Employer letter if applicable" },
            { label: "Flight & Hotel", value: "Travel booking documents" },
          ],
        },
      },

      bangladesh: {
        visitVisa: {
          title: "Turkey Visit Visa Requirements",
          processingTime: "Varies",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Visa Form", value: "Completed application form" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Bank Statement", value: "Financial documents" },
            { label: "NOC", value: "Employer letter if applicable" },
            { label: "Flight & Hotel", value: "Travel booking documents" },
          ],

        },
      },

      pakistan: {
        visitVisa: {
          title: "Turkey Visit Visa Requirements",
          processingTime: "Varies",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Visa Form", value: "Completed application form" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Bank Statement", value: "Financial documents" },
            { label: "Flight & Hotel", value: "Travel booking documents" },
          ],
        },
      },

      "sri-lanka": {
        visitVisa: {
          title: "Turkey Visit Visa Requirements",
          processingTime: "Varies",
          requirements: [
            { label: "Passport", value: "Valid passport" },
            { label: "Visa Form", value: "Completed application form" },
            { label: "Photo", value: "Recent passport-size photo" },
            { label: "Bank Statement", value: "Financial documents" },
            { label: "Flight & Hotel", value: "Travel booking documents" },
          ],
        },
      },
    },

    fallback: {
      eVisa: {
        title: "Turkey e-Visa Requirements",
        processingTime: "Usually quick",
        validity: "Depends on nationality",
        stayDuration: "Depends on nationality",
        entries: "Single / Multiple entry",
        requirements: [
          { label: "Passport", value: "Valid passport" },
          { label: "Email", value: "Active email address" },
          { label: "Payment", value: "Debit or credit card" },
        ],

      },
      visitVisa: {
        title: "Turkey Visit Visa Requirements",
        processingTime: "Varies",
        requirements: [
          { label: "Passport", value: "Valid passport" },
          { label: "Visa Form", value: "Completed application form" },
          { label: "Photo", value: "Recent passport-size photo" },
          { label: "Bank Statement", value: "Financial documents" },
          { label: "NOC", value: "Employer letter if applicable" },
          { label: "Flight & Hotel", value: "Travel booking documents" },
        ],
      },
    },
  },
};